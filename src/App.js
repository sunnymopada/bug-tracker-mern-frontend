import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import store from './store/configureStore'
import LoginRoute from './routes/LoginRoute'
import HomeRoute from './routes/HomeRoute'
import Navbar from './components/Navbar'

function App() {
   return (
      <div className='App'>
         <Provider store={store}>
            <Router>
               <Navbar />
               <Switch>
                  <Route path='/login'>
                     <LoginRoute />
                  </Route>
                  <Route path='/register'>
                     <LoginRoute />
                  </Route>
                  <Route path='/dashboard'>
                     <HomeRoute />
                  </Route>
                  <Route path='/'>
                     <HomeRoute />
                  </Route>
               </Switch>
            </Router>
         </Provider>
      </div>
   )
}

export default App
