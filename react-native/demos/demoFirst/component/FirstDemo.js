import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import TestModal from "./TestModal";


export default function FirstDemo(){

    const [textInput,setTextInput]= useState('')
    const [modalVisible,setModalVisible]= useState(false)

    function RecupInput(enterText){
        setTextInput(enterText)
        console.log(textInput)
    }

    function MessageConsole(){
        console.log("Clique sur le bouton")
        setModalVisible(true)
    }

    function closeModal(){
        console.log("fermeture modal")
        setModalVisible(false)
    }


    return(
        <View style={styles.container}>
            <Text style={[styles.monTexte,styles.tailleTexte]}>Mon premier composant React native</Text>
            <TextInput onChangeText={RecupInput} value={textInput}/>
            <Button title="Bouton" onPress={MessageConsole}/>
            <TestModal visible={modalVisible} closeModal={closeModal}></TestModal>
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