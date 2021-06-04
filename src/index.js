import store from './store/configureStore'

store.dispatch((dispatch, getState) => {
  console.log('Function called', dispatch, getState())
})

store.dispatch({
  type: 'error',
  payload: { message: 'An error occured' },
})
