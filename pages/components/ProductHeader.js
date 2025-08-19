// components/ProductHeader.js
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Line10 from "../assets/line-10.svg";
import Line14 from "../assets/line-14.svg";
import Shareicon from "../assets/share-icon.svg";
import Hearticon from "../assets/heart-icon.svg";

const Color = {
  colorGray100: "#FFFFFF",
  colorGray200: "#333333",
  colorDimgray: "#666666",
  colorDarkslategray100: "#2F4F4F",
  colorDarkslategray200: "#4F5B62",
  colorGainsboro200: "#D9D9D9",
  colorSalmon: "#FF7F7F",
};
const Border = { br_10: 10 };
const FontFamily = { notoSansKRMedium: "NotoSansKR-Medium" };
const Padding = { p_8: 8, p_10: 10 };
const FontSize = { size_12: 12, size_14: 14 };

const ProductHeader = () => {
  return (
    <View style={styles.container}>
      {/* 진행 바 */}
      <View style={[styles.child, styles.itemLayout]} />
      <View style={[styles.item, styles.itemLayout]} />

      {/* 진행/라벨 텍스트 */}
      <Text style={[styles.text, styles.textTypo1]}>10/15</Text>
      <Text style={[styles.text1, styles.textTypo1]}>70%</Text>
      <Text style={[styles.text2, styles.textTypo1]}>참가한 인원</Text>

      {/* 상단 라인 & 하단 라인 */}
      <Line14 style={[styles.lineIcon, styles.iconPosition]} width={350} />
      <Line10 style={styles.inner} width={349} />

      {/* 참여자/남은기간 뱃지 */}
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <Text style={[styles.text3, styles.textClr]}>홍**</Text>
      </View>
      <View style={[styles.containerBadge, styles.wrapperPosition]}>
        <Text style={[styles.text4, styles.textTypo1]}>
          <Text style={styles.text5}>{`4일 `}</Text>
          <Text style={styles.text6}>남음</Text>
        </Text>
      </View>

      {/* 액션 아이콘 */}
      <Shareicon style={styles.shareIcon} width={22} height={24} />
      <Hearticon style={styles.heartIcon} width={24} height={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // 상위(detail)에서 absolute로 배치된 다른 요소들과 겹치지 않게
    // 이 컴포넌트 자체는 레이아웃을 잡지 않고, 내부 children이 절대 좌표로 배치됩니다.
    flex: 0,
  },

  /** 기존 스타일 일부 그대로 복사 */
  itemLayout: {
    height: 7,
    top: 563,
    borderRadius: Border.br_10,
    position: "absolute",
  },
  child: {
    left: 27,
    backgroundColor: Color.colorDarkslategray200,
    width: 338,
  },
  item: {
    width: 200,
    backgroundColor: Color.colorSalmon,
    left: 20,
  },

  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  text: {
    top: 572,
    width: 40,
    height: 20,
    color: Color.colorDimgray,
    lineHeight: 24,
    fontSize: FontSize.size_12,
    left: 20,
    position: "absolute",
  },
  text1: {
    top: 534,
    left: 342,
    width: 28,
    height: 23,
    color: Color.colorDimgray,
    lineHeight: 24,
    fontSize: FontSize.size_12,
    position: "absolute",
  },
  text2: {
    top: 533,
    width: 75,
    fontSize: FontSize.size_14,
    color: Color.colorDimgray,
    lineHeight: 24,
    left: 20,
    position: "absolute",
  },

  iconPosition: {
    width: 350,
    left: 20,
    position: "absolute",
  },
  lineIcon: {
    top: 616,
    width: 350,
    maxHeight: "100%",
  },
  inner: {
    top: 658,
    width: 349,
    maxHeight: "100%",
    left: 20,
    position: "absolute",
  },

  wrapperPosition: {
    paddingBottom: Padding.p_10,
    paddingTop: Padding.p_8,
    paddingHorizontal: Padding.p_10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 616,
    position: "absolute",
  },
  text3: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray100,
    lineHeight: 24,
    fontSize: FontSize.size_12,
  },
  textClr: {
    color: Color.colorDarkslategray100,
    textAlign: "left",
  },
  wrapper: {
    left: 21,
  },
  containerBadge: {
    left: 246,
  },
  text4: {
    lineHeight: 24,
    fontSize: FontSize.size_12,
    textAlign: "left",
  },
  text5: { color: Color.colorSalmon },
  text6: { color: Color.colorDarkslategray200 },

  shareIcon: {
    left: 348,
    width: 22,
    height: 24,
    top: 445,
    position: "absolute",
    overflow: "hidden",
  },
  heartIcon: {
    left: 306,
    top: 445,
    position: "absolute",
    width: 24,
    height: 24,
  },
});

export default ProductHeader;
