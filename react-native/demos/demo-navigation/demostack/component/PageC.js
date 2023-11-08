import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageC({navigation}) {
  return (
    <View>
      <Text>On va mettre un lien vers la page A !!!</Text>
      <Button title='Go to Page A' onPress={() => navigation.navigate("PageA")}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})