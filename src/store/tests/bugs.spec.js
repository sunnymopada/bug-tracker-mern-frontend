import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { addBug, bugAdded } from '../bugs'
import { apiCallBegan } from '../api'

import store from '../configureStore'

describe('bugSlice', () => {
  it('should handle the addBug action', async () => {
    const bug = { description: 'a ' }
    const savedBug = { ...bug, id: 1, resolved: true }
    const fakeAxios = new MockAdapter(axios)
    fakeAxios.onPost('/bugs').reply(200, savedBug)

    const result = await store.dispatch(addBug(bug))
    expect(store.getState().entities.bugs.list).toContainEqual(savedBug)
  })
})
