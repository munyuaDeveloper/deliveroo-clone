import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const BasketScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex flex-row justify-between items-center p-4 border-b border-green-300">
        <View className="flex-1">
          <Text className="text-center text-2xl font-semibold">Basket</Text>
          <Text className="text-center text-sm text-gray-400">Nando's</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <XCircleIcon color={"#00ccbb"} size={40} opacity={0.5} />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between items-center p-4 bg-white my-6 gap-6">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 rounded-full"
        />
        <Text className="text-lg flex-1 font-semibold">
          Deliver in 45 -60 Mins
        </Text>
        <Text className="text-[#00ccbb]">Change</Text>
      </View>

      <ScrollView >
        <View className="pb-40">
        {Array(10)
          .fill()
          .map((_, i) => (
            <View
              key={i}
              className="flex flex-row justify-between items-center p-4 bg-white gap-6 border-b border-gray-100"
            >
              <Text className="text-[#00ccbb]">3 x</Text>
              <Image
                source={{ uri: "https://links.papareact.com/gn7" }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="text-lg flex-1 font-semibold">1/2 chicken</Text>
              <Text className="text-lg font-semibold">$3.50</Text>
              <Text className="text-[#00ccbb]">Remove</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className="bg-white p-5 pb-10 absolute bottom-0 w-full z-50">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-gray-400 font-semibold">Subtotal</Text>
          <Text className="text-gray-400 font-semibold">$120.00</Text>
        </View>
        <View className="flex flex-row justify-between items-center mt-4">
          <Text className="text-gray-400 font-semibold">Delivery Fee</Text>
          <Text className="text-gray-400 font-semibold">$120.00</Text>
        </View>
        <View className="flex flex-row justify-between items-center mt-4">
          <Text className=" font-semibold">Order Total</Text>
          <Text className=" font-semibold">$120.00</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderPreparation')} className="bg-[#00ccbb] p-4 rounded-xl mt-4">
          <Text className="text-white text-center text-lg font-semibold tracking-widest">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BasketScreen;
