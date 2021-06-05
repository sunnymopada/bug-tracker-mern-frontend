import {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsAssignedToAUser,
  addBug,
  assignABugUser,
  loadBugs,
  resolveABug,
} from './bugs'

import { projectAdded } from './projects'

import { userAdded } from './users'

import store from './configureStore'

const unsubscribe = store.subscribe(() => {
  console.log('Store changed', store.getState())
})

store.dispatch(projectAdded({ name: 'First project' }))

store.dispatch(userAdded({ name: 'Sunny' }))
store.dispatch(userAdded({ name: 'Dev' }))

store.dispatch(bugAdded({ id: 1, description: 'Bug1' }))
store.dispatch(bugAdded({ id: 2, description: 'Bug2' }))
store.dispatch(bugAdded({ id: 3, description: 'Bug3' }))

store.dispatch(bugAssignedToUser({ id: 2, userId: 1 }))

store.dispatch(bugResolved({ id: 2 }))

console.log('Get assigned bugs 1', getBugsAssignedToAUser(1)(store.getState()))
console.log('Get assigned bugs 3', getBugsAssignedToAUser(3)(store.getState()))

unsubscribe()

// Thunk, APIs
store.dispatch((dispatch, getState) => {
  console.log('Function called', dispatch, getState())
})

store.dispatch({
  type: 'error',
  payload: { message: 'An error occured' },
})

store.dispatch(loadBugs())

store.dispatch(addBug({ description: 'Bug5' }))

store.dispatch(resolveABug(1))

store.dispatch(assignABugUser(1, 1))
