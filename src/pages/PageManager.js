// import React from 'react'
import React, { useState, useEffect } from 'react'
import pageContents from './pageContents'
import { useApp } from '../contexts/AppContext'
import { mapping } from '../constants/routeConstants'

const getRightPage = (currentRoute) => {
  for (let index in mapping) {
    if (currentRoute === mapping[index]) {
      return index
    }
  }

  return 'HOME_ROUTE'
}

const PageManager = () => {
  const { currentRoute } = useApp()
  const [ state, updateState ] = useState(
    React.createElement(pageContents[getRightPage(currentRoute)])
  )

  useEffect(() => {
    updateState(React.createElement(pageContents[getRightPage(currentRoute)]))
  }, [currentRoute])

  return state
}

export default PageManager
