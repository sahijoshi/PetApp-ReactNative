import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { theme } from "../constants";
import { Button } from "../components";
import style from "../styles/Styles";


const Login = (props) => {

  return (
    <View style={[style.container]}>

    <View style={[styles.containerImage]}>
    <Image 
            style={style.logo}
            source={require('../assets/images/dog.png')}
    />
            <Text style={[style.h1, {marginTop: 20, color:theme.colors.secondary}]}>Sign In</Text>
    </View>

      <View style={styles.containerLogin}>
      <TextInput placeholder='username' returnKeyType='next' 
          onSubmitEditing={() => this.passwordInputs.focus()}
          keyboardType='email-address'
          style={style.textInput}
          />
          <TextInput placeholder='password' returnKeyType='go' 
          ref={(input) => this.passwordInputs = input}
          secureTextEntry
          style={style.textInput}
          />
        <Button title="Login" align="center" bgcolor={theme.colors.primary} titleFont={style.h2} titleColor={theme.colors.white} onPress={() => props.navigation.navigate('Dashboard')} />
        <View style={{alignItems: "center"}}>
        <Text style={[style.h3, {color: theme.colors.gray, alignContent: "center"}]}>Forgot Password?</Text>
        </View>
      </View>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogin: {
    flex: 2,
    paddingTop: 70,
    paddingLeft: 40, 
    paddingRight: 40,
  },

});