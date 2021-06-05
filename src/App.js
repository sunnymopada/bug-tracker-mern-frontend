import { Provider } from 'react-redux'

import Bugs from './components/Bugs'

import store from './store/configureStore'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Bugs />
      </Provider>
    </div>
  )
}

export default App
