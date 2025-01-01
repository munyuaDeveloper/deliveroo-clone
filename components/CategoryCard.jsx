import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const CategoryCard = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex flex-row px-4 mt-4"
    >
      <View className="flex flex-row gap-4">
        {Array(10)
          .fill()
          .map((_, index) => (
            <View key={index} className="bg-gray-200 rounded-lg relative">
              <Image
                source={{ uri: "https://links.papareact.com/gn7" }}
                className="h-20 w-20 rounded-lg"
              />
              <Text className="text-sm font-semibold absolute bottom-2 text-center w-full text-white">
                Category
              </Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default CategoryCard;
