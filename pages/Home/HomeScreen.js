// pages/Home/HomeScreen.js
import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// ✅ API 훅
import { useProductsList } from "../../src/api/products";

// UI 컴포넌트
import TopLogo from "./components/Top_logo";
import HomeImage from "./components/Home_image";
import Search from "./components/Search";
import Bar from "./components/Bar";
import Community from "./components/Community";
import ProductCard from "./components/ProductCard";

// 아이콘(SVG) — 목록 썸네일 대용으로 순환 사용
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

export default function HomeScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  // ✅ 1) 서버에서 목록 가져오기
  const { data, isLoading, isError, refetch, isFetching } = useProductsList({
    page: 1,
    size: 24,
    sort: "latest",
  });

  const items = data?.items ?? [];

  // 👇 추가: 할인율 계산 (서버 값 우선 → 없으면 originalPrice로 계산)
  const calcDiscount = (it) => {
    if (Number.isFinite(it.discount)) return Math.round(it.discount);
    if (Number.isFinite(it.discountRate)) return Math.round(it.discountRate);
    if (
      Number.isFinite(it.originalPrice) &&
      Number.isFinite(it.price) &&
      it.originalPrice > 0
    ) {
      const rate = (1 - it.price / it.originalPrice) * 100;
      return Math.max(0, Math.round(rate));
    }
    return 0;
  };

  // ✅ 2) 카드 프롭 어댑트
  const groupIcons = [P1, P2, P3];
  const rentalIcons = [R1, R2, R3];

  const FALLBACK_DISCOUNTS = [30, 40, 25]; // 순환 기본 퍼센트
  const FALLBACK_LEFT = 5; // 기본 남은 인원

  const GROUPBUY = useMemo(
    () =>
      items
        .filter((it) => it.type === "group")
        .map((it, idx) => {
          // 할인율: 응답 값(혹은 originalPrice로 계산)이 0이면 기본값으로 보정
          const computed = calcDiscount(it);
          const discount =
            computed && Number.isFinite(computed)
              ? computed
              : FALLBACK_DISCOUNTS[idx % FALLBACK_DISCOUNTS.length];

          // 남은 인원: left 있으면 사용, 없으면 target-joined, 그것도 없으면 기본값
          const left = Number.isFinite(it.left)
            ? it.left
            : Number.isFinite(it.target) && Number.isFinite(it.joined)
            ? Math.max(0, it.target - it.joined)
            : FALLBACK_LEFT;

          return {
            id: String(it.id),
            svg: groupIcons[idx % groupIcons.length],
            discount, // ← 퍼센트(항상 값 들어가게)
            price: it.price,
            title: it.title,
            left, // ← n명 남음(항상 값 들어가게)
          };
        }),
    [items]
  );
  const RENTAL = useMemo(
    () =>
      items
        .filter((it) => it.type === "rental")
        .map((it, idx) => ({
          id: String(it.id),
          svg: rentalIcons[idx % rentalIcons.length],
          discount: 0,
          price: it.price,
          title: it.title,
          left: undefined,
        })),
    [items]
  );

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
        showDiscount={true} // ← 퍼센트 노출
        location={
          Number.isFinite(item.left) ? `${item.left}명 남음` : "위치 정보 없음"
        }
        onPress={() =>
          navigation.navigate("GroupPurchaseDetail", { id: item.id })
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
            id: item.id, // 상세에서 fetch
          })
        }
      />
    </View>
  );

  // ✅ 로딩/에러 처리
  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (isError) {
    return (
      <SafeAreaView edges={["bottom"]} style={styles.container}>
        <ScrollView
          contentContainerStyle={[styles.content, { minHeight: SCREEN_H }]}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.content,
          {
            minHeight: SCREEN_H - insets.top - insets.bottom + 1,
            paddingBottom: insets.bottom + 120,
          },
        ]}
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
      >
        <TopLogo />
        <HomeImage />

        {/* 🔍 Search + Bar 묶음 */}
        <View style={{ gap: 8 }}>
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
  },
});
