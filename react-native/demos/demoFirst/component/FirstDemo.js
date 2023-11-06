import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function FirstDemo(){

    const [textInput,setTextInput]= useState('')

    function RecupInput(enterText){
        setTextInput(enterText)
        console.log(textInput)
    }


    return(
        <View style={styles.container}>
            <Text style={[styles.monTexte,styles.tailleTexte]}>Mon premier composant React native</Text>
            <TextInput onChangeText={RecupInput} value={textInput}/>
        </View> 
    )
    
}

//mauvaise pratique
//  const container = {
//      backgroundColor: "red",
//      flex: 1,
//  }

// bonne pratique 
const styles = StyleSheet.create({
    container : {
        backgroundColor : "red",
        flex :1,
        padding: 20,
    },
    monTexte: {
        margin : 8,
        color : "white",
    },
    tailleTexte: {
        fontSize:32
    }
})