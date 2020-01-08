import React from 'react'
import { number, func, oneOfType, arrayOf, node } from 'prop-types'

const Skill = ({ index, openSkillTab, children }) => {
  return (
    <div className="skill-line" onMouseEnter={openSkillTab(index)}>
      {children}
    </div>
  )
}

Skill.propTypes = {
  index: number.isRequired,
  openSkillTab: func.isRequired,
  children: oneOfType([arrayOf(node), node])
}

export default Skill
