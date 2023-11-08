import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageB({route}) {

    const contactFirstName = route.params.firstName
    const contactLastName = route.params.lastName
    const contactPhone = route.params.phone
  return (
    <View>
      <Text>Mon Contact :</Text>
      <Text>Nom : {contactFirstName}</Text>
      <Text>Prénom : {contactLastName}</Text>
      <Text>Telephone : {contactPhone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})