import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-vr'

import style from './style'

const Menu = ({ children }) => (
  <View style={style.container}>
    {children}
  </View>
)

Menu.propTypes = {
  children: PropTypes.element
}

export default Menu
