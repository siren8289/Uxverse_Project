import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import ListingCard from "./components/ListingCard_0";
import { Color, FontFamily, FontSize } from "./GlobalStyles";

// ✅ 최신순 아이콘
import PopularIcon from "./assets/Popular.svg";

// ✅ 이미지 require
import TentImg from "../assets/tent.png";
import BagImg from "../assets/bag.png";
import ChairImg from "../assets/chair.png";
import CarrierImg from "../assets/carrier.png";
import SetImg from "../assets/set.png";
import MetImg from "../assets/met.png";

const RentalSharingService = () => {
  const [category, setCategory] = useState("latest");

  // ✅ 카테고리 배열
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

  // ✅ 상품 데이터
  const PRODUCTS = useMemo(
    () => [
      { id: "1", imageSource: TentImg, price: "20,000원", title: "캠핑용 텐트 1~2인용", location: "서울시 관악구 · 30분 전" },
      { id: "2", imageSource: BagImg, price: "15,000원", title: "여행용 올인원 백팩", location: "서울시 관악구 · 1시간 전" },
      { id: "3", imageSource: ChairImg, price: "8,000원", title: "캠핑용 의자", location: "서울시 관악구 · 2시간 전" },
      { id: "4", imageSource: CarrierImg, price: "25,000원", title: "경량 캐리어", location: "서울시 관악구 · 3일 전" },
      { id: "5", imageSource: SetImg, price: "12,000원", title: "간이 조리세트", location: "서울시 관악구 · 4주 전" },
      { id: "6", imageSource: MetImg, price: "9,000원", title: "간이 에어매트", location: "서울시 관악구 · 4개월 전" },
    ],
    []
  );

  // ✅ 상품 카드
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
        locationStyle={{
          fontSize: 10,
          lineHeight: 14,
          color: "#777",
        }}
        textBoxStyle={{
          paddingHorizontal: 6,
        }}
        onPress={() => { }}
        onToggleLike={() => { }}
      />
    ),
    []
  );

  // ✅ 카테고리 버튼
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

  return (
    <View style={styles.container}>
      {/* ✅ 상단바 */}
      <View style={styles.topBarWrapper}>
        {/* 왼쪽 아이콘 */}
        <Feather name="chevron-left" size={22} color={Color.colorGray200} />

        {/* 타이틀 */}
        <Text style={styles.topBarTitle}>렌탈/공유</Text>

        {/* 오른쪽 아이콘 */}
        <View style={styles.rightIconWrap}>
          <Feather
            name="search"
            size={22}
            color={Color.colorGray200}
            style={{ marginRight: 10 }} // ✅ 검색-장바구니 간격 10
          />
          <Feather name="shopping-cart" size={22} color={Color.colorGray200} />
        </View>
      </View>

      {/* ✅ 위치 */}
      <View style={styles.locationRow}>
        <View style={styles.locationBox}>
          <Text style={styles.locationText}>서울시 관악구 신림동</Text>
          <Feather
            name="chevron-down"
            size={16}
            color="#6B6B6B"
            style={{ marginLeft: 6 }} // 텍스트와 아이콘 사이 6px
          />
        </View>
      </View>


      {/* ✅ 카테고리 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}
      >
        {categories.map(renderCategory)}
      </ScrollView>

      {/* ✅ 상품 리스트 */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{
          gap: 12,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 100,
          rowGap: 12,
        }}
        style={{ marginTop: 24 }}   // ✅ 카테고리와 간격 24px
        showsVerticalScrollIndicator={false}
      />


      {/* ✅ 등록 버튼 */}
      <View style={styles.fabWrap}>
        <TouchableOpacity style={styles.fabButton} onPress={() => { }}>
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
    marginTop: 16, // 상태바와 16 간격
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20, // ✅ 좌우 바깥 마진 20
  },

  rightIconWrap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  topBarTitle: {
    fontSize: FontSize.size_18,
    fontWeight: "500",
    color: Color.colorGray200,
    textAlign: "center",
    position: "absolute",   // 가운데 고정
    left: 0,
    right: 0,
    marginLeft: 114,        // 왼쪽 아이콘과 114px
    marginRight: 114,       // 오른쪽 아이콘과 114px
  },

  locationRow: {
    paddingHorizontal: 20,
    marginTop: 16,
    marginBottom: 10,
  },
  locationBox: {
    flexDirection: "row",   // 텍스트 + 아이콘 가로 배치
    alignItems: "center",   // 수직 가운데 정렬
  },
  locationText: {
    fontSize: FontSize.size_14,
    color: "#6B6B6B",
    fontFamily: FontFamily.notoSansKRMedium,
  },


  categoryRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 24,
    paddingVertical: 6,      // ✅ 버튼이 잘리지 않게 위아래 여유
    alignItems: "center",    // ✅ 버튼 수직 가운데
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 13,   // ✅ height 26 → radius 13
    paddingHorizontal: 12,
    height: 26,         // ✅ 버튼 높이 고정
  },

  categoryText: {
    fontSize: 12,           // 글자 크기 12px
    color: "#333",
  },

  categorySelectedOutlined: { borderColor: "#FA8072" },
  categorySelectedFilled: { backgroundColor: "#FA8072", borderColor: "#FA8072" },
  categoryTextOutlined: { color: "#FA8072" },
  categoryTextFilled: { color: "#FFF" },

  fabWrap: { position: "absolute", right: 20, bottom: 80 },
  fabButton: {
    flexDirection: "row",      // ✅ 아이콘 + 텍스트 나란히
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA8072",
    width: 114,
    height: 46,
    borderRadius: 23,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },

  plusIcon: {
    fontSize: 24,              // ✅ + 크기 24px
    color: "#fff",
    marginRight: 4,            // 아이콘과 텍스트 사이 여백
  },

  fabText: {
    fontSize: 18,              // ✅ 글자 크기 18px
    fontWeight: "600",
    color: "#fff",
  },

});

export default RentalSharingService;
