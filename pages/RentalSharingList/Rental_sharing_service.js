import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import ListingCard from "./components/ListingCard_0";
import { Color, FontFamily, FontSize } from "./GlobalStyles";

import PopularIcon from "./assets/Popular.svg";
import TentImg from "./assets/tent.png";
import BagImg from "./assets/bag.png";
import ChairImg from "./assets/chair.png";
import CarrierImg from "./assets/carrier.png";
import SetImg from "./assets/set.png";
import MetImg from "./assets/met.png";

const RentalSharingService = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState("latest");

  const categories = useMemo(
    () => [
      { id: "latest", label: "최신순", icon: PopularIcon },
      { id: "travel", label: "여행 용품" },
      { id: "small", label: "소형 가전" },
      { id: "digital", label: "디지털" },
      { id: "tool", label: "공구" },
    ],
    []
  );

  const PRODUCTS = useMemo(
    () => [
      {
        id: "1",
        imageSource: TentImg,
        price: "20,000원",
        title: "캠핑용 텐트 1~2인용",
        location: "서울시 관악구 · 30분 전",
      },
      {
        id: "2",
        imageSource: BagImg,
        price: "15,000원",
        title: "여행용 올인원 백팩",
        location: "서울시 관악구 · 1시간 전",
      },
      {
        id: "3",
        imageSource: ChairImg,
        price: "8,000원",
        title: "캠핑용 의자",
        location: "서울시 관악구 · 2시간 전",
      },
      {
        id: "4",
        imageSource: CarrierImg,
        price: "25,000원",
        title: "경량 캐리어",
        location: "서울시 관악구 · 3일 전",
      },
      {
        id: "5",
        imageSource: SetImg,
        price: "12,000원",
        title: "간이 조리세트",
        location: "서울시 관악구 · 4주 전",
      },
      {
        id: "6",
        imageSource: MetImg,
        price: "9,000원",
        title: "간이 에어매트",
        location: "서울시 관악구 · 4개월 전",
      },
    ],
    []
  );

  // 카드
  const renderItem = useCallback(
    ({ item }) => (
      <ListingCard
        {...item}
        priceStyle={{
          fontSize: 13,
          fontWeight: "600",
          lineHeight: 16,
          color: "#1b1b1b",
        }}
        titleStyle={{
          fontSize: 12,
          fontWeight: "500",
          lineHeight: 16,
          color: "#222",
        }}
        locationStyle={{ fontSize: 10, lineHeight: 14, color: "#777" }}
        textBoxStyle={{ paddingHorizontal: 6 }}
        onPress={() =>
          navigation.navigate("RentalSharingDetail", { product: item })
        }
        onToggleLike={() => {}}
      />
    ),
    [navigation]
  );

  // 카테고리 버튼
  const renderCategory = (cat) => {
    const isSelected = category === cat.id;
    return (
      <TouchableOpacity
        key={cat.id}
        style={[
          styles.categoryButton,
          isSelected &&
            (cat.id === "travel"
              ? styles.categorySelectedFilled
              : styles.categorySelectedOutlined),
        ]}
        onPress={() => setCategory(cat.id)}
      >
        {cat.icon && (
          <cat.icon width={14} height={14} style={{ marginRight: 4 }} />
        )}
        <Text
          style={[
            styles.categoryText,
            isSelected &&
              (cat.id === "travel"
                ? styles.categoryTextFilled
                : styles.categoryTextOutlined),
          ]}
        >
          {cat.label}
        </Text>
      </TouchableOpacity>
    );
  };

  // ✅ 헤더(상단바 + 위치 + 카테고리)를 ListHeaderComponent로 올림
  const Header = () => (
    <View>
      {/* 상단바 */}
      <View style={styles.topBarWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="chevron-left" size={22} color={Color.colorGray200} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle} pointerEvents="none">
          렌탈/공유
        </Text>
        <View style={styles.rightIconWrap}>
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name="search"
              size={22}
              color={Color.colorGray200}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name="shopping-cart"
              size={22}
              color={Color.colorGray200}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* 위치 */}
      <View style={styles.locationRow}>
        <View style={styles.locationBox}>
          <Text style={styles.locationText}>서울시 관악구 신림동</Text>
          <Feather
            name="chevron-down"
            size={16}
            color="#6B6B6B"
            style={{ marginLeft: 6 }}
          />
        </View>
      </View>

      {/* 카테고리(가로 스크롤) */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}
      >
        {categories.map(renderCategory)}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* ✅ FlatList가 화면 전체 스크롤 담당 */}
      <FlatList
        style={{ flex: 1 }}
        data={PRODUCTS}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        ListHeaderComponent={Header}
        ListFooterComponent={<View style={{ height: 140 }} />} // FAB와 겹치지 않게 여유
        contentContainerStyle={{ paddingHorizontal: 20, rowGap: 12 }}
        showsVerticalScrollIndicator={true}
      />

      {/* 고정 플로팅 버튼 */}
      <View style={styles.fabWrap} pointerEvents="box-none">
        <TouchableOpacity style={styles.fabButton} onPress={() => {}}>
          <Text style={styles.plusIcon}>＋</Text>
          <Text style={styles.fabText}>등록하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  topBarWrapper: {
    marginTop: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0,
  },
  rightIconWrap: { flexDirection: "row", alignItems: "center", gap: 10 },
  topBarTitle: {
    fontSize: FontSize.size_18,
    fontWeight: "500",
    color: Color.colorGray200,
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    marginLeft: 114,
    marginRight: 114,
  },

  locationRow: { paddingHorizontal: 0, marginTop: 16, marginBottom: 10 },
  locationBox: { flexDirection: "row", alignItems: "center" },
  locationText: {
    fontSize: FontSize.size_14,
    color: "#6B6B6B",
    fontFamily: FontFamily.notoSansKRMedium,
  },

  categoryRow: {
    flexDirection: "row",
    paddingHorizontal: 0,
    gap: 24,
    paddingVertical: 6,
    alignItems: "center",
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 13,
    paddingHorizontal: 12,
    height: 26,
  },
  categoryText: { fontSize: 12, color: "#333" },
  categorySelectedOutlined: { borderColor: "#FA8072" },
  categorySelectedFilled: {
    backgroundColor: "#FA8072",
    borderColor: "#FA8072",
  },
  categoryTextOutlined: { color: "#FA8072" },
  categoryTextFilled: { color: "#FFF" },

  fabWrap: { position: "absolute", right: 20, bottom: 120 },
  fabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA8072",
    width: 114,
    height: 46,
    borderRadius: 23,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  plusIcon: { fontSize: 24, color: "#fff", marginRight: 4 },
  fabText: { fontSize: 18, fontWeight: "600", color: "#fff" },
});

export default RentalSharingService;
