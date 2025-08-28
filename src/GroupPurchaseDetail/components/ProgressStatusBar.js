import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Color = {
  colorGray100: "#FFFFFF",
  colorGray200: "#333333",
  colorDimgray: "#666666",
  colorDarkslategray200: "#4F5B62",
  colorSalmon: "#FF7F7F",
};
const Border = { br_10: 10 };

const ProgressStatusBar = () => {
  return (
    <>
      <View style={[styles.child, styles.itemLayout]} />
      <View style={[styles.item, styles.itemLayout]} />
      <Text style={styles.countText}>10/15</Text>
      <Text style={styles.percentText}>70%</Text>
      <Text style={styles.labelText}>참가한 인원</Text>
    </>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 7,
    top: 563,
    borderRadius: Border.br_10,
    position: "absolute",
  },
  child: {
    left: 27,
    backgroundColor: Color.colorDarkslategray200,
    width: 338,
  },
  item: {
    width: 200,
    backgroundColor: Color.colorSalmon,
    left: 20,
  },
  countText: {
    top: 572,
    width: 40,
    height: 20,
    color: Color.colorDimgray,
    lineHeight: 27,
    textAlign: "left",
    fontSize: 12,
    left: 20,
    position: "absolute",
    fontWeight: "500",
  },
  percentText: {
    top: 534,
    left: 342,
    width: 28,
    height: 23,
    color: Color.colorDimgray,
    lineHeight: 24,
    textAlign: "left",
    fontSize: 12,
    position: "absolute",
    fontWeight: "500",
  },
  labelText: {
    top: 533,
    width: 75,
    fontSize: 13,
    color: Color.colorDimgray,
    lineHeight: 24,
    textAlign: "left",
    left: 20,
    position: "absolute",
    fontWeight: "500",
  },
});

export default ProgressStatusBar;
