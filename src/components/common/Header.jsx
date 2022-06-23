import React from 'react'

export const Header = () => {
  return (
    <header className='app-header'>
      <nav className='app-header-nav'>
        <a className='app-header-logo' href="/">
          <img src={`${process.env.PUBLIC_URL}/img/header/logo.gif`} alt="" />
        </a>
      </nav>
    </header>
  )
}