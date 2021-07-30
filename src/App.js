import { Component } from 'react'
import { Provider } from 'react-redux'
import { Switch, HashRouter as Router } from 'react-router-dom'

import store from './store/configureStore'

import LoginRoute from './routes/LoginRoute'
import DashboardRoute from './routes/DashboardRoute'
import RegisterRoute from './routes/RegisterRoute'

import {
   AuthCheckRoute,
   ProtectedRoute
} from './components/RouteUtilComponents'
import Navbar from './components/Navbar'

import {
   DASHBOARD_ROUTE_PATH,
   HOME_ROUTE_PATH,
   LOGIN_ROUTE_PATH,
   REGISTER_ROUTE_PATH
} from './constants/NavigationConstants'

class App extends Component {
   renderRoutes = () => {
      return (
         <Switch>
            <AuthCheckRoute path={LOGIN_ROUTE_PATH}>
               <LoginRoute />
            </AuthCheckRoute>
            <AuthCheckRoute path={REGISTER_ROUTE_PATH}>
               <RegisterRoute />
            </AuthCheckRoute>
            <ProtectedRoute path={DASHBOARD_ROUTE_PATH}>
               <DashboardRoute />
            </ProtectedRoute>
            <ProtectedRoute path={HOME_ROUTE_PATH}>
               <DashboardRoute />
            </ProtectedRoute>
         </Switch>
      )
   }
   render() {
      return (
         <Provider store={store}>
            <Router>
               <Navbar />
               {this.renderRoutes()}
            </Router>
         </Provider>
      )
   }
}

export default App
