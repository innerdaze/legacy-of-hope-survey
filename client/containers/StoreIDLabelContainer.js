import { connect } from 'react-redux'
import StoreIDLabel from '../components/StoreIDLabel'
import { appSelectors } from '../features/app'
const mapStateToProps = state => {
  return {
    storeID: appSelectors.storeID(state)
  }
}

export default connect(mapStateToProps)(StoreIDLabel)