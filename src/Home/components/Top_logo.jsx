import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Frame521 from "../assets/Cart.svg"; // 장바구니
import Vector from "../assets/Bell.svg"; // 종
import MinimoLogo from "../assets/Minimo.svg"; // 로고

const TopLogo = () => {
  return (
    <SafeAreaView style={styles.topLogo}>
      <View style={styles.container}>
        {/* 왼쪽 로고 */}
        <MinimoLogo width={82} height={24} />

        {/* 중간 Spacer → 로고와 아이콘 사이 간격 확보 */}
        <View style={styles.spacer} />

        {/* 오른쪽 아이콘 그룹 */}
        <View style={styles.rightIcons}>
          <Vector width={20} height={20} />
          <Frame521 width={22} height={22} style={styles.iconGap} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topLogo: {
    height: 56,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 0, // Figma margin
    paddingRight: 20, // Figma margin
  },
  spacer: {
    padding: 100, // ← 이게 자동으로 중간 공간 확보
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconGap: {
    marginLeft: 16, // 아이콘 간격
  },
});

export default TopLogo;
