import React, { useState, useEffect } from 'react'
import axios from 'axios'
import stimg from '../assets/story.jpeg'

const Stories = () => {
  const [stories, setStories] = useState([])

  const apiURL = `https://gateway.marvel.com:443/v1/public/stories?limit=64&offset=20&apikey=${process.env.REACT_APP_API_KEY}`;

  const getMarvelStories = async () => {
    try {
      const res = await axios.get(apiURL);
      const data = res.data;
      const storiesData = data?.data?.results;
      setStories(storiesData)
      console.log(storiesData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMarvelStories();
    document.title = "Stories";
  })

  return (
    <div className="stories">
      <h4>Marvel Stories</h4>
      <div className="stories-list">
        {stories.map((story) => {
          const { id, title } = story;

          return (
            <div className='story' key={id}>
              <img src={stimg} alt={title} />
              <div className='story-info'>
                <h5>Story: {title}</h5>
              </div>
            </div>
          )
        }
        )
        }
      </div>
    </div>
  )
}

export default Stories