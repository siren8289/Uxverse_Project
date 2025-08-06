import React from "react";
import { SafeAreaView } from 'react-native';


import GroupPurchase from "./screens/GroupPurchase";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GroupPurchase />
    </SafeAreaView>
  );
}
