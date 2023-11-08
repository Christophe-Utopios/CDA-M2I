import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button'

export default function Calculatrice() {

    const [firstNumber,setFirstNumber] = useState('0')
    const [secondNumber,setSecondNumber] = useState('0')
    const [operation,setOperation] = useState('0')
    const [result,setResult] = useState('')

    function clear(){
        setFirstNumber('0')
    }



  return (
    <View style={styles.calculatrice}>
        <View>
      <Text style={styles.displayText}>{firstNumber}</Text>
      </View>
      <View style={styles.row}>
        <Button title={"AC"}></Button>
        <Button title={"^"}></Button>
        <Button title={"%"}></Button>
        <Button title={"/"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"7"} isWhite></Button>
        <Button title={"8"} isWhite></Button>
        <Button title={"9"} isWhite></Button>
        <Button title={"X"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"4"} isWhite></Button>
        <Button title={"5"} isWhite></Button>
        <Button title={"6"} isWhite></Button>
        <Button title={"-"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"1"} isWhite></Button>
        <Button title={"2"} isWhite></Button>
        <Button title={"3"} isWhite></Button>
        <Button title={"+"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"."} isWhite></Button>
        <Button title={"0"} isWhite></Button>
        <Button title={"Del"} isWhite></Button>
        <Button title={"="}></Button>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    calculatrice: {
        width:"100%",
        position : 'absolute',
        bottom : 50,
    },
    row : {
        width:"100%",
        flexDirection : "row",
        justifyContent: "space-around",
        marginVertical : 10
    },
    displayText : {
        fontSize : 90,
        fontWeight :"300",
        color : "white",
        alignSelf : "flex-end",
        marginRight : 20,
    }
})