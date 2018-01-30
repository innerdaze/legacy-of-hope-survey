import actions from './actions'
import { errorOperations } from '../error'
import { networkOperations } from '../network'
import { sessionSelectors } from '../session'
const sessionAction = actions.session
const login = (userID, password) => {
  return dispatch => {
    dispatch(sessionAction.requestLogin())

    return dispatch(networkOperations.callApi({
      service: 'SystemLoginService.Login',
      skipSessionCheck: true,
      params: {
        UserID: userID,
        Password: password
      },
      success: json => {debugger
        dispatch(sessionAction.receiveLogin())
        dispatch(sessionAction.startSession(json.result.Result.SessionID))
        dispatch(sessionAction.succeedLogin(json.result.Result.UserData))
      },
      error: error => {debugger
        const message = error ? error.message : 'Could not login at this time. Please try again later or contact support'
        dispatch(sessionAction.failLogin(message))
        dispatch(errorOperations.displayError(message))
      }
    }))
  }
}

const logout = () => {
  return (dispatch, getState) => {
    dispatch(sessionAction.requestLogout())

    return dispatch(networkOperations.callApi({
      service: 'SystemLoginService.Logout',
      params: {
        SessionID: getState().session.session.id
      },
      success: () => {
        dispatch(sessionAction.receiveLogout())
        dispatch(sessionAction.endSession())
      }
    }))
  }
}
export default {
  logout, login
}