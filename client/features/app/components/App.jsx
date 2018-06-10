import React from 'react'
import { connect } from 'react-redux'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import PageSwitch from './PageSwitch'
import { localeSelector } from '~features/app/selectors'
import dictionary from '~/dictionary'

const App = ({ locale }) => (
  <Article pad='medium'>
    <Section margin={{ bottom: 'large' }}>
      <Headline align='center'>{dictionary[locale].title}</Headline>
      <PageSwitch />
    </Section>
  </Article>
)

export default connect(state => ({ locale: localeSelector(state) }))(App)
