import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {


    function messageConsole(){
        console.log(props.item.id)
        props.deleteArticle(props.item.id)
    }

  return (
    <Pressable onPress={messageConsole}>
    <View style={props.isRed ? styles.articleItemSecond : styles.articleItem}>
      <Text style={props.isRed  ? styles.articleTextSecond : styles.articleText}>{props.item.text}</Text>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    articleItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      articleText: {
        color: "white",
      },
      articleItemSecond: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'red',
      },
      articleTextSecond: {
        color: "yellow",
      }
})