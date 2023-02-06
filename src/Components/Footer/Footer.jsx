import React from 'react'
import './Footer.css'
import facebookLogo from '../../Assets/facebook.svg'
import instaLogo from '../../Assets/insta.svg'
import ytLogo from '../../Assets/yt.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer>
            <p>Cake shop &copy; {year} </p>
            <div className='social-container'>
                <img className='social-logo' src={facebookLogo} alt="facebook logo" />
                <img className='social-logo' src={instaLogo} alt="instagram logo" />
                <img className='social-logo' src={ytLogo} alt="youtube logo" />
            </div>
            <nav>
                <ul className='footer-nav'>
                    <li><Link className='footer-nav-link' to="/">Home</Link></li>
                    <li><Link className='footer-nav-link' to="/products">Products</Link></li>
                    <li><Link className='footer-nav-link' to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </footer>
    )
}