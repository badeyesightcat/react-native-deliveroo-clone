import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
// import { Linking, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

import "./style.css";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
