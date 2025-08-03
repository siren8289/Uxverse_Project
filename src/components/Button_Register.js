import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SubmitButton = ({
  onPress,
  isLoading = false,
  disabled = false,
  text = "등록하기",
  style,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled || isLoading}
          activeOpacity={0.8}
          style={[styles.buttonContainer, styles.buttonSize, style]}
        >
          <View style={[styles.buttonBackground, styles.buttonSize]}>
            <View
              style={[
                styles.buttonFill,
                { backgroundColor: disabled ? "#aaa" : "#FF736D" },
              ]}
            />
          </View>
          <View style={styles.textWrapper}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#FBFBFB" />
            ) : (
              <Text style={styles.buttonText}>{text}</Text>
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
    width: 390,
    flex: 1,
    alignItems: "center", // 가운데 정렬
    justifyContent: "center",
  },
  buttonContainer: {
    paddingHorizontal: 130,
    paddingVertical: 20,
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
    borderRadius: 100,
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
