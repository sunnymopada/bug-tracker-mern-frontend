import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import logger from './middleware/errorLogger'

import reducer from './reducer'

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
})

export default store
