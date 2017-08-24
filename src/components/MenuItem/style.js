import { StyleSheet } from 'react-vr'

export default StyleSheet.create({
  container: {
    margin: 0.1,
    height: 0.3,
    backgroundColor: '#e2625f',
    layoutOrigin: [0.5, 0.5],
    transform: [
      { translate: [0, 0, -3] }
    ]
  },
  text: {
    fontSize: 0.2,
    textAlign: 'center'
  }
})
