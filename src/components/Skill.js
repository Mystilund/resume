import React from 'react'
import { number, func, oneOfType, arrayOf, node, bool } from 'prop-types'

const Skill = ({ index, openSkillTab, children, isActive }) => {
  return (
    <div className={`skill-line ${isActive ? 'active' : ''}`} onMouseEnter={openSkillTab(index)}>
      {children}
    </div>
  )
}

Skill.propTypes = {
  isActive: bool.isRequired,
  index: number.isRequired,
  openSkillTab: func.isRequired,
  children: oneOfType([arrayOf(node), node])
}

export default Skill
