import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import errorLogger from './middleware/errorLogger'

import api from './middleware/api'

import reducer from './reducer'

const store = configureStore({
   reducer,
   middleware: [...getDefaultMiddleware(), errorLogger, api]
})

export default store
