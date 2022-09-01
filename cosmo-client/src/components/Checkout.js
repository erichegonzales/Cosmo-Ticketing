// import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Checkout = ({ eventChosen }) => {
  // console.log(eventChosen)
    const navigate = useNavigate();


  const handleBuyTicket = () => {
     const fetchData = async () => {
       const res = await fetch("http://localhost:3000/events");
       const req = await res.json();
      //  setEvents(req);
     };

     fetchData().catch(console.error);
  }

   const handleCancelTicket = () => {
      alert('Come back next time!')
      navigate("/home");
   };

  return (
    <div>
      <h1>Would you like to buy this ticket?</h1>
      <div className="ticket-details">
        <img src={eventChosen.banner}></img>
        <h3>{eventChosen.name}</h3>
        <h3>{eventChosen.game}</h3>
        <h3>{eventChosen.ticket_price}</h3>
        <h3>{eventChosen.time_start}</h3>
        <h3>{eventChosen.time_end}</h3>
      </div>
      <button onClick={handleBuyTicket}>Yes</button>
      <button onClick={handleCancelTicket}>No</button>
    </div>
  );
};

export default Checkout;
