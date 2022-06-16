import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import background from "../../image/1049239.jpeg";
import logo from "../../components/Navigation/img/logo1.png";

export default function SignUp() {
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
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div className="login">
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1
            style={{
              color: "black",
              fontSize: 50,
            }}
            className="mt-5 mb-4"
          >
            Login
          </h1>
          <Form.Group controlId="formBasicEmail">
            {/* <Form.Label style={{ color: "black" }}>Email address</Form.Label> */}
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          &nbsp;
          <Form.Group controlId="formBasicPassword">
            {/* <Form.Label style={{ color: "white" }}>Password</Form.Label> */}
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
              Log in
            </Button>
          </Form.Group>
          <Link
            to="/signup"
            style={{
              textAlign: "center",
              color: "red",
              backgroundColor: "white",
              fontSize: 20,
            }}
          >
            Click here to sign up
          </Link>
        </Form>
      </Container>
    </div>
  );
}
