import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Outlet, Link } from 'react-router-dom'

const Header = () => {

    // const [navbarColor, setNavbarColor] = useState('transparent');

    // useEffect(() => {
    //   const handleScroll = () => {
    //     const currentScrollY = window.scrollY;
    //     const navbarHeight = ; 
  
    //     if (currentScrollY > navbarHeight) {
    //       setNavbarColor('#333');
    //     } else {
    //       setNavbarColor('transparent');
    //     }
    //   };
  
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <Link className="link-style" to="/"><h1><span>Marvel</span>Hub</h1></Link>
                </div>
                <div className='nav-items'>
                    <ul className='nav-links'>
                        <Link className='link-style' to="/"><li>Home</li></Link>
                        <Link className='link-style' to="/characters"><li>Characters</li></Link>
                        <Link className='link-style' to="/comics"><li>Comics</li></Link>
                        <Link className='link-style' to="/creators"><li>Creators</li></Link>
                        <Link className='link-style' to="/events"><li>Events</li></Link>
                        <Link className='link-style' to="/stories"><li>Stories</li></Link>
                        <Link className='link-style' to="/series"><li>Series</li></Link>
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