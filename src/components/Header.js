import React from 'react'
import {Link} from "react-router-dom"
import logo from '../images/logo.png';

function Header() {
    return (
        <div className='header d-flex'>
            <div className="logo"> <img src={ logo } alt="logo_image" /> </div>
            <ul className="header-content">
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="/context"> Checkout </Link></li>
            </ul>
        </div>
    )
}

export default Header;
