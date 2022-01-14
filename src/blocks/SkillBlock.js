import React, { useLayoutEffect, useState } from 'react'
import skills from '../assets/static-datas/skills.json'
import Skill from '../components/Skill'
import SkillRank from '../components/SkillRank'

const SkillBlock = () => {
  const [currentSkillDisplayed, updateCurrentSkillDisplayed] = useState(0)
  const [sizeState, updateSizeState] = useState(null)

  useLayoutEffect(() => {
    const skillListHeight = document.querySelector(".skill-line").offsetHeight;
    
    updateSizeState(skillListHeight * skills.length);
  }, [])

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
        return <p><a href={skill.link} target="_blank" rel="noopener noreferrer">{skill.label}</a></p>
      }
      if (skill.title) {
        return <h4><u>{skill.title}</u></h4>
      }
      if (skill.comment) {
        return <span className="skill-comment">{skill.comment}</span>
      }
      return <p>{skill.label}</p>
    }

    return (
      <div className="techno-list">
        {skills[currentSkillDisplayed].technos.map((skill, index) => {
          return (<div key={index}>{generateContent(skill)}</div>)
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
      <div className="skill-list">
        {generateSkills()}
      </div>
      <div className="technos-container" style={{ height: sizeState ? `${sizeState}px` : 'auto' }}>
        {getRelatedTechnologies()}
      </div>
    </div>
  );
}

export default SkillBlock
