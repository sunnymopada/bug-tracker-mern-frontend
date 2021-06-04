import * as actions from './store/bugs'

import store from './store/configureStore'

const unsubscribe = store.subscribe(() => {
  console.log('Store changed', store.getState())
})

store.dispatch(actions.addBug('Todo'))
store.dispatch(actions.resolveBug(1))
store.dispatch(actions.removeBug(1))

unsubscribe()
