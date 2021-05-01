import React from 'react'
import { StyleSheet, Modal, View } from 'react-native'

export default ({ children, visibility }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View style={styles.centrado}>
        <View style={styles.modal1}>{children}</View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    }
  }
})
