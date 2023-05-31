import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <h1><span>Marvel</span>Hub</h1>
                </div>
                <div className='nav-items'>
                    <ul className='nav-links'>
                        <Link className='link-style' to="/"><li>Home</li></Link>
                        <Link className='link-style' to="/characters"><li>Characters</li></Link>
                        <Link className='link-style' to="/comics"><li>Comics</li></Link>
                        <Link className='link-style' to="/creators"><li>Creators</li></Link>
                        <Link className='link-style' to="events"><li>Events</li></Link>
                        <Link className='link-style' to="/stories"><li>Stories</li></Link>
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