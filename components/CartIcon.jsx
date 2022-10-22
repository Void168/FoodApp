import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectCartItems, selectCartTotal } from '../features/cartSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CartIcon = () => {
  const items = useSelector(selectCartItems)
  const navigation = useNavigation()
  const cartTotal = useSelector(selectCartTotal)

  if (items.length === 0) return null
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 bg-[#FCDEC0] p-4 reounded-lg flex-row items-center space-x-1"
        onPress={() => navigation.navigate('Cart')}
      >
        <Text className="text-white font-extrabold text-lg bg-[#E5B299] py-1 px-2">
          {items.length}
        </Text>
        <Text className="color-[#7D5A50] font-extrabold text-lg flex-1 text-center">
          Xem giỏ hàng
        </Text>
        <Text className="text-lg font-extrabold color-[#7D5A50]">
          {cartTotal} vnđ
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CartIcon
