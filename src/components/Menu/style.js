import { StyleSheet } from 'react-vr'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 2,
    alignItems: 'stretch',

    backgroundColor: 'transparent',

    transform: { translate: [0, 0, -3] },
    layoutOrigin: [0.5, 0.5]
  }
})
