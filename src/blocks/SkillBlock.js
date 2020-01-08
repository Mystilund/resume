import React, { useState } from 'react'
import skills from '../assets/static-datas/skills.json'
import Skill from '../components/Skill'
import SkillRank from '../components/SkillRank'

const SkillBlock = () => {
  const [currentSkillDisplayed, updateCurrentSkillDisplayed] = useState(null)

  const openSkillTab = (index) => {
    return () => {
      updateCurrentSkillDisplayed(index)
    }
  }

  const getRelatedTechnologies = () => {
    if (currentSkillDisplayed === null || typeof skills[currentSkillDisplayed].technos === 'undefined') {
      return null
    }

    return (
      <div>
        {
          skills[currentSkillDisplayed].technos.map((skill, index) => {
            return <p key={index}><a href={skill.link}>{skill.label}</a></p>
          })
        }
      </div>
    )
  }

  const generateSkills = () => {
    return skills.map((skill, index) => {
      return (
        <Skill key={index} index={index} openSkillTab={openSkillTab}>
          <span className="skill-name">{skill.label}</span>
          {typeof skill.rank !== 'undefined' ? <SkillRank rank={skill.rank} /> : null }
        </Skill>
      )
    })
  }

  return (
    <div>
      <div>{generateSkills()}</div>
      <div>{getRelatedTechnologies()}</div>
    </div>
  )
}

export default SkillBlock
