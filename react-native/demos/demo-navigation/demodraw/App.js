import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import PageA from './screens/PageA'
import PageB from './screens/PageB'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageC from './screens/PageC'


// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/drawer
// npm i react-native-gesture-handler
// npm i react-native-reanimated
// modification du fichier /babel.config.js => ajout de la ligne :
// plugins: ['react-native-reanimated/plugin']
// npm i @react-navigation/native-stack



const Drawer = createDrawerNavigator()
const Stack = createNativeStackNavigator()

function MyButton(){
  return(
    <Pressable onPress={() => {console.log("mon joli bouton")}}>
      <Text>Clique</Text>
    </Pressable>
  )
}

function MyStack(){
  return(
    <Stack.Navigator screenOptions={{headerShown : false}}>
      {/* <Stack.Screen name='PageA' component={PageA} options={{title : "Home Page"}}/> */}
      <Stack.Screen name='Drawer' component={MyDrawer} options={{headerShown: false}}/>
      <Stack.Screen name='PageC' component={PageC} options={{headerShown : true,headerRight : MyButton}}/>

    </Stack.Navigator>
  )
    
}

function MyDrawer(){
  return(
  <Drawer.Navigator>
    {/* <Drawer.Screen name='PageA' component={PageA} options={{headerShown: false}}/> */}
    {/* <Drawer.Screen name='MyStack' component={MyStack} options={{headerShown: true}}/> */}
    <Drawer.Screen name='PageB' component={PageB} />
  </Drawer.Navigator>
)
      
}

export default function App() {
  return (
    <NavigationContainer>
        {/* <MyDrawer></MyDrawer> */}
        <MyStack></MyStack>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})