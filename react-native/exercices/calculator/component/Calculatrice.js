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

    function operationPress(operateur){
        console.log("appuie sur l'operateur "+operateur)
        setOperation(operateur)
        setSecondNumber(firstNumber)
        setFirstNumber("")
    }

    function numberPress(number){
        console.log("appuie sur  "+number)
        if (firstNumber != "0") {
            setFirstNumber(firstNumber + number)
        } else {
            setFirstNumber(number)
        }
        
    }
    function resultPress() {
        console.log("faire le calcul")
        console.log("faire l'opération "+secondNumber + " " + operation +" "+ firstNumber)
        let resultat
        switch (operation) {
            case "+":
                resultat = parseFloat(secondNumber) + parseFloat(firstNumber)
                setFirstNumber(resultat)
                break;
            case "-":
                resultat = parseFloat(secondNumber) - parseFloat(firstNumber)
                setFirstNumber(resultat)
                break;
            case "/":
                resultat = parseFloat(secondNumber) / parseFloat(firstNumber)
                setFirstNumber(resultat)
                break;
            case "x":
                resultat = parseFloat(secondNumber) * parseFloat(firstNumber)
                setFirstNumber(resultat)
                break;
                    
        }
    }



  return (
    <View style={styles.calculatrice}>
        <View>
      <Text style={styles.displayText}>{firstNumber}</Text>
      </View>
      <View style={styles.row}>
        <Button onPress={clear} title={"AC"}></Button>
        <Button title={"^"}></Button>
        <Button title={"%"}></Button>
        <Button onPress={() => operationPress("/")} title={"/"}></Button>
      </View>
      <View style={styles.row}>
        <Button onPress={() => numberPress("7")}  title={"7"} isWhite></Button>
        <Button onPress={() => numberPress("8")}  title={"8"} isWhite></Button>
        <Button onPress={() => numberPress("9")}  title={"9"} isWhite></Button>
        <Button onPress={() => operationPress("x")} title={"X"}></Button>
      </View>
      <View style={styles.row}>
        <Button onPress={() => numberPress("4")}  title={"4"} isWhite></Button>
        <Button onPress={() => numberPress("5")}  title={"5"} isWhite></Button>
        <Button onPress={() => numberPress("6")}  title={"6"} isWhite></Button>
        <Button onPress={() => operationPress("-")} title={"-"}></Button>
      </View>
      <View style={styles.row}>
        <Button onPress={() => numberPress("1")}  title={"1"} isWhite></Button>
        <Button onPress={() => numberPress("2")}  title={"2"} isWhite></Button>
        <Button onPress={() => numberPress("3")}  title={"3"} isWhite></Button>
        <Button onPress={() => operationPress("+")} title={"+"}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"."} isWhite></Button>
        <Button onPress={() => numberPress("0")}  title={"0"} isWhite></Button>
        <Button onPress={clear} title={"Del"} isWhite></Button>
        <Button onPress={resultPress}  title={"="}></Button>
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