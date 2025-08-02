// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet } from "react-native";
import ButtonRegister from "./src/components/Button_Register"; // 경로는 실제 위치에 맞게 조정

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ButtonRegister />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // 화면 가운데에 배치
    alignItems: "center",
  },
});
