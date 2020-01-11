import React, { useState } from 'react'
import skills from '../assets/static-datas/skills.json'
import Skill from '../components/Skill'
import SkillRank from '../components/SkillRank'

const SkillBlock = () => {
  const [currentSkillDisplayed, updateCurrentSkillDisplayed] = useState(0)

  const openSkillTab = (index) => {
    return () => {
      updateCurrentSkillDisplayed(index)
    }
  }

  const getRelatedTechnologies = () => {
    if (currentSkillDisplayed === null || typeof skills[currentSkillDisplayed].technos === 'undefined') {
      return null
    }

    const generateContent = (skill) => {
      if (skill.link) {
        return <a href={skill.link} target="_blank" rel="noopener noreferrer">{skill.label}</a>
      }
      return <span>{skill.label}</span>
    }

    return (
      <div className="techno-list">
        {skills[currentSkillDisplayed].technos.map((skill, index) => {
          return (<p key={index}>{generateContent(skill)}</p>)
        })}
      </div>
    )
  }

  const generateSkills = () => {
    return skills.map((skill, index) => {
      return (
        <Skill key={index} index={index} openSkillTab={openSkillTab} isActive={index === currentSkillDisplayed}>
          <span className="skill-name">{skill.label}</span>
          {typeof skill.rank !== 'undefined' ? <SkillRank rank={skill.rank} /> : null }
        </Skill>
      )
    })
  }

  return (
    <div className="skill-block">
      <div className="skill-list">{generateSkills()}</div>
      <div className="technos-container">{getRelatedTechnologies()}</div>
    </div>
  )
}

export default SkillBlock
