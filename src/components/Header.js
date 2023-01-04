import React from 'react'
import {Link} from 'react-scroll'
const Header = () => {
  return (
    <div>
      <div className='nav-container'>
        <div className='mobileIcon'>
          <div>=</div>
        </div>
        <nav className="nav">
          <div className="header-btn">
            <Link to="home" spy={true} smooth={true} offset={-150} duration={500} >Home</Link>
          </div>
          <div className="header-btn">
            <Link to='projects' spy={true} smooth={true} offset={-80} duration={500}>Projects</Link>
          </div>
          <div className="header-btn">
           <Link to='about' spy={true} smooth={true} offset={-140} duration={500}>About</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
