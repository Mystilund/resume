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
      <p>About</p>
    </div>
  )
}

export default About
