import { connect } from 'react-redux'
import OrdersLayout from '../components/OrdersLayout'
import {
  discardPendingTransaction,
  confirmStartModifyTransaction,
  cancelStartModifyTransaction,
  startChangingOrderQuantity
} from '../actions/OrderActions'

export default connect(
  state => ({
    mainMenuVisible: state.ui.mainMenuVisible,
    pendingTransaction: state.orders.pendingTransaction,
    pendingModification: state.orders.pendingModification,
    isChangingOrderQuantity: state.orders.isChangingOrderQuantity,
    changingOrderQuantityFor: state.orders.changingOrderQuantityFor
  }),
  dispatch => ({
    onPromptStartModifyingSubmit: transaction => {
      dispatch(confirmStartModifyTransaction())
      dispatch(startChangingOrderQuantity(transaction))
    },
    onPromptStartModifyingCancel: () => dispatch(cancelStartModifyTransaction())
  })
)(OrdersLayout)
