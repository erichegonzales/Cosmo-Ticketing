import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
