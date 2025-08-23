// screens/HomeScreen.js
import React, { useMemo } from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TopLogo from "./components/Top_logo";
import HomeImage from "./components/Home_image";
import Search from "./components/Search";
import Bar from "./components/Bar";
import Community from "./components/Community";
import ProductCard from "./components/ProductCard";

import P1 from "./assets/p1.svg";
import P2 from "./assets/p2.svg";
import P3 from "./assets/p3.svg";
import R1 from "./assets/r1.svg";
import R2 from "./assets/r2.svg";
import R3 from "./assets/r3.svg";

/** 공통 간격 */
const SPACING = 22; // 섹션/좌우 여백
const MARGIN = SPACING;
const GUTTER = SPACING;

/** 카드/리스트 토큰 (피그마 스펙 반영) */
const CARD_W = 119.36; // 카드 폭(=이미지 폭)
const IMAGE_TEXT_GAP = 12;
const TEXT_H = 56;
const CARD_H = Math.ceil(CARD_W + IMAGE_TEXT_GAP + TEXT_H); // = 188
const CARD_GAP = 24; // 카드 사이 간격
const SNAP = CARD_W + CARD_GAP;
const PEEK = MARGIN;

const GROUPBUY = [
  {
    id: "g1",
    svg: P1,
    discount: 30,
    price: 4000,
    title: "다용도 가위",
    left: 5,
  },
  {
    id: "g2",
    svg: P2,
    discount: 40,
    price: 7500,
    title: "실리콘 접이식 채반",
    left: 5,
  },
  {
    id: "g3",
    svg: P3,
    discount: 25,
    price: 54000,
    title: "미니 전기포트",
    left: 5,
  },
];

const RENTAL = [
  { id: "r1", svg: R1, discount: 12, price: 8900, title: "전동 드릴", left: 3 },
  {
    id: "r2",
    svg: R2,
    discount: 20,
    price: 12900,
    title: "무선 청소기",
    left: 7,
  },
  {
    id: "r3",
    svg: R3,
    discount: 10,
    price: 5900,
    title: "레이저 거리측정기",
    left: 11,
  },
];

export default function HomeScreen() {
  const getItemLayout = useMemo(
    () => (_d, i) => ({ length: SNAP, offset: SNAP * i, index: i }),
    []
  );

  // ✅ 공동구매: 퍼센트 표시 + 'n명 남음' 문구
  const renderGroupCard = ({ item }) => (
    <View style={{ width: CARD_W }}>
      <ProductCard
        {...item}
        cardWidth={CARD_W}
        imageSize={CARD_W}
        showDiscount
        location={
          typeof item.left === "number"
            ? `${item.left}명 남음`
            : "위치 정보 없음"
        }
      />
    </View>
  );

  // ✅ 렌탈: 퍼센트 숨김 (문구는 기본값 유지)
  const renderRentalCard = ({ item }) => (
    <View style={{ width: CARD_W }}>
      <ProductCard
        {...item}
        cardWidth={CARD_W}
        imageSize={CARD_W}
        showDiscount={false}
      />
    </View>
  );

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TopLogo />
        <HomeImage />
        <Search />

        {/* 공동구매 */}
        <Bar title="공동구매 추천" />
        <FlatList
          horizontal
          style={{ height: CARD_H }}
          data={GROUPBUY}
          keyExtractor={(it) => it.id}
          renderItem={renderGroupCard}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={false}
          ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
          contentContainerStyle={{ paddingLeft: MARGIN, paddingRight: MARGIN }}
          snapToInterval={SNAP}
          snapToAlignment="start"
          decelerationRate="fast"
          ListFooterComponent={<View style={{ width: PEEK }} />}
          getItemLayout={getItemLayout}
        />

        {/* 렌탈공유 */}
        <Bar title="렌탈공유 추천" />
        <FlatList
          horizontal
          style={{ height: CARD_H }}
          data={RENTAL}
          keyExtractor={(it) => it.id}
          renderItem={renderRentalCard}
          showsHorizontalScrollIndicator={false}
          removeClippedSubviews={false}
          ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
          contentContainerStyle={{ paddingLeft: MARGIN, paddingRight: MARGIN }}
          snapToInterval={SNAP}
          snapToAlignment="start"
          decelerationRate="fast"
          ListFooterComponent={<View style={{ width: PEEK }} />}
          getItemLayout={getItemLayout}
        />

        <Bar title="커뮤니티 인기글" />
        <Community />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: {
    paddingHorizontal: MARGIN,
    paddingTop: GUTTER,
    paddingBottom: 100,
    gap: GUTTER,
  },
});
