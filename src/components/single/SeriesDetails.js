import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

const SeriesDetails = () => {
  const { serieId } = useParams();
  const [series, setSeries] = useState([]);
  const [serieIndex, setSerieIndex] = useState(null);

  const fetchSerie = useCallback(async (serieId) => {
    try {
      const apiURL = `https://gateway.marvel.com:443/v1/public/series/${serieId}?apikey=${process.env.REACT_APP_API_KEY}`;
      const res = await axios.get(apiURL);
      const data = res.data;
      const serieData = data?.data?.results[0];
      setSeries((prevSeries) => [...prevSeries, serieData]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    document.title = `Serie | ${serieId}`;

    if (!series[serieIndex]) {
      fetchSerie(serieId);
    }
  }, [serieId, series, serieIndex, fetchSerie]);

  useEffect(() => {
    const index = series.findIndex((serie) => serie.id.toString() === serieId);
    setSerieIndex(index);
  }, [serieId, series]);

  const serie = series[serieIndex];

  if (!serie) {
    return <div>Loading...</div>;
  }

  const { title, thumbnail, description } = serie;

  return (
    <div className="character-details">
      <h4>Series Spotlight</h4>
      <Link className="back-link" to="/series">
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

export default SeriesDetails;
