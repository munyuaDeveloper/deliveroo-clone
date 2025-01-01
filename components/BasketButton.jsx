import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const BasketButton = () => {
  return (
    <View className="absolute bottom-10 w-full z-10">
    <TouchableOpacity className="w-full">
      <View className="bg-[#00cc88] flex flex-row justify-between items-center p-4 px-5 rounded-xl mt-4 mx-4">
        <View className="bg-gray-500 p-1 px-2 rounded-md">
            <Text className="text-white text-lg font-semibold">4</Text>
        </View>
        <Text className="text-white text-center text-lg font-semibold">
          View Basket
        </Text>
        <Text className="text-white text-center text-lg font-semibold">
          $120.00
        </Text>

      </View>
    </TouchableOpacity>
  </View>
  )
}

export default BasketButton