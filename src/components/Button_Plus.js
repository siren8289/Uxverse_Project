import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Frame from "./assets/Plus.svg";

const { width: screenWidth } = Dimensions.get("window");

const IconButton = ({
  onPress,
  isLoading = false,
  disabled = false,
  text = "등록하기",
  style,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 배경 */}
        <View style={styles.fillArea}>
          <View style={styles.buttonBackground} />
        </View>

        {/* 버튼 */}
        <TouchableOpacity
          style={[styles.buttonWrapper, style]}
          activeOpacity={0.8}
          onPress={onPress}
          disabled={disabled || isLoading}
        >
          <View style={styles.buttonInner}>
            {isLoading ? (
              <ActivityIndicator color="#FBFBFB" />
            ) : (
              <View style={styles.iconTextRow}>
                <Frame style={styles.icon} width={24} height={24} />
                <Text style={styles.buttonText}>{text}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 46,
  },
  fillArea: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: 46,
    alignItems: "center",
  },
  buttonBackground: {
    width: 114,
    height: 46,
    borderRadius: 100,
    backgroundColor: "#FF736D",
  },
  buttonWrapper: {
    width: 98,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInner: {
    width: 98,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "System",
    color: "#FBFBFB",
  },
});

export default IconButton;
