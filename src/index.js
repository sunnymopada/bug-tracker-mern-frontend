import store from './store/configureStore'

import { loadBugs } from './store/bugs'

store.dispatch((dispatch, getState) => {
  console.log('Function called', dispatch, getState())
})

store.dispatch({
  type: 'error',
  payload: { message: 'An error occured' },
})

store.dispatch(loadBugs())

setTimeout(() => {
  store.dispatch(loadBugs())
}, 2000)
