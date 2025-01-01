import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLongRightIcon, ChevronRightIcon, MapPinIcon, StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const FeaturedRow = () => {
    const navigation = useNavigation();
  return (
    <View className="px-4 mt-5">
      <View className="flex flex-row items-center justify-between">
      <Text className="text-lg font-bold">Offers near you!</Text>
      <ArrowLongRightIcon color={"#00cc88"} size={20} />
      </View>
      <Text className="text-sm text-gray-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row gap-4 mt-4">
          {Array(10)
            .fill()
            .map((_, index) => (
              <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {
                id: index
              })} key={index} className="bg-white rounded-sm">
                <Image
                  source={{ uri: "https://links.papareact.com/gn7" }}
                  className="h-40 w-56 rounded-t-sm"
                />
                <Text className="text-lg font-semibold p-2">Nando's</Text>
                <View className="px-2 flex flex-row items-center gap-1">
                  <StarIcon color={"#00cc88"} size={20} opacity={0.3} />
                  <Text className="text-[#00cc88] text-sm">4.8</Text>
                  <Text className="text-sm">Offers</Text>
                </View>
                <View className="p-2 flex flex-row items-center gap-1">
                    <MapPinIcon color={"#0002"} size={15} />
                    <Text className="text-gray-400 text-sm">Nearby - Clerk Street</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
