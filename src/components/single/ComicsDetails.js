import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

const ComicsDetails = () => {
  const { comicId } = useParams();
  const [comics, setComics] = useState([]);
  const [comicIndex, setComicIndex] = useState(null);

  const fetchComic = useCallback(async (comicId) => {
    try {
      const apiURL = `https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(apiURL);
      const data = res.data;
      const comicData = data?.data?.results[0];
      setComics((prevComics) => [...prevComics, comicData]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    document.title = `Comic | ${comicId}`;

    if (!comics[comicIndex]) {
      fetchComic(comicId);
    }
  }, [comicId, comics, comicIndex, fetchComic]);

  useEffect(() => {
    const index = comics.findIndex((comic) => comic.id.toString() === comicId);
    setComicIndex(index);
  }, [comicId, comics]);

  const comic = comics[comicIndex];

  if (!comic) {
    return <div>Loading...</div>;
  }

  const { title, thumbnail, description } = comic;

  return (
    <div className="character-details">
      <h4>Comic Spotlight</h4>
      <Link className="back-link" to="/comics">
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

export default ComicsDetails;
