// src/Home/HomeScreen.js
import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

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

const { height: SCREEN_H } = Dimensions.get("window");

/** ─── 레이아웃 토큰 ───────────────────────────────────────── */
const SPACING = 20;
const MARGIN = SPACING;
const GUTTER = SPACING;

const CARD_W = 119.36;
const IMAGE_TEXT_GAP = 12;
const TEXT_H = 56;
const CARD_H = Math.ceil(CARD_W + IMAGE_TEXT_GAP + TEXT_H); // 188
const CARD_GAP = 24;
const SNAP = CARD_W + CARD_GAP;
const PEEK = MARGIN;

/** ─── 더미 데이터 ─────────────────────────────────────────── */
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
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const getItemLayout = useMemo(
    () => (_d, i) => ({ length: SNAP, offset: SNAP * i, index: i }),
    []
  );

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
        onPress={() =>
          navigation.navigate("GroupPurchaseDetail", {
            id: item.id,
            title: item.title,
            price: item.price,
            discount: item.discount,
            left: item.left,
          })
        }
      />
    </View>
  );

  const renderRentalCard = ({ item }) => (
    <View style={{ width: CARD_W }}>
      <ProductCard
        {...item}
        cardWidth={CARD_W}
        imageSize={CARD_W}
        showDiscount={false}
        onPress={() =>
          navigation.navigate("RentalSharingDetail", {
            id: item.id,
            title: item.title,
            price: item.price,
            discount: item.discount,
          })
        }
      />
    </View>
  );

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.content,
          {
            // ✅ 스크롤이 항상 가능하도록(콘텐츠가 짧아도)
            minHeight: SCREEN_H - insets.top - insets.bottom + 1,
            paddingBottom: insets.bottom + 120, // 하단 여유 넉넉히
          },
        ]}
        showsVerticalScrollIndicator={true} // ✅ 스크롤바 보이기
        scrollEventThrottle={16}
      >
        <TopLogo />

        {/* ⚠️ HomeImage가 배경형이면 내부에서 absolute일 때
            부모 레이어를 덮지 않도록 pointerEvents 조정 필요 */}
        <HomeImage />

        {/* 🔍 Search + Bar 묶음 */}
        <View style={{ gap: 8 /* 원하는 값 */ }}>
          <Search />
          <Bar
            title="공동구매 추천"
            onPress={() => navigation.navigate("GroupPurchaseList")}
          />
        </View>

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

        <Bar
          title="렌탈공유 추천"
          onPress={() => navigation.navigate("RentalSharingList")}
        />

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

        <Bar title="커뮤니티 인기글" onPress={() => {}} />
        <Community />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },
  content: {
    paddingHorizontal: MARGIN,
    paddingTop: 20,
    gap: GUTTER,
    // paddingBottom는 런타임에서 insets로 보강
  },
});
