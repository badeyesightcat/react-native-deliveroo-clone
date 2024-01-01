import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native"; // [important] import SafeAreaView from react-native for low import cost
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    /** set the layout without the header zone */
    navigation.setOptions({
      // headerTitle: 'testing',
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured'] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      },
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    /** you can put things inside the safe area no matter in which device users are using */
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={
            require("../assets/avatar.png")
            // { uri: '../assets/avatar.png'},
          }
          style={{ width: 28, height: 28 }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl flex items-center">
            Current Location{" "}
            <ChevronDownIcon
              size={20}
              color="#00ccbb"
            />
          </Text>
        </View>

        <UserIcon
          size={24}
          color="#00ccbb"
        />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon
            size={20}
            color="gray"
          />
          <TextInput
            placeholder="Restaurants and Cuisines"
            inputMode="default"
          />
        </View>
        <AdjustmentsVerticalIcon
          size={20}
          color="#00ccbb"
        />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
