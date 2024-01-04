import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
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

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <Pressable>
              <MinusCircleIcon
                color="#00ccbb"
                size={40}
              />
            </Pressable>

            <Text>0</Text>

            <Pressable>
              <PlusCircleIcon
                color="#00ccbb"
                size={40}
              />
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
