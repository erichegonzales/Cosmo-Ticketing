import { useState, useEffect } from "react";

const Event = ({ event }) => {
  const banner = event.images[0].url
  const event_picture = event.images[1].url
  const event_picture_2 = event.images[2].url
  const { name, description, game, time_start, time_end, ticket_price} = event
  

  return (
    <li className="event-cards">
      <div className="card">
        <img className="banner" src={banner} alt={name} />
        <img className="card-image1" src={event_picture} alt={name} />
        <img className="card-image2" src={event_picture_2} alt={name} />
        <div className="card_content">
          <div className="card_title">{name}</div>
          <p className="card_text">{description}</p>
          <div className="card_detail">
            <p>{game}</p>
            <p>{`${time_start} - ${time_end}`}</p>
            <p>{ticket_price}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Event;