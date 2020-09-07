import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import style from "../styles/Styles";

const Button = ({title, align, bgcolor, titleFont, titleColor, onPress}) => {
  return (
      <TouchableOpacity style={[style.button, {backgroundColor: bgcolor, alignItems: align}]} onPress={onPress}>
          <Text style={[titleFont, {color:titleColor}]}>{title}</Text>
      </TouchableOpacity>
    )
}

export default Button;