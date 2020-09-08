import React from 'react'
import { Text, StyleSheet, FlatList, View, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import { categories } from '../constants/mocks'
import { theme } from '../constants'
import styles from '../styles/Styles'

const numberOfCol = 2;
const WIDTH = Dimensions.get('window').width

const HomeBody = (props) => {

  dataFormat = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns)
    let totalLastRow = dataList.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({ name: 'blank', empty: true })
      totalLastRow++
    }

    return dataList
  }

  actionOnItem = (item) => {
    props.navigation.navigate('DetailScreen')
    console.log(item)
  }

  renderItem = ({ item, index }) => {
    if (item.empty) {
      return <View style={[style.image, style.itemInvisible]} />
    }
    return (
      <TouchableWithoutFeedback onPress={() => actionOnItem(item)}>
        <View style={style.itemStyleContainer}>
          <View style={style.imageContiner}>
          <Image
            style={style.image}
            source={item.image}
          />
          </View>
          <Text style={[style.itemText, styles.h2]}>{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={dataFormat(categories, numberOfCol)}
        renderItem={renderItem}
        numColumns={numberOfCol}
      />
    </View>
  )
}

const style = StyleSheet.create({
  itemStyleContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
    height: WIDTH / numberOfCol + 40,
    overflow: "hidden",
    shadowColor: theme.colors.accent,
    shadowRadius: 50,
    shadowOpacity: 1
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    width: "80%",
    height: "80%",
  },
  imageContiner: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    width: "100%",
    height: WIDTH / numberOfCol,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  itemText: {
    color: "gray",
    fontSize: 20,
    height: 40,
    textAlign: "left",
    paddingTop: 10
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  }
});

export default HomeBody;