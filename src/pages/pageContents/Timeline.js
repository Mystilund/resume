import React from 'react'
import TimelineBlock from '../../blocks/TimelineBlock'
import timelineData from '../../assets/static-datas/timeline.json'

const Timeline = () => {
  const scrollToYear = (year) => {
    return () => {
      const htmlElement = document.querySelector(`#timeline-${year}`)

      if (htmlElement) {
        htmlElement.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }

  const generateShortcuts = () => {
    return timelineData.map((timeline, index) => {
      return <button type="button" key={index} onClick={scrollToYear(timeline.year)}>{timeline.year}</button>
    })
  }

  const generateTimelines = () => {
    return timelineData.map((timeline, index) => {
      return <TimelineBlock timeline={timeline} key={index} />
    })
  }

  return (
    <div className="timeline-page">
      <div className="timeline-shortcuts">{generateShortcuts()}</div>
      <div className="timeline-feed">{generateTimelines()}</div>
    </div>
  )
}

export default Timeline
