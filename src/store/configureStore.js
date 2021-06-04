import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import bugsReducer from './bugs/reducer'

const store = createStore(bugsReducer, devToolsEnhancer({ trace: true }))

export default store
