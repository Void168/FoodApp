import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `,
      )
      .then((data) => setCategories(data))
  }, [])
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* {Cards} */}
      {categories.map((category) => (
        <View className="flex-col">
          <CategoryCard
            key={category._id}
            imgUrl={urlFor(category.image).width(200).url()}
          />
          <Text className="mt-2 text-center font-bold pr-4">
            {category.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default Categories
