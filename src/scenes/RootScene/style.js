import { StyleSheet } from 'react-vr'

export default StyleSheet.create({
  welcome: {
    backgroundColor: '#676efc',
    fontSize: 0.8,
    fontWeight: '400',
    layoutOrigin: [0.5, 0.5],
    paddingLeft: 0.2,
    paddingRight: 0.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform: [{translate: [0, 0, -3]}]
  }
})
