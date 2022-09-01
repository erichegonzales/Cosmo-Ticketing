import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import AdminProfile from "./components/AdminProfile";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Nav from "./components/Nav";
import { useState } from 'react';

function App() {
  //if user-id is 0, no one is logged in / if 1, logged in
  const [loginId, setLoginId] = useState(0);
  const [userId, setUserId] = useState(0)
  const [eventChosen, setEventChosen] = useState({
    user_id: 0,
    banner: "",
    name: "",
    game: "",
    time_start: "",
    time_end: "",
    ticket_price: ""
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin" element={<AdminProfile />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                eventChosen={eventChosen}
                userId={userId}
                loginId={loginId}
              />
            }
          />
          <Route path="/" element={<Home setEventChosen={setEventChosen} />} />
          <Route
            path="/login"
            element={
              <Login
                loginId={loginId}
                setLoginId={setLoginId}
                setUserId={setUserId}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <UserProfile
                loginId={loginId}
                setLoginId={setLoginId}
                userId={userId}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
