// src/components/ProductInfo.js
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

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
 * - compact: true일 때 더 촘촘한 라인/간격 사용
 */
const ProductInfo = ({
  title = "캠핑용 텐트 1~2인용",
  price = "20,000원",
  address = "서울시 관악구 신림역",
  order = ["title", "price", "address"],
  compact = true,
  titleStyle,
  priceStyle,
  addressStyle,
  containerStyle,
}) => {
  const valid = ["title", "price", "address"];
  const seq = (Array.isArray(order) ? order : ["title", "price", "address"]).filter(
    (k) => valid.includes(k)
  );

  // 촘촘/보통 모드 라인하이트와 간격
  const LH = compact
    ? { title: 19, price: 21, address: 15, gap: 4 }  // fontSize보다 +2~3
    : { title: 22, price: 24, address: 18, gap: 8 };

  const androidTrim = Platform.OS === "android" ? { includeFontPadding: false } : null;

  const parts = {
    title: (
      <Text
        key="title"
        style={[
          styles.title,
          { lineHeight: LH.title },
          androidTrim,
          titleStyle,
        ]}
        numberOfLines={2}
      >
        {title}
      </Text>
    ),
    price: (
      <Text
        key="price"
        style={[
          styles.price,
          { lineHeight: LH.price },
          androidTrim,
          priceStyle,
        ]}
      >
        {price}
      </Text>
    ),
    address: (
      <Text
        key="address"
        style={[
          styles.address,
          { lineHeight: LH.address },
          androidTrim,
          addressStyle,
        ]}
        numberOfLines={1}
      >
        {address}
      </Text>
    ),
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {seq.map((k, i) => (
        <View key={k} style={i > 0 ? { marginTop: LH.gap } : null}>
          {parts[k]}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 0,
    paddingVertical: 6, // 세로 여백도 살짝만
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  address: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDimgray,
    textAlign: "left",
  },
});

export default ProductInfo;
