import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ListingCard from "./src/components/ListingCard"; // 경로 확인 필수

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RentalDetail" component={RentalDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
