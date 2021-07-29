import React from 'react'
import { Form, FormLabel } from 'react-bootstrap'

import { FormElement, FieldErrorMessage } from './styledComponents'

const required = value => (value ? undefined : '*Required')

const renderField = ({
   input,
   label,
   type,
   meta: { touched, error, warning }
}) => (
   <FormElement>
      <FormLabel>{label}</FormLabel>
      <div>
         <Form.Control {...input} placeholder={label} type={type} />
         {touched &&
            ((error && <FieldErrorMessage>{error}</FieldErrorMessage>) ||
               (warning && <FieldErrorMessage>{warning}</FieldErrorMessage>))}
      </div>
   </FormElement>
)

export { required, renderField }
