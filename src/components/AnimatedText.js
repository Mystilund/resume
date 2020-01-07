import React from 'react'
import { string } from 'prop-types'

const AnimatedText = ({
  children,
  hoverColor
}) => {
  return (
    <div className="animated-text">
      <div className="baseTxt">{children}</div>
      <div className="hoverTxt" style={{ color: hoverColor }}>{children}</div>
    </div>
  )
}

AnimatedText.propTypes = {
  hoverColor: string.isRequired
}

export default AnimatedText
