import React from 'react'
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native'
// import { AppLoading, Asset } from 'expo'

import AppNavigation from './src/navigation'
// import * as constants from './src/constants'

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Plant App</Text>
    // </View>
    // <KeyboardAvoidingView behavior='padding'>
     
    // <KeyboardAvoidingView/>

    // <View>

    // </View>

    // <KeyboardAvoidingView behavior='padding'>
        <AppNavigation/>
    // </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;