import React, { useEffect } from "react";
import "./App.css";
import background from "./image/1049239.jpeg";

import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import HeroBanner from "./components/HeroBanner";
import HomePage from "./pages/Home";
import ProfileDetails from "./pages/DetailPage";
import ProfilePage from "./pages/ProfilePage";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import FavoritesPage from "./pages/FavoritesPage";
import { selectUser } from "./store/user/selectors";

const Home = () => (
  <HeroBanner>
    <h1>Home</h1>
  </HeroBanner>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const user = useSelector(selectUser);

  console.log("user", user);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  const protectedRoute = (Page) => {
    return user ? <Page /> : <Navigate to="/" />;
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/profiles/:id" element={<ProfileDetails />} />
        <Route
          exact
          path="/favorites"
          element={protectedRoute(FavoritesPage)}
        />
        <Route path="/profile" element={protectedRoute(ProfilePage)} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
