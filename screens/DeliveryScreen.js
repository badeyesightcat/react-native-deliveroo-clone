import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
// import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <Pressable onPress={() => navigation.navigate("Home")}>
            <XMarkIcon
              color="white"
              size={30}
            />
          </Pressable>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between items-center gap-2">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45 - 55 minutes</Text>
            </View>
            <Image
              source={require("../assets/rider.png")}
              className="h-18 w-18"
            />
          </View>

          <Progress.Bar
            size={30}
            color="#00ccbb"
            indeterminate={true}
          />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      {/* this view element should be eliminated before commit */}
      <View className="flex-1 -mt-10 z-0"></View>

      {/* this mapview should be exchanged for web env. */}
      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView> */}

      <SafeAreaView className="bg-white flex-row items-center h-28 px-5">
        <Image
          source={require("../assets/avatar.png")}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1 mx-5">
          <Text className="text-lg">Charlie Bear</Text>
          <Text className="text-gray-400">Your rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
