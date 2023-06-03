import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Creators = () => {
  const [creators, setCreators] = useState([]);

  const apiURL = `https://gateway.marvel.com:443/v1/public/creators?limit=64&offset=45&apikey=${process.env.REACT_APP_API_KEY}`;
  const getMarvelCreators = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const creatorsData = data?.data?.results;
      setCreators(creatorsData)
      console.log(creatorsData)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getMarvelCreators();
    document.title = "Creators";
  }, [])

  return (
    <div className="creators">
      <h4>Marvel Creators</h4>
      <div className="creators-list">
        {creators.map((creator) => {
          const { id, fullName, thumbnail } = creator;

          return (
            <div className='creator' key={id}>
              <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={fullName} />
              <div className='creator-info'>
                <h5>Creator Name: {fullName}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Creators