import React from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import ProgressStatusBar from "./components/ProgressStatusBar";
import ProductHeader from "./components/ProductHeader";
import DescriptionSection from "./components/DescriptionSection";
import ReviewsSection from "./components/ReviewsSection";
import RelatedProducts from "./components/RelatedProducts";
import BottomActions from "./components/BottomActions";

const Color = { colorGray100: "#FFFFFF" };
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function GroupPurchaseDetail() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {/* 📌 뒤로가기 버튼 */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { minHeight: SCREEN_HEIGHT * 1.5 },
        ]}
        showsVerticalScrollIndicator={true}
      >
        <ProgressStatusBar />
        <ProductHeader />
        <DescriptionSection />
        <ReviewsSection />
        <RelatedProducts />
        <BottomActions />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray100,
  },
  backBtn: {
    position: "absolute",
    top: 50, // SafeArea 때문에 조금 내려주면 돼요
    left: 15,
    zIndex: 100, // 스크롤뷰 위로 올림
    padding: 10,
  },
  backText: {
    fontSize: 20,
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
});
