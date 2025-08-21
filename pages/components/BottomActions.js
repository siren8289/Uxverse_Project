import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Line26 from "../../assets/line-26.svg";
import Frame3 from "../../assets/frame3.svg";
import Arrowicon2 from "../../assets/arrow-icon2.svg";
import UnionBg from "../../assets/Union.png";

const Color = {
  colorSalmon: "#FF7F7F",
  colorGray100: "#FFFFFF",
};
const Border = { br_100: 100 };

const BottomActions = () => {
  return (
    <View style={styles.bottomWrap}>
      {/* 배경 (Union) */}
      <Image source={UnionBg} resizeMode="cover" style={styles.unionBg} />

      <Line26 style={[styles.divider, { zIndex: -1 }]} width={350} />
      {/* Line26 -> Union 뒤 쪽으로 이동 : zIndex: -1 */}

      {/* 버튼들 */}
      <View style={[styles.bigButton, styles.bigPosition]}>
        <View style={styles.childPosition}>
          <View style={[styles.bigButtonChild, styles.childPosition]} />
        </View>
      </View>
      <View style={[styles.bigButton2, styles.bigPosition]}>
        <View style={styles.childPosition}>
          <View style={[styles.bigButtonChild, styles.childPosition]} />
        </View>
      </View>

      {/* CTA 텍스트/아이콘 */}
      <Text style={styles.ctaText}>참여하기</Text>
      <Frame3 style={styles.ctaIcon} width={24} height={24} />
      <Arrowicon2 style={styles.arrowIcon2} width={8} height={8} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomWrap: {
    position: "absolute",
    top: 1202,
    left: 0,
    right: 0,
    height: 115,
  },
  unionBg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },

  divider: {
    top: 12,
    left: 26,
    width: 349,
    position: "absolute",
    maxHeight: "100%",
  },

  childPosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  bigButtonChild: {
    borderRadius: Border.br_100,
    backgroundColor: Color.colorSalmon,
  },
  bigPosition: {
    height: 62,
    top: 38,
    position: "absolute",
  },
  bigButton: { left: 111, width: 260 },
  bigButton2: { width: 79, left: 21 },

  ctaText: {
    left: 204,
    fontSize: 18,
    color: Color.colorGray100,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: 24,
    top: 57,
    position: "absolute",
  },
  ctaIcon: {
    left: 48,
    width: 24,
    height: 24,
    overflow: "hidden",
    top: 57,
    position: "absolute",
  },
  arrowIcon2: {
    top: 13,
    left: 198,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
});

export default BottomActions;
