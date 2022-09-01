import { useNavigate } from "react-router-dom";

const Event = ({ event, setEventChosen }) => {
  const navigate = useNavigate();
  // const banner = event.images[0].url;
  // const event_picture = event.images[1].url;
  // const event_picture_2 = event.images[2].url;
  const { name, description, game, time_start, time_end, ticket_price, banner, image_1, image_2 } = event;

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
  }

  return (
    <li className="event-cards">
      <div className="card">
        <img className="banner" src={banner} alt={name} />
        <img className="card-image1" src={image_1} alt={name} />
        <img className="card-image2" src={image_2} alt={name} />
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