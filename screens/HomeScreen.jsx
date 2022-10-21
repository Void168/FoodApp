import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
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

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
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
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* {Categories} */}
        <Categories />

        {/* {Featured} */}
        <FeaturedRow
          id="1"
          title="✨ Đề xuất"
          description="Các đối tác của chúng tôi"
          featuredCategory="featured"
        />
        {/* {Tasty Discounts} */}
        <FeaturedRow
          id="1"
          title="🔥 Deal hot"
          description="Cuối tháng, lương chưa về, không sao đã có deal giảm giá hot dành cho bạn"
          featuredCategory="featured"
        />
        {/* {Offers near you } */}
        <FeaturedRow
          id="1"
          title="📍 Món ngon gần bạn"
          description="Không cần phải đi đâu xa khi gần nhà cũng có món ngon!"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
