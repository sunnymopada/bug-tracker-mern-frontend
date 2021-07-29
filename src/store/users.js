import { createSlice } from '@reduxjs/toolkit'

import {
   isLoggedIn,
   removeAccessToken,
   setAccessToken
} from '../utils/StorageUtils'

import { apiCallBegan } from './api'

let lastId = 0

const slice = createSlice({
   name: 'auth',
   initialState: {
      users: [],
      loginStatus: isLoggedIn()
   },
   reducers: {
      userAdded: (state, action) => {
         state.users.push({
            id: ++lastId,
            name: action.payload.name
         })
      },
      userRegistered: (state, action) => {
         state.loginStatus = true
         const { jwt_token, expires_in } = action.payload
         setAccessToken(jwt_token, expires_in)
      },
      userLoggedIn: (state, action) => {
         state.loginStatus = true
         const { jwt_token, expires_in } = action.payload
         setAccessToken(jwt_token, expires_in)
      },
      userLoggedOut: (state, action) => {
         removeAccessToken()
         state.loginStatus = false
      }
   }
})

export const {
   userAdded,
   userRegistered,
   userLoggedIn,
   userLoggedOut
} = slice.actions

const url = '/users'

export const registerUser = requestObject =>
   apiCallBegan({
      url: `${url}/register`,
      method: 'post',
      data: requestObject,
      onSuccess: userRegistered.type
   })

export const loginUser = requestObject =>
   apiCallBegan({
      url: `${url}/login`,
      method: 'post',
      data: requestObject,
      onSuccess: userLoggedIn.type
   })

export const logoutUser = () => dispatch => dispatch(userLoggedOut())

export default slice.reducer
