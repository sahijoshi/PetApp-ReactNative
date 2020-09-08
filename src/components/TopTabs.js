import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeBody from '../screens/HomeBody'

const Tab = createMaterialTopTabNavigator();

const TopTabs = ({data}) => {

    return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 12, fontWeight: "700"}}}
      >
        {data.map(tab => <Tab.Screen key={tab.id} name={tab.name} component={HomeBody} />)}
    </Tab.Navigator>
  
      )
  }

export default TopTabs;