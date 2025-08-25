// components/Personal.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Arrow_icon from "../assets/Arrow_icon.svg";

const FontFamily = {
  notoSansKRMedium: "NotoSansKRMedium", // ✅ NotoSansKR-Medium 이름 일치
};

const Color = {
  colorGray: "#1b1b1b",
};

// ✅ title을 props로 받음
const Personal = ({ title }) => {
  return (
    <View style={styles.parent}>
      <View style={styles.view}>
        {/* 동적으로 텍스트 표시 */}
        <Text style={styles.text}>{title}</Text>
        <Arrow_icon style={styles.child} width={20} height={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  view: {
    flexDirection: "row", // ✅ 텍스트 + 아이콘 가로 배치
    alignItems: "center",
    justifyContent: "space-between", // 양 끝 정렬
  },
  text: {
    fontSize: 16,
    letterSpacing: -0.4,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
  },
  child: {
    width: 20,
    height: 20,
  },
});

export default Personal;
