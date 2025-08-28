// components/Search.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Vector from "../assets/Search.svg";

export default function Search({ style }) {
  return (
    <View style={[styles.section, style]}>
      <View style={styles.row}>
        <Vector width={20} height={20} />
        <Text style={styles.placeholder}>Search...</Text>
      </View>
    </View>
  );
}

const H = 0; // 좌우 여백

const styles = StyleSheet.create({
  section: {
    // paddingHorizontal: H,
    // paddingVertical: 12, // 내부 높이는 padding으로
    // ❌ marginTop / marginBottom 제거
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20, // RN 0.71+ OK (구버전이면 대신 marginRight)
  },
  placeholder: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: "#1B1B1B",
  },
});
