import * as actions from './store/bugs'

import store from './store/configureStore'

const unsubscribe = store.subscribe(() => {
  console.log('Store changed', store.getState())
})

store.dispatch(actions.bugAdded({ description: 'Todo' }))
store.dispatch(actions.bugResolved({ id: 1 }))
store.dispatch(actions.bugRemoved({ id: 1 }))

unsubscribe()
