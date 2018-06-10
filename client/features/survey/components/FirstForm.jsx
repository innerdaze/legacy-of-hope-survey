import React from 'react'
import { Formik, Field } from 'formik'

const FirstForm = () => (
  <Formik
    render={({
      values,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      isSubmitting,
      dirty,
      isValid
    }) => (
      <Form onSubmit={handleSubmit}>
        <Heading>Check the option that describes you.</Heading>
        <Label>Are you</Label>
        <Field name='gender' component='select'>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
          <option value='other'>Other</option>
          <option value='unspecified'>Rather not say</option>
        </Field>
        <Label>What is your age?</Label>
        <Field type='number' name='age' />
        <Label>Are you</Label>
        <Field name='nationality' component='select'>
          <option value='inuit'>First Nations/Metis/Inuit</option>
          <option value='canadian'>Canadian</option>
          <option value='international'>International</option>
        </Field>
        <Footer>
          <Button type='submit'>Next</Button>
          <Button>BACK</Button>
        </Footer>
      </Form>
    )}
  />
)
