//Action Types
export const bugTrackerActionTypes = {
  bugAdded: 'BUG_ADDED',
  bugRemoved: 'BUG_REMOVED',
  bugResolved: 'BUG_RESOLVED',
}

//Actions
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

//Reducers
let lastId = 0

function reducer(state = [], action) {
  switch (action.type) {
    case bugTrackerActionTypes.bugAdded:
      return [
        ...state,
        {
          id: ++lastId,
          resolved: false,
          description: action.payload.description,
        },
      ]
    case bugTrackerActionTypes.bugRemoved:
      return state.filter((bug) => bug.id !== action.payload.id)
    case bugTrackerActionTypes.bugResolved:
      const bugIndex = state.findIndex((bug) => bug.id === action.payload.id)
      const bug = state[bugIndex]
      return [
        ...state.slice(0, bugIndex),
        { ...bug, resolved: true },
        ...state.slice(bugIndex + 1),
      ]
    default:
      return state
  }
}

export default reducer
