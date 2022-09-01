import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ loginId, setLoginId, userId, setUserId }) => {
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
    is_admin: "",
  });
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/users/${userId}`);
      const req = await res.json();
      setCurrUser({
        id: req.id,
        name: req.name,
        email: req.name,
        password: req.name,
        is_admin: req.is_admin,
      });
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3000/bought_tickets`);
      const req = await res.json();
      setTickets(req);
    };

    fetchData().catch(console.error);
  }, []);

  const filteredTickets = tickets.filter(
    (ticket) => currUser.id == ticket.user_id
  );

  const handleLogOut = () => {
    setLoginId(0);
    setUserId(0);
    alert("Successfully logged out!");
    navigate("/");
  };
  return (
    <div>
      <h1> {userId == 0 ? "Logged out" : `${currUser.name}'s Profile`} </h1>
      <button onClick={handleLogOut}>Log Out</button>
      {filteredTickets.map((ticket) => {
        return (
          <div>
            <h3>{ticket.name}</h3>
            <h3>{ticket.game}</h3>
            <h3>{ticket.ticket_price}</h3>
            <br></br>
          </div>
        );
      })}
    </div>
  );
};

export default UserProfile;
