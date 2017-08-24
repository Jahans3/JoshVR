import { StyleSheet } from 'react-vr'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 2,
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    layoutOrigin: [0.5, 0.5],
    transform: [
      { translate: [5, 2, -3] }
    ]
  }
})
