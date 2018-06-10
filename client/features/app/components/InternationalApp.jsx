import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { localeSelector } from '../selectors'
import App from './App'

const InternationalApp = ({ locale = 'en' }) => (
  <IntlProvider locale={locale}>
    <App />
  </IntlProvider>
)

export default connect(state => ({
  locale: localeSelector(state)
}))(InternationalApp)
