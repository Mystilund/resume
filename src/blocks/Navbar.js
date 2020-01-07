import React from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../contexts/AppContext'
import AnimatedText from '../components/AnimatedText'
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  WORKS_ROUTE,
  PROJECTS_ROUTE,
  CONTACT_ROUTE
} from '../constants/routeConstants'

const Navbar = () => {
  const { currentRoute } = useApp()

  const activeClass = (route) => {
    return currentRoute === route ? 'active' : ''
  }

  return (
    <nav className="navbar">
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
        <li className={activeClass(WORKS_ROUTE)}>
          <Link to="works">
            <AnimatedText hoverColor="#CC3333">Works</AnimatedText>
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
    </nav>
  )
}

export default Navbar
