import React, { useState, useEffect } from 'react'

const Timeline = ({ timeline }) => {
  const [isOpen, updateIsOpen] = useState(false)
  const [top, updateTop] = useState({ top: 0 })
  const [ref] = useState(React.createRef())

  useEffect(() => {
    if (isOpen) {
      const cs = window.getComputedStyle(ref.current, null)

      updateTop({
        top: `calc(50% - ${
          (
            parseInt(cs.getPropertyValue('height'), 10) +
            parseInt(cs.getPropertyValue('padding-top'), 10) +
            parseInt(cs.getPropertyValue('padding-bottom'), 10) +
            parseInt(cs.getPropertyValue('margin-top'), 10) +
            parseInt(cs.getPropertyValue('margin-bottom'), 10) +
            (parseInt(cs.getPropertyValue('border-width'), 10) * 2)
          ) / 2
        }px)`
      })
    }
  }, [isOpen, ref])

  const expandBubble = () => {
    updateIsOpen(true)
  }

  const generateTextInsets = () => {
    return timeline.facts.map((fact, factIndex) => {
      const texts = fact.texts.map((text, textIndex) => {
        return <p key={textIndex}>{text}</p>
      })
      return <div className="fact-inset" key={factIndex}>{texts}</div>
    })
  }

  return (
    <div className="timeline-block">
      <div className="bubble-container">
        <div className="bubble" onClick={expandBubble}></div>  
      </div>
      <div className="right-side-timeline">
        <div className="timeline-year">{timeline.year}</div>
        <div ref={ref} style={top} className={`timeline-informations ${isOpen ? 'expanded' : ''}`}>
          {generateTextInsets()}
        </div>
      </div>
    </div>
  )
}

export default Timeline
