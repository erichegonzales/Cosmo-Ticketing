import { useNavigate } from "react-router-dom";
import '../App.css';

const Event = ({ event, setEventChosen }) => {
  const navigate = useNavigate();
  const {
    name,
    description,
    game,
    time_start,
    time_end,
    ticket_price,
    banner,
    image_1,
    image_2,
  } = event;

  const handleEventChosen = () => {
    setEventChosen({
      name: name,
      game: game,
      time_start: time_start,
      time_end: time_end,
      ticket_price: ticket_price,
      banner: banner,
    });
    navigate("/checkout");
  };

  return (
    <li className="event-cards">
      <div className="card">
        <div className="banner-section">
          <img className="banner" src={banner} alt={name} />
        </div>
        <div className="more-section">
          <img className="card-image1" src={image_1} alt={name} />
          <img className="card-image2" src={image_2} alt={name} />
        </div>

        <div className="card_content">
          <div className="card_title">{name}</div>
          <p className="card_text">{description}</p>
          <div className="card_detail">
            <p>{game}</p>
            <p>{`${time_start} - ${time_end}`}</p>
            <p>{ticket_price}</p>
          </div>
        </div>
        <button onClick={handleEventChosen}>Buy Ticket</button>
      </div>
    </li>
  );
};

export default Event;