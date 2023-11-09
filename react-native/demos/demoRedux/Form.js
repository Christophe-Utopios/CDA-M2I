import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addIds } from './store/redux/data'

export default function Form() {


    const dispatch = useDispatch()

    function getRandomint(){
        // console.log(Math.floor(Math.random()*100))
        return Math.floor(Math.random()*100)
    }

  return (
    <View>
      <Button title="Ajout d'un ID random" onPress={() => dispatch(addIds({ id : getRandomint() }))}/>
    </View>
  )
}

const styles = StyleSheet.create({})