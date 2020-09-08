import React from 'react'
import { Text, StyleSheet, FlatList, View, Dimensions, TouchableWithoutFeedback, Image } from 'react-native'
import { categories } from '../constants/mocks'

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
      return <View style={[styles.image, styles.itemInvisible]} />
    }
    return (
      <TouchableWithoutFeedback onPress={() => actionOnItem(item)}>
        <View style={styles.itemStyleContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/tiger.jpg')}
          />
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>

    )
  }


  return (
    <View style={{ flex: 1, backgroundColor: "yellow" }}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={dataFormat(categories, numberOfCol)}
        renderItem={renderItem}
        numColumns={numberOfCol}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  itemStyleContainer: {
    backgroundColor: "blue",
    justifyContent: "center",
    flex: 1,
    margin: 10,
    height: WIDTH / numberOfCol + 40
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    height: WIDTH / numberOfCol
  },
  itemText: {
    color: "gray",
    fontSize: 20,
    backgroundColor: "green",
    height: 40,
    textAlign: "left",
    paddingTop: 10
  },
  itemInvisible: {
    backgroundColor: 'transparent'
  }
});

export default HomeBody;