// src/common_components/Nav.js
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 아이콘
import HomeIcon from "./assets/Home.svg";
import SearchIcon from "./assets/Search_0.svg";
import HeartIcon from "./assets/Heart.svg";
import UserIcon from "./assets/User.svg";

// 탭바는 4개 고정
const TABS = [
  { name: "Home", Icon: HomeIcon, label: "HOME", navigable: true },
  { name: "Search", Icon: SearchIcon, label: null, navigable: false },
  { name: "Like", Icon: HeartIcon, label: null, navigable: false },
  { name: "Mypage", Icon: UserIcon, label: "MYPAGE", navigable: true },
];

export default function CustomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const currentRouteName = state.routes[state.index]?.name;

  // 현재 포커스된 스크린 옵션
  const focusedRouteKey = state.routes[state.index].key;
  const focusedOptions = descriptors[focusedRouteKey]?.options || {};

  // 상세 화면 등에서 숨김
  if (focusedOptions.tabBarStyle?.display === "none") return null;

  // --------- 사이즈 고정(369 x 68.81), 작은 화면에서는 자동 축소 ----------
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const TAB_HEIGHT = 68.81;
  const H_MARGIN = 12; // 좌우 여백
  const TAB_WIDTH = Math.min(369, SCREEN_WIDTH - H_MARGIN * 2);
  const RADIUS = TAB_HEIGHT / 2;

  const handlePress = (tab) => {
    if (tab.navigable) navigation.navigate(tab.name);
    else Alert.alert("준비 중", `${tab.name} 기능은 추후 연결됩니다.`);
  };

  return (
    <View
      style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 10) }]}
      pointerEvents="box-none"
    >
      <View
        style={[
          styles.tabContainer,
          {
            width: TAB_WIDTH,
            height: TAB_HEIGHT,
            borderRadius: RADIUS,
            marginHorizontal: H_MARGIN,
          },
        ]}
        pointerEvents="auto"
      >
        {TABS.map((tab) => {
          const isFocused = currentRouteName === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              onPress={() => handlePress(tab)}
              activeOpacity={0.8}
              style={[
                styles.tabItem,
                isFocused && tab.label ? styles.tabItemSelected : null,
              ]}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
            >
              <tab.Icon width={22} height={22} />
              {isFocused && tab.label && (
                <Text style={styles.tabLabel}>{tab.label}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#2C2C35",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 6,

    // 그림자
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
      },
      android: { elevation: 8 },
    }),
  },
  tabItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tabItemSelected: {
    backgroundColor: "#FA8072",
    paddingHorizontal: 16,
  },
  tabLabel: { color: "#fff", fontWeight: "600", fontSize: 13 },
});
