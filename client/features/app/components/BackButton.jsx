import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Anchor from 'grommet/components/Anchor'
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious'
import { setPage } from '../actions'

const BackButton = ({ setPage, page, label }) => (
  <Anchor
    icon={<LinkPreviousIcon />}
    label={label}
    onClick={() => setPage(page)}
  />
)

BackButton.propTypes = {
  page: PropTypes.string.isRequired,
  label: PropTypes.string
}

BackButton.defaultProps = {
  label: 'Back'
}

export default connect(
  null,
  { setPage }
)(BackButton)
