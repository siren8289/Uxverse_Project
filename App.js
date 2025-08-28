// App.js
import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/Home/HomeScreen";
import GroupPurchaseList from "./src/GroupPurchaseList/GroupPurchase";
import RentalSharingList from "./src/RentalSharingList/Rental_sharing_service";
import MyPageScreen from "./src/RentalSharingDetail/MyPageScreen";
import CustomTabBar from "./src/common_components/Nav";
import PurchaseDetailScreen from "./src/GroupPurchaseDetail/purchase_detail";
import RentalDetailScreen from "./src/RentalSharingDetail/RentalDetailScreen"; // ✅ 추가

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen
        name="GroupPurchaseList"
        component={GroupPurchaseList}
      />
      <HomeStack.Screen
        name="RentalSharingList"
        component={RentalSharingList}
      />
      <HomeStack.Screen
        name="GroupPurchaseDetail"
        component={PurchaseDetailScreen}
      />
      <HomeStack.Screen
        name="RentalSharingDetail"
        component={RentalDetailScreen} // 너가 만든 상세 페이지 컴포넌트
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={({ route }) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeMain";
            const HIDE_ON = ["GroupPurchaseDetail"]; // 상세 화면 목록
            return {
              tabBarStyle: HIDE_ON.includes(routeName)
                ? { display: "none" }
                : undefined,
            };
          }}
        />
        <Tab.Screen name="Mypage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
