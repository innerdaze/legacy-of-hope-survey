import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Notification from 'grommet/components/Notification'
import history from '../history'
import AuthenticatedRoute from './AuthenticatedRoute'
import AppLayout from './AppLayout'
import GenericErrorBoundary from './GenericErrorBoundary'
import InternationalApp from '~features/app/components/InternationalApp'

const Root = ({}) => (
  <ConnectedRouter history={history}>
    <AppLayout>
      <GenericErrorBoundary
        renderError={({ error }) =>
          error && (
            <Notification closer message={error.message} status='critical' />
          )
        }
      >
        <InternationalApp />
      </GenericErrorBoundary>
    </AppLayout>
  </ConnectedRouter>
)

Root.propTypes = {}

Root.defaultProps = {}

export default Root
