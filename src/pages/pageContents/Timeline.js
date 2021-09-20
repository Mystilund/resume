import React from 'react'
import { Chrono } from 'react-chrono'
import timelineData from '../../assets/static-datas/timeline.json'

const Timeline = () => {
  const items = timelineData.reduce((acc, timeline) => {
    timeline.facts.forEach((t) => {
      acc.push({
        title: timeline.year,
        cardDetailedText: t.texts.map((text) => <>{text}<br /></>)
      })
    })

    return acc;
  }, [])

  return (
    <div>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" hideControls={true} useReadMore={false} />
    </div>
  )
}

export default Timeline
