// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet, Text } from "react-native";
import TopBar from "./src/components/TopBar_1"; // 네비게이션 바
// 새로운 컴포넌트를 여기서 추가할 수도 있음

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TopBar />
        <View style={styles.content}>
          <Text style={styles.text}>여기는 메인 콘텐츠 영역입니다.</Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
