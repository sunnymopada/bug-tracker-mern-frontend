import {
  bugAdded,
  bugResolved,
  bugRemoved,
  getUnresolvedBugs,
} from './store/bugs'

import { projectAdded } from './store/projects'

import store from './store/configureStore'

const unsubscribe = store.subscribe(() => {
  console.log('Store changed', store.getState())
})

store.dispatch(projectAdded({ name: 'First project' }))

store.dispatch(bugAdded({ description: 'Todo1' }))
store.dispatch(bugResolved({ id: 1 }))
store.dispatch(bugRemoved({ id: 1 }))
store.dispatch(bugAdded({ description: 'Todo2' }))
store.dispatch(bugAdded({ description: 'Todo3' }))

unsubscribe()

const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())

console.log('unresolvedBugs', x == y)
