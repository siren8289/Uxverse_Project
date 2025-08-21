import React from "react";
import { StyleSheet, View } from "react-native";

import ProgressStatusBar from "./components/ProgressStatusBar";
import ProductHeader from "./components/ProductHeader";
import DescriptionSection from "./components/DescriptionSection";
import ReviewsSection from "./components/ReviewsSection";
import RelatedProducts from "./components/RelatedProducts";
import BottomActions from "./components/BottomActions";

const Color = { colorGray100: "#FFFFFF" };

const GroupPurchaseDetail = () => {
  return (
    <View style={styles.groupPurchaseDetail}>
      <View style={styles.view}>
        <ProgressStatusBar />
        <ProductHeader />
        <DescriptionSection />
        <ReviewsSection />
        <RelatedProducts />
        <BottomActions />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPurchaseDetail: { backgroundColor: Color.colorGray100, flex: 1 },
  view: {
    height: 1352,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray100,
    flex: 1,
  },
});

export default GroupPurchaseDetail;
