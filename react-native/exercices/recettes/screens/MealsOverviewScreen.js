import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/data'
import MealItem from '../components/MealItem'

export default function MealsOverviewScreen({navigation, route}) {
    const categoryId = route.params.categoryId

    const meals = MEALS.filter((item) => {
        return item.categoryIds.includes(categoryId)
     // autre possibilité a ajouter
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id == categoryId
        ).title;

        navigation.setOptions({
            title : categoryTitle
        })
    },[categoryId, navigation])

  return (
    <FlatList data={meals} keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
              const item = itemData.item
              const mealProps = {
                id : item.id,
                title : item.title,
                imageUrl : item.imageUrl,
                affordability : item.affordability,
                complexity : item.complexity,
                duration : item.duration
              }  

            return (<MealItem {...mealProps}  />)
        }}
    />

  )
}

const styles = StyleSheet.create({})