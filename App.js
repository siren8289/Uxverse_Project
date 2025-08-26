// App.js
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import RentalSharingService from "./pages/Rental_sharing_service.js";
import Nav from "./src/components/Nav.js";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 메인 화면 */}
      <RentalSharingService />

      {/* Nav를 하단에 고정 */}
      <View style={styles.navWrap}>
        <Nav
          state={{ index: 0, routes: [] }}
          descriptors={{}}
          navigation={{ navigate: () => { } }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  navWrap: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
  },
});
