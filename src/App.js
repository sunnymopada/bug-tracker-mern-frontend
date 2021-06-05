import { Provider } from 'react-redux'

import BugsList from './components/BugsList'

import store from './store/configureStore'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BugsList />
      </Provider>
    </div>
  )
}

export default App
