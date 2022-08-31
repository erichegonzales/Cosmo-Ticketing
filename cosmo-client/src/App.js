import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvent from './components/AddEvent';
import AdminProfile from "./components/AdminProfile";
import Checkout from './components/Checkout';
import Home from './components/Home';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/admin" element={<AdminProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
