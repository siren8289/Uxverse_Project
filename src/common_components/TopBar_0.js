import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LeftIcon from "./assets/Left.svg";
import RightIcon from "./assets/Search.svg";
import CenterIcon from "./assets/Cart.svg";

const TopBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.iconRow}>
          <LeftIcon style={[styles.leftIcon, styles.iconCommon]} />
          <RightIcon style={[styles.rightIcon, styles.iconCommon]} />
          <CenterIcon style={[styles.centerIcon, styles.iconCommon]} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 24,
    width: "100%",
    flex: 1,
  },
  iconRow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
  },
  iconCommon: {
    position: "absolute",
    width: "6.86%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  leftIcon: {
    position: "absolute",
    left: 16,
    top: 0,
    width: 24,
    height: 24,
  },

  centerIcon: {
    position: "absolute",
    right: 16, // 또는 right: 16 으로 바꿔도 됨
    top: 0,
    width: 24,
    height: 24,
  },

  rightIcon: {
    position: "absolute",
    left: 310,
    top: 0,
    width: 24,
    height: 24,
    right: 16,
  },
});

export default TopBar;
