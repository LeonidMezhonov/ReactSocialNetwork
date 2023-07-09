import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import UsersContainer from "./components/FindFriendsPage/usersContainer";
import Login from "./components/Login/login";
import ProfilePage from "./components/ProfilePage/profilepageContainer";
import MessagesPage from "./components/MessagesPage/messagesPageContainer";
import LogInContainer from "./components/navbar/auth/authContainer";

function App(props) {
  return (
    <BrowserRouter>
      <LogInContainer />
      <div className="container">
        <div className="wrap">
          <Navbar />
          <Routes>
            <Route path="/profile/:userId?" element={<ProfilePage />} />
            <Route path="/findFriends" element={<UsersContainer />} />
            <Route path="/messages/*" element={<MessagesPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
