import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import {
   HOME_ROUTE_PATH,
   LOGIN_ROUTE_PATH
} from '../../constants/NavigationConstants'

const ProtectedRouteWrapper = props => {
   if (!props.isLoggedIn) {
      return <Redirect to={LOGIN_ROUTE_PATH} />
   }
   return <Route {...props} />
}

const AuthCheckRouteWrapper = props => {
   if (props.isLoggedIn) {
      return <Redirect to={HOME_ROUTE_PATH} />
   }
   return <Route {...props} />
}

const mapStateToProps = state => {
   return {
      isLoggedIn: state.entities.users.loginStatus
   }
}

const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteWrapper)

const AuthCheckRoute = connect(mapStateToProps)(AuthCheckRouteWrapper)

export { ProtectedRoute, AuthCheckRoute }
