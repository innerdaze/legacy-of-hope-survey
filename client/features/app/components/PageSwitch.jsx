import React from 'react'
import { connect } from 'react-redux'
import Notification from 'grommet/components/Notification'
import AboutYou1 from '~features/survey/components/AboutYou1'
import AboutYou2 from '~features/survey/components/AboutYou2'
import SubmitMessage from '~features/survey/components/SubmitMessage'
import Feedback from '~features/survey/components/Feedback'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import { currentPageSelector } from '../selectors'

const PageSwitch = ({ currentPage = 'screen1' }) => {
  if (currentPage === 'screen1') {
    return <Screen1 />
  }

  if (currentPage == 'screen2') {
    return <Screen2 />
  }

  if (currentPage === 'aboutYou1') {
    return <AboutYou1 />
  }

  if (currentPage === 'aboutYou2') {
    return <AboutYou2 />
  }

  if (currentPage === 'submitMessage') {
    return <SubmitMessage />
  }

  if (currentPage === 'feedback') {
    return <Feedback />
  }

  return (
    <Notification
      message={`Invalid screen selection: ${currentPage}.`}
      status='critical'
    />
  )
}

export default connect(state => ({
  currentPage: currentPageSelector(state)
}))(PageSwitch)
