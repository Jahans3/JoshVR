import React from 'react'
import { Provider } from 'react-redux'

import RootScene from './scenes/RootScene'
import initialiseStore from './store'

export default () => (
  <Provider store={initialiseStore()}>
    <RootScene />
  </Provider>
)
