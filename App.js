// App.js
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ListingCard from "./src/components/ListingCard"; // 경로 확인 필수

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <ListingCard
          price="7,000원"
          title="캠핑용 조명 랜턴"
          location="서울 마포구"
        />
        <ListingCard
          price="12,000원"
          title="접이식 캠핑 체어"
          location="부산 해운대구"
        />
      </ScrollView>
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
