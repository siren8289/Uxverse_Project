// App.js — 정리본 (중복 return/중복 App 선언 제거)
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

import { makeServer } from "./src/mocks/server";
import withQueryClient from "./src/app/QueryClient";

// RootNavigator는 사용하지 않으므로 제거
// import RootNavigator from "./src/navigation/RootNavigator";

makeServer();

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
  console.log("✅ API URL:", process.env.EXPO_PUBLIC_API_URL);

  return withQueryClient({
    children: (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => {
            const { state } = props;
            const activeTab = state.routes[state.index];
            const focusedChild =
              getFocusedRouteNameFromRoute(activeTab) ?? activeTab.name;

            const HIDE_ON = ["GroupPurchaseDetail", "RentalSharingDetail"];
            if (activeTab.name === "Home" && HIDE_ON.includes(focusedChild)) {
              return null;
            }
            return <CustomTabBar {...props} />;
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Mypage" component={MyPageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    ),
  });
}
