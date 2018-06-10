import React from 'react'
import { connect } from 'react-redux'
import Section from 'grommet/components/Section'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import LanguageChooser from './LanguageChooser'
import LHFLogo from '../assets/img/legacy-logo.jpeg'
import CanadaLogo from '../assets/img/Canwordmark_colour.png'
import { setPage } from '../actions'

const Screen1 = ({ setPage }) => (
  <Section direction='row' responsive={false}>
    <Box>
      <Image src={LHFLogo} size='small' />
    </Box>
    <Box flex justify='center' pad={{ horizontal: 'medium' }}>
      <LanguageChooser onChange={() => setPage('screen2')} />
    </Box>
    <Box>
      <Image src={CanadaLogo} size='small' />
    </Box>
  </Section>
)

export default connect(
  null,
  { setPage }
)(Screen1)
