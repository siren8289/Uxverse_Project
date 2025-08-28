// components/HomeImage.js
import React, { useState } from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import Banner1 from "../assets/banner1.svg";
import Banner2 from "../assets/banner2.svg";
import Banner3 from "../assets/banner3.svg";

const MARGIN = 20; // 좌우 여백
const GUTTER = 12; // 카드 간 간격
const PEEK = 24; // 다음 카드가 보이는 양(오른쪽을 더 또렷하게)

const { width } = Dimensions.get("window");

// 10단위 반올림 함수
const round10 = (n) => Math.round(n / 10) * 10;

// ---- 카드 크기 계산 ----
const MAX_CARD_WIDTH = 300; // 너무 넓어지지 않게 상한(290~310 사이 미세조정 가능)
const HEIGHT_RATIO = 0.615; // 세로 비율 (스크린샷 감으로 맞춤)

const rawCardWidth = width - MARGIN * 2 - PEEK;
const CARD_WIDTH = Math.min(round10(rawCardWidth), MAX_CARD_WIDTH);
const CARD_HEIGHT = Math.round(CARD_WIDTH * HEIGHT_RATIO);
const SNAP = CARD_WIDTH + GUTTER;
// -----------------------

const BANNERS = [
  { id: "1", Component: Banner1 },
  { id: "2", Component: Banner2 },
  { id: "3", Component: Banner3 },
];

export default function HomeImage() {
  const [index, setIndex] = useState(0);

  // 스크롤 끝에서 인덱스 계산(튀는 현상 방지)
  const onMomentumScrollEnd = (e) => {
    const i = Math.round(e.nativeEvent.contentOffset.x / SNAP);
    if (i !== index) setIndex(i);
  };

  const renderItem = ({ item }) => {
    const Banner = item.Component;
    return (
      <View style={styles.card}>
        {/* SVG는 숫자 크기 지정이 안정적 */}
        <Banner
          width={CARD_WIDTH}
          height={CARD_HEIGHT}
          preserveAspectRatio="xMidYMid slice" // cover 느낌
        />

        {/* 하단 도트 */}
        <View style={styles.dotsInside}>
          {BANNERS.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === index && styles.dotActive]}
            />
          ))}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={BANNERS}
      keyExtractor={(it) => it.id}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={SNAP}
      snapToAlignment="start"
      decelerationRate="fast"
      contentContainerStyle={{ paddingLeft: MARGIN, paddingRight: MARGIN }}
      ItemSeparatorComponent={() => <View style={{ width: GUTTER }} />}
      getItemLayout={(_, i) => ({ length: SNAP, offset: SNAP * i, index: i })}
      onMomentumScrollEnd={onMomentumScrollEnd}
      scrollEventThrottle={16}
      ListFooterComponent={<View style={{ width: PEEK }} />}
    />
  );
}

const DOT = 6;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10, // 살짝 더 둥글게
    overflow: "hidden",
    backgroundColor: "#eee",
    position: "relative",
    // iOS 그림자
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // Android 그림자
    elevation: 3,
  },
  dotsInside: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  dot: {
    width: DOT,
    height: DOT,
    borderRadius: DOT / 2,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  dotActive: {
    backgroundColor: "#fff",
  },
});
