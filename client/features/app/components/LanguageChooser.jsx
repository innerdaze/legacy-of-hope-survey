import React from 'react'
import { connect } from 'react-redux'
import Select from 'grommet/components/Select'
import { setLocale } from '../actions'

const LanguageChooser = ({ setLocale, onChange }) => (
  <Select
    placeHolder='Select Language to Continue...'
    options={[
      { label: 'English', value: 'en' },
      { label: 'French', value: 'fr' }
    ]}
    onChange={({ option, value: { value } }) => {
      setLocale(value)
      onChange(value)
    }}
  />
)

LanguageChooser.defaultProps = {
  onChange: Function.prototype
}

export default connect(
  null,
  { setLocale }
)(LanguageChooser)
