import React, { useState, useContext, useEffect } from 'react'
import routerHelper from '../helpers/routerHelper'

const AppContext = React.createContext({})

const getFragment = () => {
  return window.location.hash.replace('#/', '')
}

const manageFragmentChange = (updateState) => {
  return () => {
    updateState({ currentRoute: routerHelper.detectRoute(getFragment()) })
  }
}

export const useApp = () => useContext(AppContext)

export const AppProvider = ({ children = (<div></div>) }) => {
  const [state, updateState] = useState({
    currentRoute: routerHelper.detectRoute(getFragment())
  })

  useEffect(() => {
    window.addEventListener('hashchange', manageFragmentChange(updateState))
    return () => {
      window.removeEventListener('hashchange', manageFragmentChange(updateState))
    }
  }, [])

  const providerParameters = {
    currentRoute: state.currentRoute,
    updateRoute: (value) => updateState({ ...state, currentRoute: value })
  }

  return (
    <AppContext.Provider value={providerParameters}>
      {children}
    </AppContext.Provider>
  )
}

