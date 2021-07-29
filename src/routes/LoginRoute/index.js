import React from 'react'
import { connect } from 'react-redux'

import LoginForm from '../../components/LoginForm'

import { LoginFormCard, LoginFormContainer } from './styledComponents'

class LoginRoute extends React.Component {
   submit = values => {
      // print the form values to the console
      console.log(values)
   }
   render() {
      return (
         <LoginFormContainer>
            <LoginFormCard>
               <LoginForm onSubmit={this.submit} />
            </LoginFormCard>
         </LoginFormContainer>
      )
   }
}

export default connect()(LoginRoute)
