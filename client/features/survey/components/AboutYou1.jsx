import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import BackButton from '~features/app/components/BackButton'
import { submitAboutYou1 } from '../actions'
import { setPage } from '~features/app/actions'
import { localeSelector } from '~features/app/selectors'
import dictionary from '~/dictionary'

const AboutYou1 = ({ setPage, submitAboutYou1, locale }) => (
  <Formik
    initialValues={{
      gender: dictionary[locale].aboutYou.gender.option1,
      age: '',
      nationality: dictionary[locale].aboutYou.nationality.option1
    }}
    onSubmit={(values, actions) => {
      submitAboutYou1(values)
      actions.setSubmitting(false)
      setPage('aboutYou2')
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
        <FormField
          label={dictionary[locale].aboutYou.gender.label}
          help={dictionary[locale].aboutYou.gender.help}
        >
          <Field name='gender' component='select'>
            <option value={dictionary[locale].aboutYou.gender.option1}>
              {dictionary[locale].aboutYou.gender.option1}
            </option>
            <option value={dictionary[locale].aboutYou.gender.option2}>
              {dictionary[locale].aboutYou.gender.option2}
            </option>
            <option value={dictionary[locale].aboutYou.gender.option3}>
              {dictionary[locale].aboutYou.gender.option3}
            </option>
            <option value={dictionary[locale].aboutYou.gender.option4}>
              {dictionary[locale].aboutYou.gender.option4}
            </option>
          </Field>
        </FormField>
        <FormField label={dictionary[locale].aboutYou.age.label}>
          <Field type='number' name='age' />
        </FormField>
        <FormField label={dictionary[locale].aboutYou.nationality.label}>
          <Field name='nationality' component='select'>
            <option value={dictionary[locale].aboutYou.nationality.option1}>
              {dictionary[locale].aboutYou.nationality.option1}
            </option>
            <option value={dictionary[locale].aboutYou.nationality.option2}>
              {dictionary[locale].aboutYou.nationality.option2}
            </option>
            <option value={dictionary[locale].aboutYou.nationality.option3}>
              {dictionary[locale].aboutYou.nationality.option3}
            </option>
          </Field>
        </FormField>
        <Footer pad={{ vertical: 'medium' }} justify='between'>
          <BackButton
            label={dictionary[locale].common.backToStart}
            page='screen1'
          />
          <Button
            label={dictionary[locale].common.next}
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
    locale: localeSelector(state)
  }),
  { submitAboutYou1, setPage }
)(AboutYou1)
