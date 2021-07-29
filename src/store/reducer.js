import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import entitiesReducer from './entities'

export default combineReducers({
   entities: entitiesReducer,
   form: formReducer
})
