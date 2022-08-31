import { useState, useEffect } from "react";
import EventsContainer from "./EventsContainer";

const Home = () => {
  const { events, setEvents } = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/events");
      const req = await res.json();
      setEvents(req);
    };

    fetchData().catch(console.error);
  }, []);



  return (
    <div id="home">
      <div id="welcome-div">
        <h1 id="welcome-title">Welcome to Cosmo Center</h1>
        <h3 id="welcome-subtitle">The home of the greatest eSports competitions in the cosmos.</h3>
      </div>
      <EventsContainer events={events}/>
    </div>
  );
};

export default Home;
