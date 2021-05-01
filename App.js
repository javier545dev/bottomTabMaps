import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Mapa from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen5 from './screens/Screen5'

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View
      style={{
        top: 10,
        width: 75,
        height: 75,
        borderRadius: 25,
        backgroundColor: '#e32'
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Post"
          tabBarOptions={{
            showLabel: false,
            labelStyle: { fontSize: 18 },
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            style: {
              position: 'absolute',
              bottom: 35,
              left: 50,
              right: 50,
              elevation: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              height: 80,
              borderRadius: 25,
              ...styles.shadow
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={Screen2}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Icon
                    name="home"
                    size={30}
                    style={{
                      width: 30,
                      height: 30,
                      color: focused ? '#e32' : '#fff'
                    }}
                  />
                  <Text
                    style={{ color: focused ? '#e32' : '#fff', fontSize: 12 }}
                  >
                    Home
                  </Text>
                </View>
              )
            }}
          />

          <Tab.Screen
            name="Post"
            component={Mapa}
            options={() => ({
              tabBarIcon: () => (
                <Icon
                  name="search"
                  size={32}
                  style={{
                    width: 35,
                    height: 35,
                    color: '#FFF'
                  }}
                />
              ),
              tabBarButton: (props) => <CustomTabBarButton {...props} />
            })}
          />

          <Tab.Screen
            name="Notications"
            component={Screen5}
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Icon
                    name="gear"
                    size={30}
                    style={{
                      width: 30,
                      height: 30,
                      color: focused ? '#e32' : '#fff'
                    }}
                  />
                  <Text
                    style={{ color: focused ? '#e32' : '#fff', fontSize: 12 }}
                  >
                    Settings
                  </Text>
                </View>
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.5,
    elevation: 4
  }
})
