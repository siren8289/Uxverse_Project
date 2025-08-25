import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyPageScreen from "./screens/MyPageScreen";
import RentalDetailScreen from "./screens/RentalDetailScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="MyPage"
          component={MyPageScreen}
          options={{ title: "마이페이지" }}
        />
        <Tab.Screen
          name="RentalDetail"
          component={RentalDetailScreen}
          options={{ title: "상품 상세" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
