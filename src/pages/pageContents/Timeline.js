// import React, { useState, useEffect } from 'react'
import React from 'react'
import TimelineBlock from '../../blocks/TimelineBlock'
import timelineData from '../../assets/static-datas/timeline.json'

const Timeline = () => {
  /**
   * I didn't like the feeling of this (with a laptop pad it was not cool)
   * So I cancelled it
   */

  // const [state, updateState] = useState({
  //   offset: 0,
  //   timeout: null
  // })

  // const cancelScroll = (e) => {
  //   e.preventDefault()
  //   window.scrollTo(window.scrollX, window.scrollY)
  //   return false
  // }

  // const scrolling = (e) => {
  //   cancelScroll(e)
  //   const updateOffset = () => {
  //     if (e.deltaY < 0 && state.offset > 0) {
  //       updateState({ offset: state.offset - 1, timeout: null })
  //     } else if (e.deltaY > 0 && state.offset < timelineData.length - 1) {
  //       updateState({ offset: state.offset + 1, timeout: null })
  //     } else {
  //       updateState({ offset: state.offset, timeout: null })
  //     }
  //   }

  //   if (!state.timeout) {
  //     clearTimeout(state.timeout)
  //     updateState({ ...state, timeout: setTimeout(updateOffset, 300) })
  //   }
  // }

  // const scrollToOffset = () => {
  //   window.scrollTo({
  //     top: state.offset * window.innerHeight,
  //     behavior: 'smooth'
  //   })
  // }

  // useEffect(() => {
  //   window.addEventListener('wheel', scrolling, { passive: false })
  //   window.addEventListener('touchmove', scrolling, { passive: false })
  //   window.addEventListener('scroll', cancelScroll)
  //   window.addEventListener('resize', scrollToOffset)
    
  //   return () => {
  //     window.removeEventListener('wheel', scrolling)
  //     window.removeEventListener('touchmove', scrolling)
  //     window.removeEventListener('scroll', cancelScroll)
  //     window.removeEventListener('resize', scrollToOffset)
  //   }
  // })

  // useEffect(() => {
  //   scrollToOffset()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state.offset])

  const generateTimelines = () => {
    return timelineData.map((timeline, index) => {
      return <TimelineBlock timeline={timeline} key={index} />
    })
  }

  return (
    <div className="work-page">
      {generateTimelines()}
    </div>
  )
}

export default Timeline
