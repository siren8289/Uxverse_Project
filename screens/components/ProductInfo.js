// src/components/ProductInfo.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// 폰트와 색상 정의
const FontFamily = {
  notoSansKRMedium: "NotoSansKRMedium",
};

const Color = {
  colorGray: "#1b1b1b",
  colorDimgray: "#5a5a5a",
};

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 0,  // ← 좌/우 여백 제거(부모에서 통일)
    paddingVertical: 10,   // 세로만 유지
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  price: {
    marginTop: 4,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  address: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 18, // 12pt 텍스트에 어울리는 라인하이트
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDimgray,
    textAlign: "left",
  },
});

export default ProductInfo;
