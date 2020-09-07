import React from 'react'
import { Text, StyleSheet, FlatList, View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { categories } from '../constants/mocks'

const numberOfCol = 2;
const WIDTH = Dimensions.get('window').width

const HomeBody = () => {

  dataFormat = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns)
    let totalLastRow = dataList.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({name: 'blank', empty: true})
      totalLastRow++
    }

    return dataList
  }

  actionOnItem = (item) => {
    console.log(item)
  }
    
  renderItem = ({ item, index }) => {
    if (item.empty) {
      return <View style={[styles.itemStyle, styles.itemInvisible]} />
    }
    return (
      <TouchableWithoutFeedback onPress={() => actionOnItem(item)}>
        <View style={styles.itemStyle}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </TouchableWithoutFeedback>

    )
  }


  return (
      <View style={{flex: 1, backgroundColor: "yellow"}}>
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
  itemStyle: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex:1,
    margin: 1,
    height: WIDTH / numberOfCol
  },
  itemText: {
    color: "gray",
    fontSize: 30
  },
  itemInvisible:{
    backgroundColor: 'transparent'
  }
});

export default HomeBody;