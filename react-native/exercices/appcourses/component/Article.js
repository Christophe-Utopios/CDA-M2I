import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {


    function messageConsole(){
        console.log(props.item.id)
        props.deleteArticle(props.item.id)
    }

  return (
    <Pressable onPress={messageConsole}>
    <View style={styles.articleItem}>
      <Text style={styles.articleText}>{props.item.text}</Text>
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
      }
})