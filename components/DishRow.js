import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  return (
    <Pressable className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency
              quantity={price}
              currency="KRW"
            />
          </Text>
        </View>

        <View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className="w-20 h-20 bg-gray-300 p-4"
            style={{
              borderWidth: 1,
              borderColor: "#f3f3f4",
            }}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default DishRow;
