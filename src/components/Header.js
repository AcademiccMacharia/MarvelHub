import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <Link className="link-style" to="/"><h1><span>Marvel</span>Hub</h1></Link>
                </div>
                <div className='nav-items'>
                    <ul className="nav-links">
                        <Link className='link-style' to="/MarvelHub"><li>Home</li></Link>
                        <Link className='link-style' to="/MarvelHub/characters"><li>Characters</li></Link>
                        <Link className='link-style' to="/MarvelHub/comics"><li>Comics</li></Link>
                        <Link className='link-style' to="/MarvelHub/creators"><li>Creators</li></Link>
                        <Link className='link-style' to="/MarvelHub/events"><li>Events</li></Link>
                        <Link className='link-style' to="/MarvelHub/stories"><li>Stories</li></Link>
                        <Link className='link-style' to="/MarvelHub/series"><li>Series</li></Link>
                    </ul>
                </div>
                <div className='search-bar'>
                    <FaSearch />
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header