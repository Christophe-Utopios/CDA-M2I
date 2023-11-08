import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({onPress,title,isWhite}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressedItem}>
    <View style={isWhite ? styles.isWhite : styles.isGray}>
      <Text style={isWhite ? styles.isWhiteText : styles.isGrayText} >{title}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    isGray: {
        width : 72,
        height : 72,
        borderRadius : 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "grey",
    },
    isGrayText: {
        color: "white",
        fontSize : 35,
    },
    isWhite: {
        width : 72,
        height : 72,
        borderRadius : 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "white",
    },
    isWhiteText: {
        color: "black",
        fontSize : 35,
        fontWeight: "bold"
    },
    pressedItem : {
        backgroundColor: "yellow"
    }
})