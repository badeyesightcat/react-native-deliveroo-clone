import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketItems } from "../features/basketSlice";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const basketItems = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});

  useMemo(() => {
    const groupedItems = basketItems.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);

      return result;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [basketItems]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <Pressable
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            onPress={navigation.goBack}
          >
            <XCircleIcon
              color="#00ccbb"
              height={48}
              width={48}
            />
          </Pressable>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require("../assets/avatar.png")}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min.</Text>
          <Pressable>
            <Text className="text-[#00ccbb]">Change</Text>
          </Pressable>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, value]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{value.length} x</Text>
              <Image
                source={{ uri: urlFor(value[0]?.image).url() }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{value[0]?.name}</Text>
              <Text className="text-gray-600">
                {new Intl.NumberFormat("ko-KR", {
                  style: "currency",
                  currency: "KRW",
                }).format(value[0]?.price)}
              </Text>
              <Pressable
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-xs text-[#00ccbb]">Remove</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
