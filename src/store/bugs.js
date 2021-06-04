import { createAction, createReducer } from '@reduxjs/toolkit'

//actions
export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugResolved = createAction('bugResolved')

//Reducers
let lastId = 0

const reducer = createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      resolved: false,
      description: action.payload.description,
    })
  },
  [bugResolved.type]: (bugs, action) => {
    const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id)
    bugs[bugIndex].resolved = true
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.pay)
  },
})

export default reducer
