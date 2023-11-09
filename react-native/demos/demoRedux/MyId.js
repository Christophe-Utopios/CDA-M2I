import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { removeIds } from './store/redux/data'
import Form from './Form'

export default function MyId() {

    const myId = useSelector((state) => state.data.ids)
    const dispatch = useDispatch()


  return (
    <View>
      <Text>MyId</Text>
      {myId.map((ids,i) => <Pressable key={i} onPress={() => dispatch(removeIds({id : ids}))}>
        <Text style={styles.text}>{ids}</Text>
      </Pressable>)}
      <Form></Form>
    </View>
  )
}

const styles = StyleSheet.create({
    text : {
        color : "black",
        fontSize : 24,
    }
})