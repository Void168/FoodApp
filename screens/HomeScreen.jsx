import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "feature"] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->
            }
        }`,
      )
      .then((data) => {
        setFeaturedCategories(data)
      })
  }, [])
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: 'http://links.papareact.com/wru' }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Đặt món ngay!</Text>
          <Text className="font-bold text-xl">
            Vị trí hiện tại của bạn
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* {Search} */}
      <View className="flex-row items-center space-x-2 mx-4 py-3 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={25} color="gray" />
          <TextInput placeholder="Nhà hàng và món ăn" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* {Body} */}
      <ScrollView
        className="bg-white"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* {Categories} */}
        <View className="pb-2 bg-gray-100">
          <Categories />
        </View>

        {/* {Featured} */}
        <View className="mt-2 bg-gray-100">
          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category.id}
              id={category.id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
