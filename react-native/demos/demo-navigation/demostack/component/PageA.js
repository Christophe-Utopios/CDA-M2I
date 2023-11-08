import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageA({navigation, route}) {
    const message = route.params.message

  return (
    <View>
      <Text>PageA</Text>
      <Text>{route.params.message}</Text>
      <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})