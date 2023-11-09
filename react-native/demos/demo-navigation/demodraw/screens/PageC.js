import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageC() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>PageC</Text>
      <Button
      title='Open Drawer'
      onPress={() => navigation.openDrawer()}
      />
      <Button
      title='Home PageB'
      onPress={() => navigation.navigate("PageB")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})