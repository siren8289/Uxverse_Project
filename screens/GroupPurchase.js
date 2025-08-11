import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const PINK = "#FF736D";
const TEXT_DARK = "#1A1A1A";
const CHIP_BORDER = "#EDEDEF";
const CHIP_TEXT = "#2B2B2B";

const categories = ["인기순", "식품", "생활용품", "뷰티/미용", "디지털"];

// 이미지 경로: screens/assets/*
const IMAGES = {
  mango: require("./assets/mango.png"),
  gaji: require("./assets/gaji.png"),
  salmon: require("./assets/salmon.png"),
  kimchijeon: require("./assets/kimchijeon.png"),
  potato: require("./assets/potato.png"),
  bibimbab: require("./assets/bibimbab.png"),
};

const products = [
  { id: "1", discount: "28%", price: "24,900원", name: "애플망고 2kg", remain: "3명 남음", image: IMAGES.mango },
  { id: "4", discount: "23%", price: "9,900원", name: "바삭 김치전 밀키트", remain: "2명 남음", image: IMAGES.kimchijeon },
  { id: "2", discount: "18%", price: "4,500원", name: "국내산 가지 1kg", remain: "7명 남음", image: IMAGES.gaji },
  { id: "5", discount: "20%", price: "8,900원", name: "바삭 감자전 밀키트", remain: "5명 남음", image: IMAGES.potato },
  { id: "3", discount: "21%", price: "14,900원", name: "레몬 연어 밀키트", remain: "6명 남음", image: IMAGES.salmon },
  { id: "6", discount: "18%", price: "10,900원", name: "전통 비빔밥 밀키트", remain: "2명 남음", image: IMAGES.bibimbab },
];

export function GroupPurchase() {
  const tabBarHeight = useBottomTabBarHeight();
  const GAP = 4;
  const [activeCat, setActiveCat] = React.useState(1); // 기본: 식품

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단바 */}
      <View style={styles.topbar}>
        {/* 왼쪽: 뒤로가기 */}
        <TouchableOpacity style={styles.topBtn} hitSlop={8}>
          <Feather name="chevron-left" size={22} color={TEXT_DARK} />
        </TouchableOpacity>

        {/* 가운데: 제목(무조건 센터 정렬) */}
        <Text style={styles.topTitle}>공동구매</Text>

        {/* 오른쪽: 검색 / 장바구니 */}
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconBtn} hitSlop={8}>
            <Feather name="search" size={18} color={TEXT_DARK} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} hitSlop={8}>
            <Feather name="shopping-cart" size={18} color={TEXT_DARK} />
          </TouchableOpacity>
        </View>
      </View>
      <Chips activeIndex={activeCat} onSelect={setActiveCat} />

      {/* 상품 그리드 + 칩을 헤더로(한 줄만 렌더되게) */}
      <FlatList
        data={products}
        keyExtractor={(it) => it.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 22 }}
        // ⬇️ 탭바·FAB를 가리지 않도록 동적 패딩
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: tabBarHeight + 96 }}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            discount={item.discount}
            price={item.price}
            title={item.name}
            remain={item.remain}
          />
        )}
      />

      {/* 🔸 고정(Fixed) 제안하기 버튼: 하단 네비 바로 위 */}
      <TouchableOpacity style={[styles.fab, { bottom: tabBarHeight + GAP, right: 18 }]}>
        <Text style={styles.fabText}>+ 제안하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

/* 카테고리 칩 – 원본 톤 */
function Chips({ activeIndex = 1, onSelect = () => { } }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryScroll}
    >
      {categories.map((cat, i) => {
        const isPopular = i === 0; // 인기순
        const isActive = i === activeIndex;
        return (
          <TouchableOpacity
            key={cat}
            onPress={() => onSelect(i)}
            style={[
              styles.categoryBtn,
              isActive ? styles.activeBtn : (isPopular && styles.popularBtn),
            ]}
          >
            {isPopular && (
              <View style={styles.rankBadge}>
                <Text style={styles.rankText}>1↑</Text>
              </View>
            )}
            <Text
              style={[
                styles.categoryText,
                isActive ? styles.activeText : (isPopular && styles.popularText),
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

/* 카드 */
function Card({ image, title, price, discount, remain }) {
  const src = typeof image === "number" ? image : { uri: image };
  return (
    <View style={styles.card}>
      <View style={styles.imgWrap}>
        <Image source={src} style={styles.img} resizeMode="cover" />
        <Feather name="heart" size={22} color="#474747ff" style={styles.heartIcon} />
      </View>

      <View style={{ marginTop: 12 }}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={styles.discountText}>{discount}</Text>
          <Text style={styles.priceText}> {price}</Text>
        </View>
        <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
        <Text style={styles.remainText}>{remain}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* ── Topbar (원본처럼 중앙 정렬) ───────────────── */
  topbar: {
    height: 62,          // 56 → 68
    paddingTop: 6,      // 살짝 아래로
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    position: "relative",
  },
  topBtn: {
    width: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  topTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_DARK,
  },
  rightIcons: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    width: 72,                // 좌/우 밸런스 맞춰 제목이 정확히 중앙
    justifyContent: "flex-end",
  },
  iconBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  /* ── Chips (인기순/식품…) ─────────────────────── */
  categoryScroll: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 2,        // 제목과 간격 유지
    paddingBottom: 30,
  },

  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 34,
    borderRadius: 18,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: CHIP_BORDER,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 13,
    color: CHIP_TEXT,
    fontWeight: "600",
    includeFontPadding: false,   // 안드로이드 기준 하단 여백 제거
    textAlignVertical: "center", // 안드로이드에서 중앙정렬
    lineHeight: 16,              // 베이스 라인 보정
    marginTop: -1,               // ← 글자 살짝 위로(필요하면 -2까지)
  },
  // 인기순: 분홍 테두리 + 분홍 글자
  popularBtn: { backgroundColor: "#fff", borderColor: "#F8B3BA" },
  popularText: { color: PINK, fontWeight: "700" },
  activeBtn: { backgroundColor: PINK, borderColor: PINK },
  activeText: { color: "#fff", fontWeight: "700" },

  // ‘1↑’ 뱃지
  rankBadge: {
    height: 16,
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: "#FFE8EC",
    borderWidth: 1,
    borderColor: "#FFD6DC",
    alignItems: "center",
    justifyContent: "center",
  },
  rankText: { color: PINK, fontSize: 10, fontWeight: "700" },

  /* ── Card ─────────────────────────────────────── */
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#EFEFEF",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  imgWrap: { position: "relative" },
  img: { width: "100%", height: 152, borderRadius: 14, backgroundColor: "#eee" },
  heartIcon: {
    position: "absolute",
    right: 8,
    top: 8,      // 살짝 안쪽에 얹히게
  },


  discountText: { fontSize: 13, color: PINK, fontWeight: "700", marginRight: 4 },
  priceText: { fontSize: 15, color: TEXT_DARK, fontWeight: "700" },
  titleText: { marginTop: 4, fontSize: 13, color: "#2B2B2B", fontWeight: "600" },
  remainText: { marginTop: 2, fontSize: 12, color: "#8B8B8B" },

  /* ── Floating “제안하기” (하단 고정) ───────────── */
  fab: {
    position: "absolute",
    // bottom/right는 런타임에 주입(tabBarHeight + GAP, 18)
    backgroundColor: PINK,
    height: 36,
    paddingHorizontal: 14,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    zIndex: 10,
  },
  fabText: { color: "#fff", fontWeight: "700", fontSize: 12 },
});

export default GroupPurchase;