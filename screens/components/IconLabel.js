import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FontFamily = { notoSansKRMedium: "NotoSansKRMedium" };
const Color = { colorGray: "#1b1b1b" };

const IconLabel = ({ icon: Icon, label, size = 48, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, { width: size, height: size }]}>
        {Icon ? (
          // ✅ SVG는 style 대신 width/height props로 크기 지정
          <Icon width={size} height={size} {...(color ? { fill: color } : {})} />
        ) : null}
      </View>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: 70, alignItems: "center" },
  iconWrapper: {
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.3,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "center",
  },
});

export default IconLabel;
