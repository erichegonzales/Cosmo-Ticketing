import { useState, useEffect } from "react";

const Event = ({ event }) => {
  const { name, description, game, time_start, time_end, ticket_price} = event
  const { images, setImages } = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/images");
      const req = await res.json();
      setImages(req);
    };

    fetchData().catch(console.error);
  }, []);
    
  return (
    <li className="event-cards">
      {/* <div className="card">
        <img className="card-image"
          src={pictureUrl}
          alt={name}
          className="card_image"
          onClick={toggleBio}
        />
        <div className="card_content">
          <div className="card_title">{name}</div>
          <p className="card_text">{description}</p>
          <div className="card_detail">
            <p>{game}</p>
            <p>{`${time_start} - ${time_end}`}</p>
            <p>{ticket_price}</p>
          </div>
        </div>
      </div> */}
    </li>
  );
};

export default Event;