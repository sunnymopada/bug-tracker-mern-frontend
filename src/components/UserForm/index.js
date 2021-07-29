import React from 'react'
import { Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { renderField, required } from '../Common/FormComponents'

const UserForm = props => {
   const { handleSubmit, buttonText } = props
   return (
      <form onSubmit={handleSubmit}>
         <Field
            name='username'
            type='text'
            component={renderField}
            label='Username'
            validate={[required]}
         />
         <Field
            name='password'
            type='password'
            component={renderField}
            label='Password'
            validate={[required]}
         />
         <Button type='submit' variant='primary'>
            {buttonText}
         </Button>
      </form>
   )
}

const ReduxUserForm = reduxForm({ form: 'user' })(UserForm)

export default ReduxUserForm
