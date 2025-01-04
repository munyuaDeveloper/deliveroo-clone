import { View, Image, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, { FadeIn } from "react-native-reanimated";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const OrderPreparationScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 2000);
  }, []);

  return (
    <View className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Image
        source={require("../assets/orderLoading.gif")}
        className="h-96 w-96"
      />
      <View className="mt-10">
        <Text
          className="text-center text-white text-md font-semibold"
        >
          Waiting for the restaurant to accept your order...
        </Text>
      </View>
      <View className="mt-10">
        <Progress.Circle size={60} indeterminate={true} color="#fff" />
      </View>
    </View>
  );
};

export default OrderPreparationScreen;
