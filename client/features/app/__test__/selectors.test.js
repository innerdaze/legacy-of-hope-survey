import { appSelectors } from '../'
import genericSelectorTest from './genericSelectorTest'

const { testSelector } = genericSelectorTest

describe('app Selectors', () => {
  const mockParametersReady = {
    app: {
      isReady: true
    }
  }

  testSelector({
    selector: appSelectors.isReadySelector,
    state: mockParametersReady,
    key: 'isReady',
    xpath: 'app'
  })
})
