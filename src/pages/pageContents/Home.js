import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [animationState, updateState] = useState(
    Array.from(Array(6)).map((x) => {
      return { opacity: 0 }
    })
  )

  useEffect(() => {
    setTimeout(() => {
      const newState = [ ...animationState ]
      const indexToUpdate = animationState.findIndex((s) => {
        return s.opacity === 0
      })

      if (indexToUpdate !== -1) {
        newState[indexToUpdate] = { opacity: 1 }
        updateState(newState)
      }
    }, 1800)
  }, [ animationState ])

  return (
    <div className="home-page">
      <div className="pre-title">Hi, my name is</div>
      <h1 style={animationState[0]}>Florian Dewulf.</h1>
      <h2 style={animationState[1]}>I type weird things and it appears on your screen.</h2>
      <div className="home-description">
        <p style={animationState[2]}>
          <span>I'm a `Fullstack Web Developper` based in Lille </span>
          <span role="img" aria-label="umbrella emoji">☔</span>
        </p>
        <p style={animationState[3]}>
          <span>I </span>
          <span role="img" aria-label="love">💙</span>
          <span> JS (node, React...), Docker </span>
          <span role="img" aria-label="whale emoji">🐳</span>
          <span>, Windows </span>
          <span role="img" aria-label="computer emoji">💻</span>
          <span>, AWS </span>
          <span role="img" aria-label="satellite dish emoji">📡</span>
        </p>
        <p style={animationState[4]}>
          <span>I </span>
          <span role="img" aria-label="love">🧡</span>
          <span> videogames </span>
          <span role="img" aria-label="joystick emoji">🎮</span>
          <span>, music </span>
          <span role="img" aria-label="music emoji">🎼</span>
          <span> and to travel </span>
          <span role="img" aria-label="coffee emoji">✈</span>
        </p>
        <p style={animationState[5]} className="text-centered brand-links">
          <a href="https://www.linkedin.com/in/floriandewulf/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <span> - </span>
          <a href="https://twitter.com/LundProd" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <span> - </span>
          <a href="https://www.instagram.com/mystilund/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Home
