import Cookies from 'js-cookie'

const ACCESS_TOKEN_KEY = 'a8bFrGk9'

const getCookie = name => {
   return Cookies.get(name)
}

const setCookie = (cookieKey, value, expiresInDays = 30) => {
   return Cookies.set(cookieKey, value, { expires: expiresInDays })
}

export const removeCookie = cookieKey => {
   Cookies.remove(cookieKey)
}

export const setAccessToken = (accessToken, expiresInDays) => {
   return setCookie(ACCESS_TOKEN_KEY, accessToken, expiresInDays)
}

const getAccessToken = () => {
   return getCookie(ACCESS_TOKEN_KEY)
}

export const removeAccessToken = () => {
   removeCookie(ACCESS_TOKEN_KEY)
}

export const isLoggedIn = () => {
   if (getAccessToken()) {
      return true
   }
   return false
}
