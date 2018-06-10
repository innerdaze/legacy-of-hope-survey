import React from 'react'
import { connect } from 'react-redux'
import Section from 'grommet/components/Section'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import BackButton from '~features/app/components/BackButton'
import { setPage } from '~features/app/actions'
import { submitMessage } from '../operations'
import { Formik, Form, Field } from 'formik'
import { localeSelector } from '~features/app/selectors'
import dictionary from '~/dictionary'

const SubmitMessage = ({ submitMessage, setPage, locale }) => (
  <Formik
    initialValues={{ message: '' }}
    onSubmit={(values, actions) => {
      submitMessage(values.message)
      actions.setSubmitting(false)
      setPage('screen2')
    }}
    render={({ handleSubmit, errors }) => (
      <Form onSubmit={handleSubmit}>
        <Section>
          <FormField
            label={dictionary[locale].submitMessage.label}
            error={errors.message}
          >
            <Field component='textarea' name='message' />
          </FormField>
        </Section>
        <Footer justify='between'>
          <BackButton
            label={dictionary[locale].common.backToStart}
            page='screen1'
          />
          <Button label={dictionary[locale].common.submit} type='submit' />
        </Footer>
      </Form>
    )}
  />
)

export default connect(
  state => ({
    locale: localeSelector(state)
  }),
  { setPage, submitMessage }
)(SubmitMessage)
