// src/components/ProductInfo.js
import React from "react";
import { View, Text, StyleSheet, Dimensions, PixelRatio } from "react-native";

// ===== px 변환 유틸 =====
const BASE_WIDTH = 375; // 디자인 기준 가로 px (Figma나 Zeplin 시안 기준)
const px = (size) => {
  const { width } = Dimensions.get("window");
  const scale = width / BASE_WIDTH;
  return PixelRatio.roundToNearestPixel(size * scale);
};

// ===== 글로벌 스타일 =====
const FontFamily = {
  notoSansKRMedium: "NotoSansKRMedium",
};
const Color = {
  colorGray: "#1b1b1b",
  colorDimgray: "#5a5a5a",
};

// ===== 합쳐진 컴포넌트 =====
/**
 * ProductInfo
 * @param {string} title   - 제품명 (기본: "캠핑용 텐트 1~2인용")
 * @param {string} price   - 가격 (기본: "20,000원")
 * @param {string} address - 주소 (기본: "서울시 관악구 신림역")
 */
const ProductInfo = ({
  title = "캠핑용 텐트 1~2인용",
  price = "20,000원",
  address = "서울시 관악구 신림역",
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
};

// ===== 스타일 =====
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: px(8),
    paddingHorizontal: px(12),
  },
  title: {
    width: "100%",
    fontSize: px(16),
    lineHeight: px(24),
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
    overflow: "hidden",
  },
  price: {
    width: "100%",
    fontSize: px(18),
    lineHeight: px(24),
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
    overflow: "hidden",
    marginTop: px(4),
  },
  address: {
    width: "100%",
    fontSize: px(12),
    lineHeight: px(24),
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDimgray,
    textAlign: "left",
    marginTop: px(2),
  },
});

export default ProductInfo;
