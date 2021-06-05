import {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsAssignedToAUser,
} from './store/bugs'

import { projectAdded } from './store/projects'

import { userAdded } from './store/users'

import store from './store/configureStore'

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
