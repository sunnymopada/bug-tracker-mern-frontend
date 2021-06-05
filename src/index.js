import store from './store/configureStore'

import { addBug, loadBugs } from './store/bugs'

store.dispatch((dispatch, getState) => {
  console.log('Function called', dispatch, getState())
})

store.dispatch({
  type: 'error',
  payload: { message: 'An error occured' },
})

store.dispatch(loadBugs())

store.dispatch(addBug({ description: 'Bug5' }))
