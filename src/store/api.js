import { createAction } from '@reduxjs/toolkit'

export const BASE_BUGS_URL = 'https://sunny-bug-tracker-mern.herokuapp.com/api'

export const apiCallBegan = createAction('api/callBegan')

export const apiCallSuccess = createAction('api/callSuccess')

export const apiCallFailed = createAction('api/callFailed')
