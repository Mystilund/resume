import React from 'react'
import { number } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const SkillRank = ({ rank }) => {
  const getStars = (n) => {
    return Array.from(Array(n)).map((_, index) => {
      return <FontAwesomeIcon key={index} icon={faStar} />
    })
  }

  return (
    <div className="skill-rank">
      {getStars(5)}
      <div className="rank-stars">
        {getStars(rank)}
      </div>
    </div>
  )
}

SkillRank.propTypes = {
  rank: number.isRequired
}

export default SkillRank
