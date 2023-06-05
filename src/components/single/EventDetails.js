import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();
  const [events, setEvents] = useState([]);
  const [eventIndex, setEventIndex] = useState(null);

  const fetchEvent = useCallback(async (eventId) => {
    try {
      const apiURL = `https://gateway.marvel.com:443/v1/public/events/${eventId}?apikey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(apiURL);
      const data = res.data;
      const eventData = data?.data?.results[0];
      setEvents((prevEvents) => [...prevEvents, eventData]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    document.title = `Event | ${eventId}`;

    if (!events[eventIndex]) {
      fetchEvent(eventId);
    }
  }, [eventId, events, eventIndex, fetchEvent]);

  useEffect(() => {
    const index = events.findIndex((event) => event.id.toString() === eventId);
    setEventIndex(index);
  }, [eventId, events]);

  const event = events[eventIndex];

  if (!event) {
    return <div>Loading...</div>;
  }

  const { title, thumbnail, description } = event;

  return (
    <div className="character-details">
      <h4>Event Spotlight</h4>
      <Link className="back-link" to="/events">
        <p>Go back</p>
      </Link>
      <div className="details-list">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        <div className="details-info">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
