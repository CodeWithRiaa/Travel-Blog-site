import React from 'react'
import globe from '../images/globe.png';

const Navbar = () => {
  return (
    <nav>
        <img src={globe}
            alt="globe" 
            className="world_globe" 
        />

        <p className="blog_text">
            my travel journal.
        </p>
    </nav>
  )
}

export default Navbar