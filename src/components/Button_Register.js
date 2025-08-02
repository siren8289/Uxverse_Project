import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SubmitButton = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={[styles.buttonContainer, styles.buttonSize]}>
          <View style={[styles.buttonBackground, styles.buttonSize]}>
            <View style={styles.buttonFill} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.buttonText}>등록하기</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: 390, // 아이폰 기준 전체 너비
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 130, // 기존 130 → 일반적인 버튼 마진
    paddingVertical: 20, // 22 → 정돈된 여백
    gap: 10,
  },
  buttonSize: {
    width: 350,
    height: 62,
  },
  buttonBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
  },
  buttonFill: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 350,
    height: 62,
    borderRadius: 100,
    backgroundColor: "#FF736D",
  },
  textWrapper: {
    width: 90,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "System",
    color: "#FBFBFB",
    textAlign: "center",
  },
});

export default SubmitButton;
