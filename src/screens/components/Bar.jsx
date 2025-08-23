// src/screens/components/Bar.jsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Arrow from "../assets/Arrow.svg";

export default function Bar({ title, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[s.wrap, style]} hitSlop={8}>
      <Text style={s.title} numberOfLines={1}>
        {title}
      </Text>

      {/* 화살표를 전체 높이에 절대배치하고 안에서 세로 중앙 정렬 */}
      <View style={s.arrowWrap}>
        <Arrow width={16} height={16} opacity={0.6} />
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  wrap: {
    position: "relative",
    justifyContent: "center", // 제목을 정확히 중앙
    minHeight: 22,
    paddingVertical: 2,
  },
  title: {
    fontFamily: "NotoSansKR-Medium",
    fontWeight: "500", // iOS만 적용, 안드에서 두꺼우면 제거
    fontSize: 14,
    lineHeight: 22,
    color: "#1B1B1B",
    // textAlign: "center",
  },
  arrowWrap: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center", // ← 세로 중앙
    paddingLeft: 8, // (옵션) 터치 여유 / 시각적 간격
  },
});
