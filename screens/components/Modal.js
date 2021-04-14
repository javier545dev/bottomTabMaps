import React from 'react'
import { StyleSheet, Dimensions, Modal, View, Text } from "react-native"

export default () => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={false}
         >
            <View style={styles.centrado}>
                <View style={styles.modal1}>
                    <Text>:D happy</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centrado:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
      },
  });
  