import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import GroupPurchaseDetail from "./pages/purchase_detail";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GroupPurchaseDetail />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
