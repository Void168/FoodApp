import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToCart,
  removeFromCart,
  selectCartItems,
  selectCartItemsWithId,
} from '../features/cartSlice'

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false)
  const items = useSelector((state) => selectCartItemsWithId(state, id))
  const dispatch = useDispatch()

  const addItemToCart = () => {
    dispatch(addToCart({ id, name, description, price, image }))
  }

  const removeItemFromCart = () => {
    if (!items.length > 0) return
    dispatch(removeFromCart({ id }))
  }

  return (
    <>
      <TouchableOpacity
        className={` border p-4 border-gray-200 ${isPressed && 'border-b-0'}`}
        onPress={() => setIsPressed(!isPressed)}
        style={{ backgroundColor: '#E5B299' }}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text
              className="text-xl mb-1 font-bold"
              style={{ color: '#7D5A50' }}
            >
              {name}
            </Text>
            <Text
              className="text-gray-400 font-bold"
              style={{ color: '#7D5A50' }}
            >
              {description}
            </Text>
            <Text
              className="text-gray-400 mt-2 font-bold text-lg"
              style={{ color: '#7D5A50' }}
            >
              {price} vnđ
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: '#F3F3F4' }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4 shadow rounded"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="px-4" style={{ backgroundColor: '#E5B299' }}>
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItemFromCart}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? '#7D5A50' : 'gray'}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToCart}>
              <PlusCircleIcon size={40} color="#7D5A50" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow
