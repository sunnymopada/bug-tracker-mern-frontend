import { LOGIN_ROUTE_PATH } from '../constants/NavigationConstants'
import { removeAccessToken } from './StorageUtils'

export const gotoLoginPage = history => {
   history.replace(LOGIN_ROUTE_PATH)
}

export const clearSessionAndGotoLogInPage = history => {
   removeAccessToken()
   gotoLoginPage(history)
}
