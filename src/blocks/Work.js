import React from 'react'

const Work = ({ img, title, children }) => {
  return (
    <div className="work-block">
      <div>
        <div className="img-work-block">
          <img src={img} alt={title} title={title} />
          <div className="work-title">{title}</div>
        </div>
      </div>
      <div className="work-description">
        {children}
      </div>
    </div>
  )
}

export default Work
