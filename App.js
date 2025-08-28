// App.js (수정본)
import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./pages/Home/HomeScreen";
import GroupPurchaseList from "./pages/GroupPurchaseList/GroupPurchase";
import RentalSharingList from "./pages/RentalSharingList/Rental_sharing_service";
import MyPageScreen from "./pages/RentalSharingDetail/MyPageScreen";
import CustomTabBar from "./pages/common_components/Nav";
import PurchaseDetailScreen from "./pages/GroupPurchaseDetail/purchase_detail";
import RentalDetailScreen from "./pages/RentalSharingDetail/RentalDetailScreen";

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
        component={RentalDetailScreen}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => {
          // 현재 활성 탭 (예: "Home")
          const { state } = props;
          const activeTab = state.routes[state.index];

          // 활성 탭(Home)의 "하위 스택"에서 포커스된 라우트 이름
          const focusedChild =
            getFocusedRouteNameFromRoute(activeTab) ?? activeTab.name;

          // 상세일 때만 탭바 숨김
          const HIDE_ON = ["GroupPurchaseDetail", "RentalSharingDetail"];
          if (activeTab.name === "Home" && HIDE_ON.includes(focusedChild)) {
            return null; // ← 탭바 자체 비표시
          }
          return <CustomTabBar {...props} />;
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Mypage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
