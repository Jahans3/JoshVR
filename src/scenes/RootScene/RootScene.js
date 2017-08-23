import React from 'react'
import { View, Pano, Text, Sphere, asset } from 'react-vr'

import Menu from '../../components/Menu'
import MenuItem from '../../components/MenuItem'
import style from './style'

const RootScene = () => (
  <View>
    <Pano source={asset('chess-world.jpg')} />
    <Text style={style.welcome}>
      JoshVR
    </Text>
    <Menu>
      <MenuItem>MenuItem #1</MenuItem>
      <MenuItem>MenuItem #2</MenuItem>
      <MenuItem>MenuItem #3</MenuItem>
      <MenuItem>MenuItem #4</MenuItem>
    </Menu>
  </View>
)

export default RootScene
