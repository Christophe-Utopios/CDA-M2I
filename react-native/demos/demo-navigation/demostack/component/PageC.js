import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageC({navigation}) {
  return (
    <View>
      <Text>On va mettre un lien vers la page A !!!</Text>
      <Button title='Go to Page A' onPress={() => navigation.navigate("PageA",{message : "hello"})}></Button>
      <Button title='Go to Page B' onPress={() => navigation.navigate("PageB")}></Button>
      <Text>Mes contacts :</Text>
      <Button title='Contact A' onPress={() => navigation.navigate("PageB",{firstName : "toto", lastName : "tutu", phone : "0123456789"})}></Button>
      <Button title='Contact B' onPress={() => navigation.navigate("PageB",{firstName : "leon", lastName : "titu", phone : "2123456789"})}></Button>
      <Button title='Contact C' onPress={() => navigation.navigate("PageB",{firstName : "remi", lastName : "tatu", phone : "3123456789"})}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})