import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Button } from 'react-native'
import { Modal, Mapas } from './components'

const Mapa = () => {

  const [point, setPoint] = useState([])
  const handleLongPress = ({ nativeEvent }) => {
    const newPoint = point.concat({ coordinate : nativeEvent.coordinate })
      setPoint(newPoint)
  }
  console.log(point)


  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Mapas onLongPress={handleLongPress} />
      <Modal />

    </View>
  )
}
export default Mapa

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  centrado:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});