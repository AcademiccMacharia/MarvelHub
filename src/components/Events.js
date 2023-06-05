import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiURL = `https://gateway.marvel.com:443/v1/public/events?limit=64&offset=20&apikey=30b2ee8a922f31b3cb43e47c5860246b`;

  const getMarvelEvents = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const eventsData = data?.data?.results;
      setEvents(eventsData);
      console.log(eventsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarvelEvents();
    document.title = "Events";
  }, []);

  useEffect(() => {
    const results = events.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, events]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="events">
      <h4>Marvel Events</h4>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by event title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="events-list">
        {searchResults.length > 0 ? (
          searchResults.map(e => {
            const { id, title, thumbnail, description } = e;

            return (
              <Link to={`/events/${id}`} key={id}>
                <div className="event">
                  <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                  <div className="event-info">
                    <h5>Event Name: {title}</h5>
                    <p>Description: {description}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No matching events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;

