import React from 'react'
import {View, Text, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'

const Tab = createBottomTabNavigator();

function FavoriteScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorites!</Text>
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
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require('../assets/icons/home.png')
            : require('../assets/icons/home.png');
        } else if (route.name === 'Favorite') {
          iconName = focused ? require('../assets/icons/favoriteBlue.png') : require('../assets/icons/favoriteBlue.png')
        } else if (route.name === 'Account') {
          iconName = focused ? require('../assets/icons/account.png') : require('../assets/icons/account.png')
        }

        return <Image style={{height: 25, width: 25}} source={iconName} />
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  
      )
  }

export default BottomTabs;