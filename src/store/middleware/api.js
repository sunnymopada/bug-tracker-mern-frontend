import axios from 'axios'

import {
  apiCallBegan,
  apiCallFailed,
  apiCallSuccess,
  BASE_BUGS_URL,
} from '../api'

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) {
      return next(action)
    }
    next(action)
    const { url, method, data, onSuccess, onError } = action.payload
    try {
      const response = await axios.request({
        baseURL: BASE_BUGS_URL,
        url,
        method,
        data,
      })
      //General
      dispatch(apiCallSuccess(response.data))
      //Specific
      if (onSuccess) {
        dispatch({ type: onSuccess, payload: response.data })
      }
    } catch (error) {
      //General
      dispatch(apiCallFailed(error))
      //Specific
      if (onError) {
        dispatch({ type: onError, payload: error })
      }
    }
  }

export default api
