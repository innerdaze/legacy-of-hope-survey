import React from 'react'
import { connect } from 'react-redux'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Footer from 'grommet/components/Footer'
import BackButton from './BackButton'
import { setPage } from '../actions'
import dictionary from '~/dictionary'
import { localeSelector } from '../selectors'

const Screen2 = ({ setPage, locale }) => (
  <React.Fragment>
    <Section>
      <Box align='center' pad={{ vertical: 'small' }}>
        <Button
          primary
          label={dictionary[locale].menu.submitMessage}
          onClick={() => setPage('submitMessage')}
        />
      </Box>
      <Box align='center' pad={{ vertical: 'small' }}>
        <Button
          primary
          label={dictionary[locale].menu.aboutYou}
          onClick={() => setPage('aboutYou1')}
        />
      </Box>
      <Box align='center' pad={{ vertical: 'small' }}>
        <Button
          primary
          label={dictionary[locale].menu.feedback}
          onClick={() => setPage('feedback')}
        />
      </Box>
    </Section>
    <Footer>
      <BackButton label={dictionary[locale].menu.back} page='screen1' />
    </Footer>
  </React.Fragment>
)

export default connect(
  state => ({
    locale: localeSelector(state)
  }),
  { setPage }
)(Screen2)
