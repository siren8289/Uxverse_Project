import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LeftIcon from "./assets/Left.svg";
import CenterIcon from "./assets/Search.svg";
import RightIcon from "./assets/Cart.svg";

const TopNavigationBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fullWidth}>
        <View style={styles.iconGroup}>
          <View style={styles.iconWrapper}>
            <LeftIcon style={[styles.leftIcon, styles.iconCommon]} />
            <RightIcon style={[styles.rightIcon, styles.iconCommon]} />
            <CenterIcon style={[styles.centerIcon, styles.iconCommon]} />
          </View>
          <View style={styles.titleWrapper}>
            <Text style={[styles.titleText, styles.absolutePosition]}>
              렌탈/공유
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullWidth: {
    width: "100%",
    flex: 1,
  },
  iconGroup: {
    paddingHorizontal: 24, // 기존 138 → 일반적인 padding 값으로 조정
    height: 24,
    flexDirection: "column",
    gap: 10,
  },
  iconWrapper: {
    width: 350,
    height: 24,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  iconCommon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  leftIcon: {
    left: 16, // 적당한 좌측 여백
  },
  centerIcon: {
    right: 10, // 우측 정렬
  },
  rightIcon: {
    left: 350, // 중앙보다 오른쪽 위치 (화면 크기에 따라 조정 필요)
  },
  titleWrapper: {
    height: 24,
    width: 74,
    zIndex: 1,
  },
  titleText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "System",
    color: "#333333",
    textAlign: "center",
  },
  absolutePosition: {
    position: "absolute",
    top: 0,
    left: 138,
  },
});

export default TopNavigationBar;
