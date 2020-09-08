import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/Styles'
import { theme } from '../constants'

const DetailScreen = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image style={style.backContainer} source={require('../assets/icons/back.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.topContainer}>
        <Image style={style.image} source={require('../assets/images/labrador.png')} />
      </View>
      <View style={style.bottomContainer}>
        <View style={style.containerTitle}>
          <View style={{ backgroundColor: "green", flex: 2, borderRadius: 30 }}>
            <Text style={[styles.h1, { color: theme.colors.darkGray }]}>Dog Name</Text>
            <Text style={{ color: theme.colors.gray, justifyContent: "center", fontSize: theme.sizes.h3, marginTop: 5 }}>Lorem ipsum dolor sit</Text>
          </View>

          <View style={{ backgroundColor: "gray", flex: 1, borderRadius: 30 }}>
            <Image style={{ resizeMode: "contain", width: 30, height: 30, position: "absolute", right: 0 }} source={require('../assets/icons/favorite.png')} />
          </View>
        </View>

        <View style={style.containerInfo}>
          <View style={style.box}>
            <Text style={styles.h3}>Age</Text>
            <Text style={{ marginTop: 5 }}>10</Text>
          </View>
          <View style={style.box}>
            <Text>Color</Text>
            <Text style={{ marginTop: 5 }}>10</Text>
          </View>
          <View style={style.box}>
            <Text>Sex</Text>
            <Text style={{ marginTop: 5 }}>10</Text>
          </View>
        </View>
        <View style={style.containerDescription}>
          <Text style={{ paddingLeft: 20, paddingRight: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis convallis nisl in semper. Aliquam iaculis, nisi sit amet dapibus lobortis, mauris ex consectetur urna, a tempus neque risus ac nisl. Praesent dapibus elit sed justo varius, quis sollicitudin mauris posuere. Praesent hendrerit, tortor in egestas porttitor, nisl libero commodo magna, sed ultrices turpis nisi nec magna. Nam eget sem vel massa semper molestie vitae quis elit. Mauris eu sapien nulla. Maecenas et nisi eget sapien dignissim ornare. Praesent ut porttitor dolor, et condimentum sapien. Fusce et felis quis mi volutpat lobortis in vel tortor. Praesent mi ligula, convallis tincidunt odio id, vehicula faucibus magna. In imperdiet leo id dictum auctor. Vivamus eu enim pellentesque, tempus ipsum lobortis, scelerisque ipsum. Etiam vitae ex bibendum, molestie nibh at, tincidunt ex.</Text>
        </View>
        <View style={style.containerAdoption}>
          <TouchableOpacity style={{ backgroundColor: "red", flex: 1 }} onPress={() => props.navigation.goBack()}>
            <Image style={{ height: 40, width: 40, position: "absolute", right: 20, marginTop: 10 }} source={require('../assets/icons/share.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: "blue", flex: 1, alignItems: "center" }} onPress={() => props.navigation.goBack()}>
            <Text style={{ backgroundColor: "green", fontSize: 30, textAlign: "center", width: "90%", marginTop: 10, height: 50, paddingTop: 5, borderRadius: 20, overflow: "hidden", borderColor: "yellow", borderWidth: 1 }}>Adoption</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  backContainer: {
    width: 30,
    height: 30,
    marginTop: 40,
    marginLeft: 20,
    resizeMode: "contain",
  },
  header: {
    height: 100,
    backgroundColor: theme.colors.primary,
  },
  topContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: theme.colors.accent,
    borderRadius: 30,
  },
  image: {
    resizeMode: "contain",
    aspectRatio: 0.6
  },
  containerTitle: {
    flex: 0.5,
    backgroundColor: "blue",
    borderRadius: 30,
    flexDirection: "row",
    margin: 20
  },
  containerInfo: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10
  },
  box: {
    flex: 1,
    backgroundColor: "green",
    borderRadius: 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "yellow",
    borderWidth: 1,
    overflow: "hidden",
    shadowColor: "yellow",
    shadowRadius: 20,
    shadowOpacity: 1
  },
  containerDescription: {
    flex: 1.5,
    backgroundColor: "pink"
  },
  containerAdoption: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row"
  }
});

export default DetailScreen;