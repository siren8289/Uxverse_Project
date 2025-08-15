import React from "react";
import { View, Text, StyleSheet } from "react-native";

/* Fonts */
const FontFamily = {
  notoSansMedium: "NotoSansMedium",
  notoSansKRMedium: "NotoSansKRMedium",
};
/* Font sizes */
const FontSize = {
  size_12: 12,
};
/* Colors */
const Color = {
  colorGainsboro: "#d9d9d9",
  colorGray: "#949393",
};

const Group123219 = () => {
  return (
    <View style={styles.box}>
      {/* 안내 문구 영역 */}
      <View style={styles.content}>
        <Text style={styles.p}>
          본인 연락처, 계좌번호 등 개인정보 입력 시 등록이 제한될 수 있어요.
        </Text>
        <Text style={styles.p}>
          거래 목적 외의 링크, 광고 문구 등은 삭제될 수 있어요.
        </Text>
      </View>

      {/* 글자 수 카운터 */}
      <View style={styles.counterWrap}>
        <Text style={styles.counter}>0/2000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 350,
    minHeight: 150, // 시안에 맞게 높이 고정하려면 height: 150
    borderRadius: 10,
    backgroundColor: Color.colorGainsboro,
    paddingHorizontal: 16,
    paddingVertical: 14,
    position: "relative",
  },
  content: {
    gap: 8, // RN 0.71+ 지원, gap 대신 marginBottom 사용 가능
  },
  p: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: FontSize.size_12,
    lineHeight: 18, // 기존 24 → 줄 간격 축소
    color: Color.colorGray,
    fontWeight: "500",
    textAlign: "left",
    // marginBottom: 8, // gap 미지원이면 이 줄 사용
  },
  counterWrap: {
    position: "absolute",
    right: 10,
    bottom: 8,
  },
  counter: {
    fontFamily: FontFamily.notoSansMedium,
    fontSize: 10,
    color: Color.colorGray,
    lineHeight: 12,
  },
});

export default Group123219;
