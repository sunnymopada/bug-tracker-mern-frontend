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
        userId: null,
      })
    },
    bugResolved: (bugs, action) => {
      const bugIndex = bugs.findIndex((bug) => bug.id === action.payload.id)
      bugs[bugIndex].resolved = true
    },
    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.pay)
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload
      const bugIndex = bugs.findIndex((bug) => bug.id === bugId)
      bugs[bugIndex].userId = userId
    },
  },
})

export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser } =
  slice.actions

export default slice.reducer

//Memoization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
)

export const getBugsAssignedToAUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  )
