import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Calculatrice from './component/Calculatrice'

export default function App() {
  return (
    <View style={styles.container}>
      <Calculatrice></Calculatrice>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : 'black',
        alignItems : 'center',
    },
   
})