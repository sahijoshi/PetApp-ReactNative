import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'
import DetailScreen from '../screens/DetailScreen'

const Stack = createStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerBackTitleVisible: false,
                    headerBackImage: () => (<Image source={require('../assets/icons/back.png')} />),
                    headerLeftContainerStyle: {
                        marginLeft: 20
                    },
                    headerStyle: {

                    },
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ title: 'Welcome Screen', headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: '' }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        title: '', headerRight: () => (

                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <TouchableOpacity onPress={() => alert('Search pets')}>
                                    <Image style={{ height: 25, width: 25, marginRight: 20 }} source={require('../assets/icons/search.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => alert('Search pets')}>
                                    <Image style={{ height: 25, width: 25, marginRight: 20 }} source={require('../assets/icons/logout.png')} />
                                </TouchableOpacity>
                            </View>

                        )
                    }}
                />
                <Stack.Screen
                    name="DetailScreen"
                    component={DetailScreen}
                    options={{ title: 'DetailScreen', headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;