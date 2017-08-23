import React, { Component } from 'react'
import { View, Pano, Text, asset } from 'react-vr'

import style from './style'

const RootScene = () => (
  <View>
    <Pano source={asset('chess-world.jpg')} />
    <Text
      style={style.welcome}>
      JoshVR
    </Text>
  </View>
)

export default RootScene
