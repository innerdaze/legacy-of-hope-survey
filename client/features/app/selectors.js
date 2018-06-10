import { createSelector } from 'reselect'
export const isReadySelector = state => state.app.isReady
export const currentPageSelector = state => state.app.currentPage
export const localeSelector = state => state.app.locale

export default {
  isReadySelector,
  currentPageSelector
}
