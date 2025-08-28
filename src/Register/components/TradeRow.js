import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IconEllipse from "../../assets/ellipse-172.svg";
import IconCheck from "../../assets/Vector.svg";   // ✅ 체크 아이콘 (경로 주의)
import IconCheck2 from "../../assets/vector1.svg";
import IconCheck3 from "../../assets/vector2.svg";

const TradeRow = () => {
  return (
    <View style={s.container}>
      {/* 택배거래 */}
      <View style={s.row}>
        <View style={s.left}>
          {/* ✅ Ellipse 위에 Check를 덮어씌우기 */}
          <View style={s.iconWrap}>
            <IconEllipse width={18} height={18} />
            <IconCheck width={10} height={10} style={s.iconCheck} />
          </View>
          <Text style={s.label}>택배거래</Text>
        </View>
        <View style={s.pillWrap}>
          <View style={[s.pill, s.pillActive]}>
            <Text style={s.pillActiveText}>별도</Text>
          </View>
          <View style={s.pill}>
            <Text style={s.pillText}>포함</Text>
          </View>
        </View>
      </View>

      {/* 직거래 */}
      <View style={s.row}>
        <View style={s.left}>
          <IconCheck2 width={18} height={18} />
          <Text style={s.label}>직거래</Text>
        </View>
        <Text style={s.regionLink}>+ 지역설정</Text>
      </View>

      {/* 편의점 픽업 */}
      <View style={s.row}>
        <View style={s.left}>
          <IconCheck3 width={18} height={18} />
          <Text style={s.label}>편의점 픽업</Text>
        </View>
        <Text style={s.regionLink}>+ 지역설정</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: 350,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  /* ✅ 아이콘 겹침을 위한 래퍼 */
  iconWrap: {
    width: 18,
    height: 18,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCheck: {
    position: "absolute",
    zIndex: 2,             // Ellipse 위로
    // 중앙 정렬 (10x10 기준)
    top: 4,
    left: 4,
  },

  label: {
    fontSize: 14,
    lineHeight: 24,
    color: "#5a5a5a",
    fontFamily: "NotoSansKRMedium",
    fontWeight: "500",
  },
  regionLink: {
    fontSize: 12,
    color: "#949393",
    fontFamily: "NotoSansKRMedium",
  },

  pillWrap: {
    flexDirection: "row",
    gap: 8,
  },
  pill: {
    minWidth: 51,
    height: 30,
    borderRadius: 100,
    borderWidth: 0.8,
    borderColor: "#ff736d",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  pillText: {
    fontSize: 12,
    color: "#ff736d",
    fontFamily: "NotoSansKRMedium",
  },
  pillActive: {
    backgroundColor: "#ff736d",
  },
  pillActiveText: {
    fontSize: 12,
    color: "#fbfbfb",
    fontFamily: "NotoSansKRMedium",
  },
});

export default TradeRow;
