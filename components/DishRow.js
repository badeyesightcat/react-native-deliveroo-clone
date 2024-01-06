import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, selectBasketItems } from "../features/basketSlice";
import { createSelector } from "@reduxjs/toolkit";

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);

  // [important] if some changes make constant update for the value,
  // then it should be controlled with createSelector
  // and then finally it needs to be done with useSelector
  const memoizedItems = createSelector(selectBasketItems, (items) =>
    items.filter((item) => item.id === id)
  );
  const selectedItems = useSelector(memoizedItems);

  // dispatch methods to be called inside a function body
  // instead of assigned to a constant
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

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
              {/* replace currency representation for outdated dependency of react-currency-formatter */}
              {new Intl.NumberFormat("ko-KR", {
                style: "currency",
                currency: "KRW",
              }).format(price)}
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

            <Text>{selectedItems.length}</Text>

            <Pressable onPress={addItemToBasket}>
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
