import React, { useState } from 'react'
import './Header.css'
import bag from '../../Assets/bagfill.svg'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

export default function Header({ cartItemNum }) {

    const [showClass, setShowClass] = useState('')
    function menuClick() {
        showClass === '' ? setShowClass('show') : setShowClass('')
    }

    function hideMenu() {
        setShowClass('')
    }

    return (
        <header>
            <div className='header-max-width'>
                <div className='header-left-container'>
                    <Link className='logo-container' to="/">
                        <img className='logo-img' src={logo} alt="logo about a cake" />
                        <h1 className='logo-text'>Cake shop</h1>
                    </Link>
                    <Link to='/cart' onClick={hideMenu}>
                        <div className='header-cart-container'>
                            <p className='header-cart-text'>{cartItemNum}</p>
                            <img className='header-cart-img' src={bag} alt="cart icon" />
                        </div>
                    </Link>

                </div>
                <nav>
                    <ul className={`nav-ul ${showClass}`}>
                        <li onClick={hideMenu}><Link className='nav-link' to="/">Home</Link></li>
                        <li onClick={hideMenu}><Link className='nav-link' to="/products">Products</Link></li>
                        <li onClick={hideMenu}><Link className='nav-link' to="/contact">Contact</Link></li>
                    </ul>
                    <div onClick={menuClick} className='hamburger-button'>
                        <span className='hamburger-lines'></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}
