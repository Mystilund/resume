import React from 'react'
import SkillBlock from '../../blocks/SkillBlock'
import profilePicture from '../../assets/images/profile.png'

const About = () => {
  return (
    <div className="about-page">
      <div className="profile-picture">
        <img src={profilePicture} alt="" title="" />
      </div>
      <div className="profile-picture-subtitle text-centered">
        <i>(it's me)</i>
      </div>
      <SkillBlock />
      <hr className="margin-top-50 margin-bot-50" />
      <h2>Something else ?</h2>
      <p>Yeah, I can do and I like other things !</p>
      <ul className="no-bullet">
        <li>
          <span role="img" aria-label="love">💛</span>
          <span> Videogames</span>
        </li>
        <li>
          <span role="img" aria-label="camera emoji">📷</span>
          <span> Photography</span>
        </li>
        <li>
          <span role="img" aria-label="paintbrush emoji">🖌️</span>
          <span> Drawing</span>
        </li>
        <li>
          <span role="img" aria-label="music emoji">🎧</span>
          <span> Music</span>
        </li>
        <li>
          <span role="img" aria-label="video emoji">🎬</span>
          <span> Series</span>
        </li>
        <li>
          <span role="img" aria-label="meat emoji">🍖</span>
          <span> Food</span>
        </li>
      </ul>
    </div>
  )
}

export default About
