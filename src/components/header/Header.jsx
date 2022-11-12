import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4 className="text-light">Welcome to</h4>
        <h1 className='app-title'>TechSavvyCA</h1>
        <h5 className="text-light">A digital dashboard showcasing how CAs around the world are leveraging technology to work more efficiently!</h5>
      </div>
    </header>
  )
}

export default Header
