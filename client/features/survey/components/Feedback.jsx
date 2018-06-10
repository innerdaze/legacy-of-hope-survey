import React from 'react'
import { connect } from 'react-redux'
import Section from 'grommet/components/Section'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import BackButton from '~features/app/components/BackButton'
import { setPage } from '~features/app/actions'
import { submitFeedback } from '../operations'
import { Formik, Form, Field } from 'formik'
import { localeSelector } from '~features/app/selectors'
import dictionary from '~/dictionary'

const Feedback = ({ submitFeedback, setPage, locale }) => (
  <Formik
    initialValues={{ feedback: '' }}
    onSubmit={(values, actions) => {
      submitFeedback(values.feedback)
      actions.setSubmitting(false)
      setPage('screen2')
    }}
    render={({ handleSubmit, errors }) => (
      <Form onSubmit={handleSubmit}>
        <Section>
          <FormField
            label={dictionary[locale].feedback.label}
            error={errors.feedback}
          >
            <Field component='textarea' name='feedback' />
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
  { setPage, submitFeedback }
)(Feedback)
