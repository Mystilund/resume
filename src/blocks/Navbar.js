import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import AnimatedText from '../components/AnimatedText'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  TIMELINE_ROUTE,
  PROJECTS_ROUTE,
  CONTACT_ROUTE
} from '../constants/routeConstants'

const Navbar = () => {
  const { currentRoute } = useApp()
  const [isBurgerMenuOpened, updateBurgerMenuState] = useState(false)

  const activeClass = (route) => {
    return currentRoute === route ? 'active' : ''
  }

  const toggleMobileMenu = () => {
    updateBurgerMenuState(!isBurgerMenuOpened)
  }

  return (
    <nav className={`navbar ${isBurgerMenuOpened ? 'active' : ''}`}>
      <div className="burger-menu" onClick={toggleMobileMenu}>
        <div className="burger-line-top"></div>
        <div className="burger-line-middle"></div>
        <div className="burger-line-bottom"></div>
      </div>
      <div className="fixed-container">
        <ul>
          <li className={activeClass(HOME_ROUTE)}>
            <Link to="">
              <AnimatedText hoverColor="#CC3333">Home</AnimatedText>
            </Link>
          </li>
          <li className={activeClass(ABOUT_ROUTE)}>
            <Link to="about">
              <AnimatedText hoverColor="#CC3333">About</AnimatedText>
            </Link>
          </li>
          <li className={activeClass(TIMELINE_ROUTE)}>
            <Link to="timeline">
              <AnimatedText hoverColor="#CC3333">Timeline</AnimatedText>
            </Link>
          </li>
          <li className={activeClass(PROJECTS_ROUTE)}>
            <Link to="projects">
              <AnimatedText hoverColor="#CC3333">Projects</AnimatedText>
            </Link>
          </li>
          <li className={activeClass(CONTACT_ROUTE)}>
            <Link to="contact">
              <AnimatedText hoverColor="#CC3333">Contact</AnimatedText>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
