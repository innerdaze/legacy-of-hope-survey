import { handleActions } from 'redux-actions'
import { ready, setPage, setLocale } from './actions'

const initialState = {
  isReady: false,
  currentPage: 'screen1',
  locale: 'en'
}

const reducer = handleActions(
  {
    [ready](state) {
      return {
        ...state,
        isReady: true
      }
    },
    [setPage](state, { payload: currentPage }) {
      return {
        ...state,
        currentPage
      }
    },
    [setLocale](state, { payload: locale }) {
      return {
        ...state,
        locale
      }
    }
  },
  initialState
)

export default reducer
