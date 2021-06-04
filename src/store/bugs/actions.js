import { bugTrackerActionTypes } from './actionTypes'

export function addBug(description) {
  return {
    type: bugTrackerActionTypes.bugAdded,
    payload: {
      description: description,
    },
  }
}

export function removeBug(bugId) {
  return {
    type: bugTrackerActionTypes.bugRemoved,
    payload: {
      id: bugId,
    },
  }
}

export function resolveBug(bugId) {
  return {
    type: bugTrackerActionTypes.bugResolved,
    payload: {
      id: bugId,
    },
  }
}
