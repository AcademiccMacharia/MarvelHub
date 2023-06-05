import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Creators = () => {
  const [creators, setCreators] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiURL = `https://gateway.marvel.com:443/v1/public/creators?limit=64&offset=45&apikey=30b2ee8a922f31b3cb43e47c5860246b`;

  const getMarvelCreators = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const creatorsData = data?.data?.results;
      setCreators(creatorsData);
      console.log(creatorsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarvelCreators();
    document.title = "Creators";
  }, []);

  useEffect(() => {
    const results = creators.filter(creator =>
      creator.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, creators]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="creators">
      <h4>Marvel Creators</h4>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by creator name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="creators-list">
        {searchResults.length > 0 ? (
          searchResults.map(creator => {
            const { id, fullName, thumbnail } = creator;

            return (
              <div className="creator" key={id}>
                <img
                  src={`${thumbnail.path}.${thumbnail.extension}`}
                  alt={fullName}
                />
                <div className="creator-info">
                  <h5>Creator Name: {fullName}</h5>
                </div>
              </div>
            );
          })
        ) : (
          <p>No matching creators found.</p>
        )}
      </div>
    </div>
  );
};

export default Creators;
