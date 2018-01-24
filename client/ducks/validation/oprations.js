import actions from './actions'


export function validate({ fieldID, value, validation, error }) {
  return dispatch => {
    if (!(validation(value))) {
      dispatch(actions.invalidate({ fieldID, error }))
      return false
    }
    dispatch(actions.validate(fieldID))
    return true
  }
}
  export default {
    validate
  }