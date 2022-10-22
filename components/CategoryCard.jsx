import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl }) => {
  return (
    <TouchableOpacity className="relative mr-4 shadow">
      <View>
        <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard
