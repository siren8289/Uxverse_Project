import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// 스크린들
import HomeScreen from "./src/screens/HomeScreen";

// 탭바 (Nav.js: 커스텀 탭바)
import Nav from "./src/components/Nav";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <Nav {...props} />} // ✅ 커스텀 탭바 연결
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* 다른 탭들 추가 가능 */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
