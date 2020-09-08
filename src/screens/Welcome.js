import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, Animated, Modal, ScrollView } from 'react-native'
import { theme } from "../constants";
import { Button } from "../components";
import style from "../styles/Styles";
import PageControl from 'react-native-page-control';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const { width, height } = Dimensions.get("window");

const Welcome = (props) => {
  const [currentPage, setCurrentPage] = useState(0); // state for pagecontrol index
  const [modalVisible, setModalVisible] = useState(false); // state for settings modal present
  scrollX = new Animated.Value(0);

  onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum);
  }

  renderIllustrations = () => {
    const { illustrations } = props;

    return (
      <AnimatedFlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}

        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true } // <-- Add this
        )}
        onMomentumScrollEnd={this.onScrollEnd}
      />
    )
  }

  renderSteps = () => {
    const { illustrations } = props;

    return (
      <PageControl
        style={{ position: 'absolute', left: 0, right: 0, bottom: 10 }}
        numberOfPages={illustrations.length}
        currentPage={currentPage}
        hidesForSinglePage
        pageIndicatorTintColor='black'
        currentPageIndicatorTintColor='gray'
        indicatorStyle={{ borderRadius: 5 }}
        currentIndicatorStyle={{ borderRadius: 5 }}
        indicatorSize={{ width: 8, height: 8 }}
        onPageIndicatorPress={this.onItemTap}
      />
    )
  }

  showTermsOfService = () => {
    return (<Modal
      animationType="slide"
      transparent={!modalVisible}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: theme.colors.primary, alignItems: "center", paddingTop: 50 }}>
          <Text style={[style.h1, {color: "white"}]} >Terms of Service</Text>

        </View>

        <View style={{ flex: 10, margin: 20 }}>
          <ScrollView>
            <Text style={[style.h2, {color: "gray"}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis convallis nisl in semper. Aliquam iaculis, nisi sit amet dapibus lobortis, mauris ex consectetur urna, a tempus neque risus ac nisl. Praesent dapibus elit sed justo varius, quis sollicitudin mauris posuere. Praesent hendrerit, tortor in egestas porttitor, nisl libero commodo magna, sed ultrices turpis nisi nec magna. Nam eget sem vel massa semper molestie vitae quis elit. Mauris eu sapien nulla. Maecenas et nisi eget sapien dignissim ornare. Praesent ut porttitor dolor, et condimentum sapien. Fusce et felis quis mi volutpat lobortis in vel tortor. Praesent mi ligula, convallis tincidunt odio id, vehicula faucibus magna. In imperdiet leo id dictum auctor. Vivamus eu enim pellentesque, tempus ipsum lobortis, scelerisque ipsum. Etiam vitae ex bibendum, molestie nibh at, tincidunt ex.

</Text>
          </ScrollView>
        </View>
        <View style={{ paddingLeft: 100, paddingRight: 100, paddingBottom: 20 }}>
          <Button title="I understand" align="center" bgcolor={theme.colors.gray} titleFont={style.h2} titleColor={theme.colors.white} onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
    )
  }

  return (
    <View style={style.container}>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <Text style={[style.h1, { alignItems: 'center' }]}>Welcome To 
          <Text style={{ color: theme.colors.secondary }}> Pets</Text>
        </Text>
        <Text style={{ color: theme.colors.gray, justifyContent: "center", fontSize: theme.sizes.h3 }}>Lorem ipsum dolor.</Text>
      </View>

      <View style={styles.containerImage}>
        {this.renderIllustrations()}
        {this.renderSteps()}
      </View>

      <View style={[styles.containerLogin, { marginLeft: 40, marginRight: 40 }]}>
        <Button title="Login" align="center" bgcolor={theme.colors.primary} titleFont={style.h2} titleColor={theme.colors.white} onPress={() => props.navigation.navigate('Login')} />
        <Button title="Signup" align="center" bgcolor={theme.colors.white} titleFont={style.h2} />
      </View>

      <View style={styles.containerService}>
        <Button title="Terms of Service" align="center" titleFont={style.h3} titleColor={theme.colors.gray} onPress={() => { setModalVisible(!modalVisible) }} />
      </View>

      {showTermsOfService()}

    </View>
  )
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") },
  ]
};

export default Welcome;

const styles = StyleSheet.create({
  containerImage: {
    flex: 4,
  },
  containerLogin: {
    flex: 1.5,
    justifyContent: "center",
  },
  containerService: {
    flex: 1,
  },

});