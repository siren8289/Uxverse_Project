import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HomeIcon from "./assets/Home.svg";
import SearchIcon from "./assets/Search_0.svg";
import HeartIcon from "./assets/Heart.svg";
import UserIcon from "./assets/User.svg";

const tabs = [
  { name: "Home", icon: HomeIcon, label: "HOME" },
  { name: "Search", icon: SearchIcon },
  { name: "Like", icon: HeartIcon },
  { name: "Mypage", icon: UserIcon, label: "MYPAGE" },
];

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;
        const Icon = tab.icon;

        return (
          <TouchableOpacity
            key={tab.name}
            style={[
              styles.tabItem,
              isFocused && tab.label ? styles.tabItemSelected : null,
            ]}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Icon width={20} height={20} fill="#fff" />
            {isFocused && tab.label && (
              <Text style={styles.tabLabel}>{tab.label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#2C2C35",
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabItem: {
    padding: 10,
    borderRadius: 40,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tabItemSelected: {
    backgroundColor: "#FA8072",
    paddingHorizontal: 16,
  },
  tabLabel: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
  },
});
