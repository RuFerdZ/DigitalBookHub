import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/auth/PrivateRoute";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import UserProfile from "./components/UserProfile";
import BookPage from "./components/BookPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/bookpage" element={<BookPage />} />
        <Route path="/book/*">
          <Route path=":id" element={<BookPage />} />
        </Route>
        <Route path="/userprofile/*" element={<PrivateRoute />}>
          <Route path=":id" element={<UserProfile />} />
        </Route>
        {/* <Route path="/userprofile" element={<UserProfile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
