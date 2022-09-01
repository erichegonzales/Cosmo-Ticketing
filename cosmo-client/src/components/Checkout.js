import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Checkout = ({ eventChosen, userId, loginId }) => {
  // console.log(eventChosen);
  const navigate = useNavigate();

  const handleBuyTicket = async () => {
    if (loginId == 0) {
      alert("Please log in before buying a ticket!");
      navigate("/login");
    }

    // console.log(
    //   userId,
    //   eventChosen.banner,
    //   eventChosen.name,
    //   eventChosen.game,
    //   eventChosen.ticket_price,
    //   eventChosen.time_start,
    //   eventChosen.time_end
    // );

    try {
      const res = await fetch("http://localhost:3000/bought_tickets", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify({
            user_id: userId,
            banner: eventChosen.banner,
            name: eventChosen.name,
            game: eventChosen.game,
            ticket_price: eventChosen.ticket_price,
            time_start: eventChosen.time_start,
            time_end: eventChosen.time_end
          })
        });
        const req = await res.json();
        console.log(req);
      } catch(error) {
        console.log(error)
      }

      alert("Ticket bought!");
  };

  const handleCancelTicket = () => {
    alert("Come back next time!");
    navigate("/");
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


