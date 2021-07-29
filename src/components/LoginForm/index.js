import React from 'react'
import { Form, FormLabel, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { FormElement } from './styledComponents'

let LoginForm = props => {
   const { handleSubmit } = props
   return (
      <form onSubmit={handleSubmit}>
         <FormElement>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Field name='username' component={Form.Control} type='text' />
         </FormElement>
         <FormElement>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Field name='password' component={Form.Control} type='password' />
         </FormElement>
         <Button type='submit' variant='primary'>
            Login
         </Button>
      </form>
   )
}

const ReduxLoginForm = reduxForm({ form: 'contact' })(LoginForm)

export default ReduxLoginForm
