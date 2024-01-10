import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";

const BasketIcon = () => {
  const navigation = useNavigation();
  const basketItems = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  console.log(basketItems);

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <Pressable className="mx-5 p-4 rounded-lg flex-row items-center space-x-1 bg-[#00ccbb]">
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {basketItems.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW",
          }).format(basketTotal)}
        </Text>
      </Pressable>
    </View>
  );
};

export default BasketIcon;
