// src/screens/components/Bar.jsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Arrow from "../assets/Arrow.svg";

export default function Bar({ title, onPress, style }) {
  return (
    <Pressable
      onPress={onPress}
      style={[s.wrap, style]}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <Text style={s.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={s.arrowWrap}>
        <Arrow width={16} height={16} opacity={0.6} />
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  wrap: {
    flexDirection: "row", // 한 줄 배치
    alignItems: "center", // 세로 중앙
    justifyContent: "space-between", // 좌: 텍스트 / 우: 화살표
    minHeight: 48, // 👈 손가락 터치 넉넉히
    paddingHorizontal: 0, // 좌우 여백
    backgroundColor: "#fff", // 필요시 배경 (투명 방지)
  },
  title: {
    fontFamily: "NotoSansKR-Medium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 22,
    color: "#1B1B1B",
  },
  arrowWrap: {
    justifyContent: "center",
    marginLeft: 8,
  },
});
