import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { PhoneIcon, XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#00ccbb] flex-1 ">
      <SafeAreaView className="z-50">
        <View
          style={{
            marginTop: Platform.OS === "android" ? 30 : 0,
          }}
          className="flex flex-row px-4 justify-between items-center"
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <XMarkIcon color={"#fff"} size={30} />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold">Order Help</Text>
        </View>
        <View className="bg-white mx-5 mt-10 z-50 rounded-lg">
          <View className="flex flex-row justify-between  p-4 pb-6">
            <View className="flex-1">
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold my-2">45 - 55 Minutes</Text>

              <Progress.Bar
                progress={0.5}
                width={200}
                color="#00ccbb"
                indeterminate
              />

              <Text className="text-gray-400 text-sm mt-5">
                Your order at KFC is being prepared ...
              </Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-24 w-24"
            />
          </View>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: -1.2953,
          longitude: 36.7992,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          flex: 1,
          width: "100%",
          height: 200,
          marginTop: -40,
          zIndex: 0,
        }}
      >
        <Marker
          coordinate={{
            latitude: -1.2953,
            longitude: 36.7992,
          }}
          title="KFC"
          description="KFC Ngong Road, Nairobi"
        />
      </MapView>
      <SafeAreaView className="bg-white ">
        <View className="flex flex-row justify-between items-center gap-4 p-4">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-12 w-12 rounded-full ml-4"
          />
          <View className="flex-1">
            <Text className="text-lg font-semibold">Peter Munyua</Text>
            <Text className="text-sm text-gray-400">Your Rider</Text>
          </View>
          <TouchableOpacity className="flex flex-row items-center gap-2 ">
            <PhoneIcon color={"#00ccbb"} size={20} />
            <Text className="text-[#00ccbb] text-lg font-semibold">
              Call Rider
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
