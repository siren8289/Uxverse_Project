import React from "react";
import { StyleSheet, View } from "react-native";

// 색상 정의
const Color = {
  colorDarkslategray: "#292e38",
};

const Long1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <View style={styles.bar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barWrapper: {
    height: 7, // px 단위
    width: 300, // 필요에 따라 조절 가능
    flex: 1,
    position: "relative",
  },
  bar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300, // px 단위
    height: 7, // px 단위
    borderRadius: 10,
    backgroundColor: Color.colorDarkslategray,
  },
});

export default Long1;
