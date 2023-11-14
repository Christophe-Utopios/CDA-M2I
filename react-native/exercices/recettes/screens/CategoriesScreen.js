import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/data'
import CategoryGridTitle from '../components/CategoryGridTitle'

export default function CategoriesScreen({ navigation }) {


    
  return (
    <FlatList data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem={(itemData) => {
        return(
            // <Text>{itemData.item.title}</Text>
            <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={() => navigation.navigate('MealsOverview', {categoryId : itemData.item.id})}/>
        )
        
    }}
    numColumns={2}
    />
  )
}

const styles = StyleSheet.create({})