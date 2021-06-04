import { createAction } from '@reduxjs/toolkit'

//actions
export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugResolved = createAction('bugResolved')

//Reducers
let lastId = 0

function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
      return [
        ...state,
        {
          id: ++lastId,
          resolved: false,
          description: action.payload.description,
        },
      ]
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id)
    case bugResolved.type:
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
