import React from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../../store/users'

import UserForm from '../../components/UserForm'

import { RegisterFormCard, RegisterFormContainer } from './styledComponents'

class RegisterRoute extends React.Component {
   onRegister = values => {
      const { username, password } = values
      const requestObject = {
         username,
         password
      }
      const { registerUser } = this.props
      registerUser(requestObject)
   }

   render() {
      return (
         <RegisterFormContainer>
            <RegisterFormCard>
               <UserForm onSubmit={this.onRegister} buttonText={'Register'} />
            </RegisterFormCard>
         </RegisterFormContainer>
      )
   }
}

const mapStateToProps = state => {
   return {}
}

const mapDispatchToProps = dispatch => {
   return {
      registerUser: requestObject => {
         dispatch(registerUser(requestObject))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRoute)
