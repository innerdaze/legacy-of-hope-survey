import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import { submitAboutYou } from '../operations'
import BackButton from '~features/app/components/BackButton'
import { setPage } from '~features/app/actions'
import { tempAboutYouSelector } from '../selectors'
import { localeSelector } from '~features/app/selectors'
import dictionary from '~/dictionary'

const AboutYou2 = ({ previousData, setPage, submitAboutYou, locale }) => (
  <Formik
    initialValues={{
      identity: '',
      knowledge: '',
      impacted: ''
    }}
    onSubmit={(values, actions) => {
      submitAboutYou({ ...previousData, ...values })
      actions.setSubmitting(false)
      setPage('screen2')
    }}
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
      <Form onSubmit={handleSubmit} plain>
        <FormField label={dictionary[locale].aboutYou.identity.label}>
          <Field name='identity' component='select'>
            <option value={dictionary[locale].aboutYou.identity.option1}>
              {dictionary[locale].aboutYou.identity.option1}
            </option>
            <option value={dictionary[locale].aboutYou.identity.option2}>
              {dictionary[locale].aboutYou.identity.option2}
            </option>
            <option value={dictionary[locale].aboutYou.identity.option3}>
              {dictionary[locale].aboutYou.identity.option3}
            </option>
          </Field>
        </FormField>
        <FormField label={dictionary[locale].aboutYou.knowledge.label}>
          <Field name='knowledge' component='select'>
            <option value={dictionary[locale].aboutYou.knowledge.option1}>
              {dictionary[locale].aboutYou.knowledge.option1}
            </option>
            <option value={dictionary[locale].aboutYou.knowledge.option2}>
              {dictionary[locale].aboutYou.knowledge.option2}
            </option>
            <option value={dictionary[locale].aboutYou.knowledge.option3}>
              {dictionary[locale].aboutYou.knowledge.option3}
            </option>
            <option value={dictionary[locale].aboutYou.knowledge.option4}>
              {dictionary[locale].aboutYou.knowledge.option4}
            </option>
          </Field>
        </FormField>
        <FormField label={dictionary[locale].aboutYou.impacted.label}>
          <Field name='impacted' component='select'>
            <option value={dictionary[locale].aboutYou.impacted.option1}>
              {dictionary[locale].aboutYou.impacted.option1}
            </option>
            <option value={dictionary[locale].aboutYou.impacted.option2}>
              {dictionary[locale].aboutYou.impacted.option2}
            </option>
            <option value={dictionary[locale].aboutYou.impacted.option3}>
              {dictionary[locale].aboutYou.impacted.option3}
            </option>
          </Field>
        </FormField>
        <Footer pad={{ vertical: 'medium' }} justify='between'>
          <BackButton page='aboutYou1' label={dictionary[locale].common.back} />
          <Button
            label={dictionary[locale].common.submit}
            type='submit'
            primary={true}
          />
        </Footer>
      </Form>
    )}
  />
)

export default connect(
  state => ({
    tempAboutYou: tempAboutYouSelector(state),
    locale: localeSelector(state)
  }),
  { submitAboutYou, setPage }
)(AboutYou2)
