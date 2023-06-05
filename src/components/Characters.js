import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

const apiURL = `https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=40&apikey=30b2ee8a922f31b3cb43e47c5860246b`;

  const getMarvelCharacters = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const charactersData = data?.data?.results;
      setCharacters(charactersData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarvelCharacters();
    document.title = "Characters"
  }, []);

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery, characters]);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="characters">
      <h4>Marvel Characters</h4>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by character name..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="characters-list">
        {searchResults.length > 0 ? (
          searchResults.map(character => {
            const { id, name, thumbnail } = character;

            return (
              <div className="character" key={id}>
                <Link to={`/characters/${id}`}>
                  <img className="glitch-image" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                </Link>
                <div className="character-info">
                  <h5>Name: {name}</h5>
                </div>
              </div>
            );
          })
        ) : (
          <p>No matching characters found.</p>
        )}
      </div>
    </div>
  );
};

export default Characters;
