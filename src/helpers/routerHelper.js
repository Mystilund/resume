import * as routeConstants from '../constants/routeConstants'

export default {
  detectRoute (currentPath) {
    if (Object.values(routeConstants).includes(currentPath)) {
      return currentPath
    } else {
      return routeConstants.HOME_ROUTE
    }
  }
}
