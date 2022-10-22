import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../features/cartSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

const CartScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const cartTotal = useSelector(selectCartTotal)
  const shippingFee = (cartTotal / 100) * 10
  const items = useSelector(selectCartItems)
  const dispatch = useDispatch()
  const [groupedItemsInCart, setGroupedItemsInCart] = useState([])

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      ;(results[item.id] = results[item.id] || []).push(item)

      return results
    }, {})

    setGroupedItemsInCart(groupedItems)
  }, [items])

  return (
    <SafeAreaView className="flex-1 bg-[#E5B299]">
      <View className="flex-1 gb-gray-100">
        <View className="p-5 border-b border-[#7D5A50] bg-[#FCDEC0] shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center color-[#7D5A50]">
              Giỏ hàng
            </Text>
            <Text className="text-center color-[#B4846C]">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#7D5A50" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-[#FCDEC0] my-5">
          <Image
            source={{ uri: 'http://links.papareact.com/wru' }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          ></Image>
          <Text className="flex-1 text-md">
            Vận chuyển trong vòng 15-20 phút
          </Text>
          <TouchableOpacity>
            <Text className="text-[#7D5A50] font-bold">Thay đổi</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInCart).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-[#FCDEC0] py-2 px-5 border-b border-[#7D5A50]"
            >
              <Text className="text-[#7D5A50] font-bold">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>{items[0]?.price} vnđ</Text>

              <TouchableOpacity>
                <Text
                  className="text-[#7D5A50] text-xs font-bold"
                  onPress={() => dispatch(removeFromCart({ id: key }))}
                >
                  Hủy bỏ
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-[#FCDEC0] mt-5 space-y-4 text-[#7D5A50]">
          <View className="flex-row justify-between">
            <Text>Tổng cộng</Text>
            <Text>{cartTotal} vnđ</Text>
          </View>

          <View className="flex-row justify-between border-b pb-4">
            <Text>Phí vận chuyển</Text>
            <Text>{shippingFee} vnđ</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-bold">Tổng phải trả</Text>
            <Text className="font-bold">{cartTotal + shippingFee} vnđ</Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-[#7D5A50] p-4">
            <Text className="text-center text-[#FCDEC0] text-lg font-bold">
              Đặt hàng
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen
