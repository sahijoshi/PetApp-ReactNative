import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'

const Tab = createBottomTabNavigator();

function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  function AccountScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
      </View>
    );
  }

const BottomTabs = () => {
    return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  
      )
  }

export default BottomTabs;