// components/Personal.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RightIcon from "../assets/Right.svg";

const FontFamily = { notoSansKRMedium: "NotoSansKRMedium" };
const Color = { colorGray: "#1b1b1b" };

const Personal = ({ title, insetLeft = 20, insetRight = 16 }) => {
  return (
    <View style={styles.parent}>
      {/* 행 컨텐츠 */}
      <View style={[styles.row, { paddingLeft: 0, paddingRight: 0 , marginTop: 32}]}>
        <Text style={styles.text}>{title}</Text>
        <RightIcon width={20} height={20} />
      </View>

      {/* Divider */}
      <View
        style={[
          styles.divider,
          { marginLeft: 0, marginRight: 0 },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    width: "100%",
    alignSelf: "stretch",
  },
  row: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    alignSelf: "stretch",
  },
});

export default Personal;
