import React from "react";
import { Text, StyleSheet, View } from "react-native";

// 폰트와 색상 정의
const FontFamily = {
  notoSansKRMedium: "NotoSansKRMedium",
};

const Color = {
  colorGray: "#1b1b1b",
  colorDimgray: "#5a5a5a",
};

const ProductLabel = () => {
  return (
    <View style={styles.container}>
      {/* 제품 설명 레이블 */}
      <Text style={styles.label}>제품 설명</Text>

      {/* 제품 상세 설명 */}
      <Text style={styles.description}>
        미니민 원터치 1~2인용 캠핑 텐트입니다. 가볍고 설치가 쉬워 초보자도 3분 이내에 설치할 수 있어
        간편하게 사용할 수 있습니다. 방수효과도 좋고 튼튼한 제품입니다.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300, // 필요에 따라 px 단위로 조절 가능
    padding: 10,
  },
  label: {
    width: 300,
    height: 24, // 텍스트 높이에 맞춤
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorGray,
    textAlign: "left",
    overflow: "hidden",
  },
  description: {
    width: 300,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.notoSansKRMedium,
    color: Color.colorDimgray,
    textAlign: "left",
    marginTop: 8,
  },
});

export default ProductLabel;
