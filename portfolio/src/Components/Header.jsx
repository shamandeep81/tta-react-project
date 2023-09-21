import React from 'react'
import "./Header.css";

const Header = () => {
  return (

    <header className='header'>
    <a href='#' className='logo'>Shamandeep.</a>
    <nav className='navbar'>
         <a href='https://shamanportfolio.netlify.app/' target='_blank' className='active'>Portfolio</a>
    </nav>
    </header>
  )
}

export default Header