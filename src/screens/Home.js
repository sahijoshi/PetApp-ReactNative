import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import style from "../styles/Styles";
import { theme } from '../constants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabs from '../components/TopTabs'

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    const tabArray = [
        { id: 1, name: "Dogs" }, 
        { id: 2, name: "Cats" }, 
        { id: 3, name: "Birds"}
    ];

  return (
      <View style={ style.container }>
          <View style={ styles.header }>
              <Text style={ [style.h1, { color: theme.colors.darkGray }] }>Pets</Text>
          </View>
          <TopTabs data={tabArray}/>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        paddingTop: 10,
        height: 50,
        backgroundColor: "red"
    },
    tab: {
        height: 50,
        backgroundColor: "yellow"
    }

});

export default Home;