import { Button, Modal, Text, View } from "react-native";


export default function TestModal(props){



    return (
        <Modal visible={props.visible}>
            <View>
                <Text>Ceci est ma modal react native !!!</Text>
                <Button title="close Modal" onPress={props.closeModal}/>
            </View>
        </Modal>
    )
}