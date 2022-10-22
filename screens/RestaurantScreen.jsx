import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
} from 'react-native-heroicons/solid'
import {
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'

const RestaurantScreen = () => {
  const navigation = useNavigation()

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <ScrollView style={{ backgroundColor: '#7D5A50' }}>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full opacity-70"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color="#7D5A50" />
        </TouchableOpacity>
      </View>
      <View>
        <View className="px-4 pt-4" style={{ backgroundColor: '#FCDEC0' }}>
          <Text className="text-3xl font-bold" style={{ color: '#7D5A50' }}>
            {title}
          </Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-sx" style={{ color: '#7D5A50' }}>
                <Text className="text-green-500">{rating}</Text> - {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.5} size={22} />
              <Text style={{ color: '#7D5A50' }}>{address}</Text>
            </View>
          </View>
          <Text className="mt-2 pb-4" style={{ color: '#7D5A50' }}>
            {short_description}
          </Text>
        </View>

        <TouchableOpacity
          className="flex-row items-center space-x-2 p-4 border-y border-gray-300"
          style={{ backgroundColor: '#B4846C' }}
        >
          <QuestionMarkCircleIcon color="#FCDEC0" opacity={0.5} size={20} />
          <Text
            className="pl-2 flex-1 text-md font-bold"
            style={{ color: '#FCDEC0' }}
          >
            Bạn bị dị ứng với thức ăn?
          </Text>
          <ChevronRightIcon color="#00CCBB" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          className="px-4 pt-6 mb-5 font-bold text-xl"
          style={{ color: '#FCDEC0' }}
        >
          Thực đơn
        </Text>
        {/* {Dishrows} */}
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen
