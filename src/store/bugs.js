import { createSlice } from '@reduxjs/toolkit'

import { createSelector } from 'reselect'

let lastId = 0

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        resolved: false,
        description: action.payload.description,
      })
    },
    bugResolved: (bugs, action) => {
      const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id)
      bugs[bugIndex].resolved = true
    },
    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.pay)
    },
  },
})

export const { bugAdded, bugResolved, bugRemoved } = slice.actions

export default slice.reducer

//Memoization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
)
