import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import SeriesDetails from './single/SeriesDetails';

const Series = () => {
    const [series, setSeries] = useState([]);
    const [selectedSerie, setSelectedSerie] = useState(null);


    const apiURL = `https://gateway.marvel.com:443/v1/public/series?limit=64&offset=20&apikey=${process.env.REACT_APP_API_KEY}`;

    const getMarvelSeries = async () => {
        try {
            const res = await axios.get(apiURL);
            const data = res.data;
            const seriesData = data?.data?.results;
            setSeries(seriesData)
            console.log(seriesData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMarvelSeries()
    }, [])

    return (

        <div className="series">
            <h4>Marvel Series</h4>
            <div className="series-list">
                {series.map((serie) => {
                    const { id, title, thumbnail } = serie;

                    const handleSeriesClick = () => {
                        setSelectedSerie(serie);
                    };
                    return (
                        <Link to={`/series/${id}`}>
                            <div className='serie' key={id}>
                                <img onClick={handleSeriesClick} src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
                                <div className='serie-info'>
                                    <h5>Serie: {title}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )
                }
            </div>
            {selectedSerie && <SeriesDetails serie={selectedSerie} />}
        </div >
    )
}

export default Series