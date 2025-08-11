import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GroupPurchase from "./screens/GroupPurchase";
import CustomTabBar from "./src/components/Nav"; // Nav.js 기본 export

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
          <Tab.Screen name="Home" component={GroupPurchase} />
          <Tab.Screen name="Search" component={Empty} />
          <Tab.Screen name="Like" component={Empty} />
          <Tab.Screen name="Mypage" component={Empty} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
