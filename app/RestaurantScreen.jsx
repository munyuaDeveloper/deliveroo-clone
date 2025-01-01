import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLongLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BasketButton from "../components/BasketButton";
import { StatusBar } from "expo-status-bar";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute();

  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="light" />
      <BasketButton />
      <ScrollView className="relative" contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="relative">
          <Image
            source={{
              uri: "https://links.papareact.com/gn7",
            }}
            className="h-56 w-full bg-gray-300"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-4 bg-white p-2 rounded-full"
            style={{ top: Platform.OS === 'ios' ? safeAreaInsets.top : safeAreaInsets.top + 20}}
          >
            <ArrowLongLeftIcon color={"#00cc88"} size={20} />
          </TouchableOpacity>
        </View>
        <View className="px-4 pt-4 bg-white">
          <Text className="text-xl font-bold">Nando's</Text>
          <View className="flex flex-row items-center gap-1 mt-2">
            <View className="flex flex-row items-center gap-1">
              <StarIcon color={"#00cc88"} size={16} opacity={0.3} />
              <Text className="text-[#00cc88] text-sm">4.8</Text>
              <Text className="text-sm">Offers</Text>
            </View>
            <View className="flex flex-row items-center gap-1">
              <MapPinIcon color={"#0002"} size={15} />
              <Text className="text-gray-400 text-sm">
                Nearby - Clerk Street
              </Text>
            </View>
          </View>
          <Text className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aperiam
            dicta saepe labore veritatis totam animi mollitia.{" "}
          </Text>
          <View className="flex flex-row justify-between items-center mt-4 border-t border-gray-200 py-3 gap-4">
            <QuestionMarkCircleIcon color={"#00cc88"} size={20} />
            <Text className="text-sm font-semibold text-gray-600 flex-1">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00cc88"} size={20} />
          </View>
        </View>

        <View>
          <Text className="text-lg font-bold my-4 mt-6 px-4">Menu</Text>
          {Array(6)
            .fill()
            .map((_, index) => (
              <View
                key={index}
                className="p-4 bg-white border-b border-gray-200"
              >
                <View className="flex flex-row justify-between gap-4">
                  <View className="flex-1">
                    <Text className="text-lg font-semibold">Starters</Text>
                    <Text className="text-sm text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                  </View>
                  <View className="">
                    <Image
                      source={{ uri: "https://links.papareact.com/gn7" }}
                      className="h-20 w-20"
                    />
                  </View>
                </View>
                <View>
                  <Text>$20.50</Text>
                  <View className="flex flex-row items-center gap-3 mt-4">
                    <TouchableOpacity>
                      <MinusCircleIcon color={"#00cc88"} size={30} />
                    </TouchableOpacity>
                    <Text>3</Text>
                    <TouchableOpacity>
                      <PlusCircleIcon color={"#00cc88"} size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
