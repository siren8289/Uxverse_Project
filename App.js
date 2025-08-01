// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TopBar from "./src/components/TopBar_0";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TopBar />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
