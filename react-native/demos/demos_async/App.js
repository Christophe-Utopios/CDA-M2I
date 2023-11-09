import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {

    const [value,setValue] = useState({ nom : "", prenom : ""})

    

    // stockage String
    // const addData = async () => {
    //     try {
    //         await AsyncStorage.setItem('storageKey','toto')
    //       //  await AsyncStorage.setItem('storageKey2','toto')
    //     }catch(error){
    //         console.log(error)
    //     }

    // }

    // const getData = async () => {
    //     try {
    //         const maValue = await AsyncStorage.getItem('storageKey')
    //         if(maValue !== null){
    //             setValue({ nom : maValue, prenom : maValue})
    //         }
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // const deleteData= async () => {
    //     try {
    //         const maValue = await AsyncStorage.removeItem('storageKey')
    //         setValue({ nom : "", prenom : ""})
           
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // stockage Objet
    const addData = async () => {
        try {
            await AsyncStorage.setItem('storageKeyobject',JSON.stringify({ nom : "tata", prenom : "titi"}))
        }catch(error){
            console.log(error)
        }

    }

    const getData = async () => {
        try {
            const maValue = await AsyncStorage.getItem('storageKeyobject')
            if(maValue !== null){
                setValue(JSON.parse(maValue))
            }
        }catch(error){
            console.log(error)
        }
    }

    const deleteData= async () => {
        try {
            const maValue = await AsyncStorage.removeItem('storageKeyobject')
            setValue({ nom : "", prenom : ""})
           
        }catch(error){
            console.log(error)
        }
    }



  return (
    <View>
      <Text>Nom : {value.nom}</Text>
      <Text>Prenom : {value.prenom}</Text>
      <Button title='Add Data' onPress={addData}></Button>
      <Button title='Get Data' onPress={getData}></Button>
      <Button title='Delete Data' onPress={deleteData}></Button>
    </View>
  )
}

const styles = StyleSheet.create({})