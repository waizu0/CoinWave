import React, {useState} from 'react'
import './navbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {

    const[nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div>
        <div className="header">
            <div className="container">
                <h1>Coin<span className='primary'>Wave</span></h1>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Featured</a>
                    </li>
                    <li>
                        <a href="/">Earn</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
                <div className="btn-group">
                    <button className="btn">CONNECT WALLET!</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {nav ? (<FaTimes size={20}/>) : (<FaBars size={20}/>)}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar