import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GroupPurchase from "./pages/GroupPurchase";
import CustomTabBar from "./src/components/Nav";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function GroupPurchaseStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GroupPurchaseMain" component={GroupPurchase} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <View style={{ marginBottom: 10}}>
            {/* ✅ 여기 marginBottom 값으로 Nav 전체를 위로 올림 */}
            <CustomTabBar {...props} />
          </View>
        )}
      >
        <Tab.Screen name="Home" component={GroupPurchaseStack} />
        <Tab.Screen name="Search" component={GroupPurchaseStack} />
        <Tab.Screen name="Like" component={GroupPurchaseStack} />
        <Tab.Screen name="Mypage" component={GroupPurchaseStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
