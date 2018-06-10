import { handleActions } from 'redux-actions'
import { submitAboutYou1, clearTempAboutYou } from './actions'

const initialData = {
  tempAboutYou: null
}

const reducer = handleActions(
  {
    [submitAboutYou1](state, { payload: tempAboutYou }) {
      return {
        ...state,
        tempAboutYou
      }
    },
    [clearTempAboutYou]() {
      return {}
    }
  },
  initialData
)

export default reducer
