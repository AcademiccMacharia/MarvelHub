import React from 'react'

const Characters = () => {
    //fetch from marvel api character data

    const getMarvelCharacters = () => {
        fetch('https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=40&apikey=30b2ee8a922f31b3cb43e47c5860246b')
        .then(response => response.json())
        .then(data => console.log(data))
    }
    console.log(getMarvelCharacters())
    return (
        <div className='characters'>
            <h4>Marvel Characters</h4>
            <div className='characters-list'>
            </div>
        </div>
    )
}

export default Characters