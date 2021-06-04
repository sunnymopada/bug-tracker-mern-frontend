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

store.dispatch(bugAdded({ description: 'Bug1' }))
store.dispatch(bugAdded({ description: 'Bug2' }))
store.dispatch(bugAdded({ description: 'Bug3' }))

store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }))

store.dispatch(bugResolved({ id: 2 }))

unsubscribe()
