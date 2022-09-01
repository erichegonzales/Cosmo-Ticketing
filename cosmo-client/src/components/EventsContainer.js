import Event from "./Event";

const EventsContainer = ({ events, setEventChosen }) => {
  const eventCards = events.map((eventObj) => {
    return (
      <Event
        key={eventObj.id}
        event={eventObj}
        setEventChosen={setEventChosen}
      />
    );
  });

  return <ul className="event-cards">{eventCards}</ul>;
};

export default EventsContainer;
