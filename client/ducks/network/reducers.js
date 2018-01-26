
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import actions from './actions'
const { network } = actions
const initialState = {
  isNetFailOffline: false,
  isNetFailNoSession: false
}
const reducer = handleActions({
  [network.NetFailOffline](state) {
    return {
      ...state,
      isNetFailOffline: true
    }
  },
  [network.NetFailNoSession](state) {
    return {
      ...state,
      isNetFailNoSession: false
    }
  }
}, initialState)

export default reducer
