import logo from './logo.svg'
import './App.css'
import Bugs from './components/Bugs'

import store from './store/configureStore'
import StoreContext from './context/storeContext'

function App() {
  return (
    <div className='App'>
      <StoreContext.Provider value={store}>
        <Bugs />
      </StoreContext.Provider>
    </div>
  )
}

export default App
