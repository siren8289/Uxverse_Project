// src/screens/components/Community.jsx
import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const ROW_GAP = 12; // 줄 간격
const DATE_W = 92; // 날짜 칼럼 폭 (원하는 폭으로 조절)
const FONT = "NotoSansKR-Medium";

const DATA = [
  {
    id: "1",
    date: "2025.06.30",
    text: "혼자 쓰기 딱 좋은 의류관리기! 같이 사길 잘했어요.",
  },
  {
    id: "2",
    date: "2025.07.03",
    text: "전기포트 하나로 커피+계란 삶기까지 OK",
  },
  {
    id: "3",
    date: "2025.07.14",
    text: "렌탈은 기간보다 A/S 조건을 꼭 확인하세요!",
  },
];

export default function Community({ items = DATA }) {
  return (
    <View style={styles.wrap}>
      {items.map((it) => (
        <View key={it.id} style={styles.row}>
          <Text style={styles.date}>{it.date}</Text>
          <Text style={styles.text} numberOfLines={1}>
            {it.text}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: ROW_GAP, // 줄과 줄 사이 22px
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 22, // 라인하이트와 맞춤
  },
  date: {
    width: DATE_W,
    fontFamily: FONT,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 22,
    color: "#1B1B1B",
    textAlign: "left",
  },
  text: {
    flex: 1,
    fontFamily: FONT,
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 22,
    color: "#1B1B1B",
    textAlign: "left", // 가운데 정렬 아니고 왼쪽 정렬
  },
});
