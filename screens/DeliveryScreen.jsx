import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../features/restaurantSlice.js'
import { useSelector } from 'react-redux'
import { XMarkIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  return (
    <View className="bg-[#E5B299] flex-1">
      <SafeAreaView>
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XMarkIcon color="white" size={30}></XMarkIcon>
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-7 my-2 rounded-md p-6 z-5 shadow-md relative">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-[#7D5A50]">
                Thời gian đến dự kiến
              </Text>
              <Text className="text-4xl font-bold">15-25 Phút</Text>
            </View>
            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#7D5A50" indeterminate={true} />
          <Text className="mt-3 text-[#7D5A50] text-sm">
            Đơn hàng của bạn đang được chuẩn bị
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 mt-10 z-0 relative"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#7D5A50"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Hoàng Dũng</Text>
          <Text className="text-gray-400">Tài xế đang giao hàng</Text>
        </View>

        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Gọi</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
