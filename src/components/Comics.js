import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SeriesDetails from './single/SeriesDetails';
import { Link } from 'react-router-dom';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);

  const apiURL =
    `https://gateway.marvel.com:443/v1/public/comics?format=digital%20comic&formatType=comic&noVariants=true&hasDigitalIssue=true&limit=64&offset=20&apikey=${process.env.REACT_APP_API_KEY}`;

  const getMarvelCharacters = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const comicsData = data?.data?.results;
      setComics(comicsData);
      console.log(comicsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMarvelCharacters();
    document.title = "Comics"
  }, []);

  return (
    <div className="comics">
      <h4>Marvel Comics</h4>
      <div className="comics-list">
        {comics.map((comic) => {
          const { id, name, thumbnail, title } = comic;

          const handleComicClick = () => {
            setSelectedComic(comic);
          };
          return (
            <Link to={`/comics/${id}`}>
              <div className="comic" key={id}>
                <img onClick={handleComicClick} src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                <div className="comic-info">
                  <h5>Title: {title}</h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {selectedComic && <SeriesDetails comic={selectedComic}/>}
    </div>
  );
};

export default Comics;