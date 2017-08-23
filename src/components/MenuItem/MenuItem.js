import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-vr'

import style from './style'

const MenuItem = ({ text, children }) => (
  <View style={style.container}>
    <Text style={style.text}>{children || text}</Text>
  </View>
)

MenuItem.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string
}

export default MenuItem
