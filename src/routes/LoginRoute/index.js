import React from 'react'
import { connect } from 'react-redux'

import { loginUser } from '../../store/users'

import UserForm from '../../components/UserForm'

import { LoginFormCard, LoginFormContainer } from './styledComponents'

class LoginRoute extends React.Component {
   onLogin = values => {
      const { username, password } = values
      const requestObject = {
         username,
         password
      }
      const { loginUser } = this.props
      loginUser(requestObject)
   }

   render() {
      return (
         <LoginFormContainer>
            <LoginFormCard>
               <UserForm onSubmit={this.onLogin} buttonText={'Login'} />
            </LoginFormCard>
         </LoginFormContainer>
      )
   }
}

const mapStateToProps = state => {
   return {}
}

const mapDispatchToProps = dispatch => {
   return {
      loginUser: requestObject => {
         dispatch(loginUser(requestObject))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginRoute)
