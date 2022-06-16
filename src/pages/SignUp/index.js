import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password));

    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div className="signup">
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1
            className="mt-5 mb-5"
            style={{
              color: "black",
              fontSize: 50,
            }}
          >
            Signup
          </h1>
          <Form.Group controlId="formBasicName">
            {/* <Form.Label>Name</Form.Label> */}
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            &nbsp;
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button
              variant="primary"
              type="submit"
              onClick={submitForm}
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: 25,
              }}
            >
              Sign up
            </Button>
          </Form.Group>
          <Link
            to="/login"
            style={{
              textAlign: "center",
              color: "red",
              backgroundColor: "white",
              fontSize: 20,
            }}
          >
            Click here to log in
          </Link>
        </Form>
      </Container>
    </div>
  );
}
