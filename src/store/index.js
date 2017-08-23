import { createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const someReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const initialiseStore = (initialState = {}) => {
  const reducers = combineReducers({
    someReducer
  })

  const middleware = applyMiddleware(thunk, logger)

  return createStore(reducers, initialState, middleware)
}

export default initialiseStore
