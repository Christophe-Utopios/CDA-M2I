import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Article(props) {
  return (
    <View style={styles.articleItem}>
      <Text style={styles.articleText}>{props.item.text}</Text>
    </View>
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