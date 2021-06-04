import store from './store/configureStore'

import * as actions from './store/api'

store.dispatch((dispatch, getState) => {
  console.log('Function called', dispatch, getState())
})

store.dispatch({
  type: 'error',
  payload: { message: 'An error occured' },
})

store.dispatch(
  actions.apiCallBegan({
    url: '/bugs',
    onSuccess: 'bugsReceived',
  })
)
