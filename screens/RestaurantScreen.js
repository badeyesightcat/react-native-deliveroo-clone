import { Pressable, ScrollView, View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RestaurantScreen = () => {
  // tip: Use destructured params
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />

        <Pressable
          onPress={navigation.goBack}
          className="absolute top-14 left--5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon
            size={20}
            color="#00ccbb"
          />
        </Pressable>
      </View>

      <Text>{title}</Text>
    </ScrollView>
  );
};

export default RestaurantScreen;
