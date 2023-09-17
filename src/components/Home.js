import React, {useEffect} from 'react'
import videoBg from '../assets/vid.mp4'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() => {
    document.title = "MarvelHub"
  }, [])
  return (
    <div className="homepage">
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='content'>
        <h3>MarvelHub</h3>
        <p><span>Marvelize Your World</span></p>
        <p> Unlock the Marvel Universe's Endless Wonders! Dive into the Backstories of Iconic Characters, Amass a Collection of Rare Comics, Pay Tribute to the Visionary Creators, Immerse Yourself in Thrilling Events, and Embark on Epic Journeys through Unforgettable Stories.</p>
        <Link to="/MarvelHub/characters"><button className='home-btn'>Dive In!</button></Link>
      </div>
    </div>
  )
}

export default Home