import Event from "./Event";

const EventsContainer = ({ events }) => {
  const eventCards = events.map((eventObj) => {
    return <Event key={eventObj.id} event={eventObj} />;
  });

  return <ul className="event-cards">{eventCards}</ul>;
};

export default EventsContainer;
