import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GroupPurchase from "./screens/GroupPurchase";
import CustomTabBar from "./src/components/Nav"; // 공용 Nav.js

function Empty() { return null; }

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          <Tab.Screen
            name="Home"
            component={GroupPurchase}
            options={{ tabBarLabel: () => null }}   // ✅ 라벨 완전히 제거
          />
          <Tab.Screen
            name="Search"
            component={Empty}
            options={{ tabBarLabel: () => null }}
          />
          <Tab.Screen
            name="Like"
            component={Empty}
            options={{ tabBarLabel: () => null }}
          />
          <Tab.Screen
            name="Mypage"
            component={Empty}
            options={{ tabBarLabel: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
