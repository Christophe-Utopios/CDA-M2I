import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageA from './component/PageA'
import PageB from './component/PageB'
import PageC from './component/PageC'

// package necessaire pour la navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='PageC'>
            <Stack.Screen name='PageA' component={PageA} options={{title : "Ma Page A"}}/>
            <Stack.Screen name='PageB' component={PageB} />
            <Stack.Screen name='PageC' component={PageC} options={{headerShown : false}} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})