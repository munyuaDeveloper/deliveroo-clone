import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Platform,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import CategoryCard from "../components/CategoryCard";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: Platform.OS === "android" ? 50 : 0,
        }}
        className="flex flex-row px-4 justify-between items-center gap-3"
      >
        <View className="bg-gray-200 rounded-full">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-12 w-12 rounded-full"
          />
        </View>
        <View className="flex-1">
          <Text className="text-sm text-gray-500">John Doe</Text>
          <View className="flex flex-row items-center gap-1">
            <Text className="text-lg font-semibold">Current Location</Text>
            <ChevronDownIcon color={"#00cc88"} size={12} />
          </View>
        </View>
        <View>
          <UserIcon color={"#00cc88"} />
        </View>
      </View>

      <View className="flex flex-row justify-between items-center px-4 mt-4 pb-3 gap-2">
        <View className="flex flex-row flex-1 justify-between items-center bg-gray-200 p-2 rounded-lg">
          <MagnifyingGlassIcon color={"#00cc88"} />
          <TextInput
            className="flex-1 ml-2 text-gray-500"
            placeholder="Search for your favorite restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00cc88"} size={27} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <CategoryCard />

        {Array(5)
          .fill()
          .map((_, index) => (
            <FeaturedRow key={index} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
