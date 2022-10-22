import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery')
    }, 10000)
  }, [])
  return (
    <SafeAreaView className="bg-[#FD6061] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/egg.gif')}
        animation="slideInUp"
        interationCount={1}
        className="h-96 w-full"
      />

      <Animatable.Text
        animation="slideInUp"
        interationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Chờ chấp nhận đơn...
      </Animatable.Text>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
