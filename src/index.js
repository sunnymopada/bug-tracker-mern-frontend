import store from './store/configureStore'

import { addBug, assignABugUser, loadBugs, resolveABug } from './store/bugs'

store.dispatch((dispatch, getState) => {
  console.log('Function called', dispatch, getState())
})

store.dispatch({
  type: 'error',
  payload: { message: 'An error occured' },
})

store.dispatch(loadBugs())

store.dispatch(addBug({ description: 'Bug5' }))

store.dispatch(resolveABug(1622824513583))

store.dispatch(assignABugUser(1622824513583, 1))
