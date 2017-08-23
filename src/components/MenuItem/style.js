import { StyleSheet } from 'react-vr'

export default StyleSheet.create({
  container: {
    margin: 0.1,
    height: 0.3,
    backgroundColor: '#e2625f',

    transform: { translate: [0, 0, -3] },
    layoutOrigin: [0.5, 0.5]
  },
  text: {
    fontSize: 0.2,
    textAlign: 'center'
  }
})
