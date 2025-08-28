// src/screens/RentalDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// 공통 UI
import ButtonRegister from "../common_components/Button_Register";

// 화면 내부 전용 컴포넌트
import ProductLabel from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";

// SVG
import HeartIcon from "./assets/Heart_icon.svg";
import ShareIcon from "./assets/Share_icon.svg";
import LeftIcon from "../common_components/assets/Left.svg";
import SmileIcon from "./assets/Smile.svg";
import RightIcon from "./assets/Right.svg";
import UnderIcon from "./assets/Under.svg";

// 연관 추천 상품 이미지들
import TableImage from "./assets/Table.png";
import LightImage from "./assets/Light.png";
import BurnerImage from "./assets/Burner.png";

// ✅ 리뷰 썸네일 이미지
import Tent1 from "./assets/Tent_1.png";
import Tent2 from "./assets/Tent_2.png";

const RentalDetailScreen = () => {
  const navigation = useNavigation();

  const product = {
    title: "캠핑용 텐트 1~2인용",
    price: "20,000원",
    location: "서울시 관악구 신림역",
    description:
      "미니민 원터치 1~2인용 캠핑 텐트입니다. 가볍고 설치가 쉬워 초보자도 3분 이내 설치할 수 있어 간편하게 사용할 수 있습니다. 방수효과도 좋고 튼튼한 제품입니다.",
    image: require("./assets/Card_product.png"), // ← 메인 이미지
    reviews: [
      {
        title: "만족해요",
        comment: "초보도 쉽게 사용할 수 있어요.",
        image: Tent1,
      }, // ✅ 첫 리뷰 = Tent_1
      { title: "만족해요", comment: "튼튼하고 방수가 좋아요.", image: Tent2 }, // ✅ 마지막 리뷰 = Tent_2
    ],
  };

  const related = [
    {
      id: "table",
      image: TableImage,
      title: "캠핑용 테이블",
      price: "8,500원",
      address: "서울시 관악구 · 30분 전",
    },
    {
      id: "light",
      image: LightImage,
      title: "캠핑용 조명 렌턴",
      price: "7,000원",
      address: "서울시 관악구 · 1시간 전",
    },
    {
      id: "burner",
      image: BurnerImage,
      title: "캠핑용 버너",
      price: "9,000원",
      address: "서울시 관악구 · 2시간 전",
    },
  ];

  const handleReservation = () => {
    console.log("예약하기 버튼 클릭");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ✅ 메인 이미지 좌우 여백 20 */}
        <View style={styles.mainImageWrap}>
          <Image
            source={product.image}
            style={styles.mainImage}
            resizeMode="cover"
          />
        </View>

        {/* 제품 정보 + 하트/공유 */}
        <View style={styles.headerRow}>
          <View style={styles.infoTexts}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.location}>{product.location}</Text>
          </View>
          <View style={styles.rightIcons}>
            <HeartIcon width={24} height={24} />
            <ShareIcon width={16} height={18} />
          </View>
        </View>

        {/* --- 구분선 (제품 설명 위) --- */}
        <View style={styles.dividerTopProduct} />

        {/* 제품 설명 */}
        <View style={styles.productLabelBox}>
          <ProductLabel />
          <TouchableOpacity
            style={styles.productLabelUnder}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            onPress={() => console.log("제품 설명 접기/펼치기 아이콘 눌림")}
          >
            <UnderIcon width={18} height={18} />
          </TouchableOpacity>
        </View>

        {/* --- 구분선 (제품 설명 아래) --- */}
        <View style={styles.dividerBottomProduct} />

        {/* 리뷰 헤더 */}
        <View style={[styles.rowBetween, styles.pad20, { marginBottom: 16 }]}>
          <View>
            <Text style={styles.sectionTitle}>리뷰 15</Text>
            <Text style={styles.subtitle}>82%가 만족한 상품입니다</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.viewAll}>전체보기</Text>
            <RightIcon width={18} height={18} />
          </View>
        </View>

        {/* 리뷰 카드 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {product.reviews.map((rv, i) => (
            <View key={i} style={styles.reviewCard}>
              <Image
                source={rv.image}
                style={styles.reviewThumb}
                resizeMode="cover"
              />
              {/* ✅ 변경: rv.image */}
              <View style={styles.reviewRight}>
                {/* ✅ Frame498처럼: 한 컨테이너에서 wrap + 간격 제어 */}
                <View style={styles.reviewWrap}>
                  <Text style={styles.reviewTitleText}>{rv.title}</Text>
                  <SmileIcon width={14} height={14} />
                  <Text style={styles.reviewCommentText} numberOfLines={2}>
                    {rv.comment}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* --- 구분선 --- */}
        <View style={styles.divider} />

        {/* 연관 추천 상품 */}
        <View style={[styles.pad20, { marginBottom: 12 }]}>
          <Text style={styles.sectionTitle}>연관 추천 상품</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {related.map((item) => (
            <View key={item.id} style={styles.relatedCard}>
              <View style={styles.relatedImageWrap}>
                <Image
                  source={item.image}
                  style={styles.relatedImage}
                  resizeMode="cover"
                />
                {/* 배경 없는 하트 아이콘만 노출 */}
                <TouchableOpacity
                  style={styles.iconOverlay}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <HeartIcon width={18} height={18} />
                </TouchableOpacity>
              </View>

              <View style={styles.relatedInfoWrap}>
                <ProductInfo
                  title={item.title}
                  price={item.price}
                  address={item.address}
                  order={["price", "title", "address"]}
                  compact
                />
              </View>
            </View>
          ))}
        </ScrollView>

        {/* --- 구분선 --- */}
        <View style={styles.dividerTopReservation} />

        {/* 예약 버튼 */}
        <View style={styles.buttonWrapper}>
          <ButtonRegister
            text="예약하기"
            onPress={handleReservation}
            isLoading={false}
            disabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBFBFB" },

  topBar: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  scrollContent: { paddingBottom: 32 },

  /* ✅ 메인 이미지 좌우 여백 20 */
  mainImageWrap: { paddingHorizontal: 20 },
  mainImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },

  // 제목/가격/위치 + 오른쪽 아이콘
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  infoTexts: { flexShrink: 1, paddingRight: 12 },
  rightIcons: { flexDirection: "row", alignItems: "center", gap: 16 },

  title: { fontSize: 18, fontWeight: "600", marginBottom: 6, color: "#1b1b1b" },
  price: { fontSize: 16, color: "#1B1B1B", marginBottom: 4, fontWeight: "600" },
  location: { fontSize: 14, color: "#666" },

  pad20: { paddingHorizontal: 20 },

  // ProductLabel 아이콘
  productLabelBox: {
    paddingHorizontal: 20,
    paddingRight: 36,
    position: "relative",
  },
  productLabelUnder: {
    position: "absolute",
    right: 20,
    top: 0,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1b1b1b",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#5a5a5a",
    marginBottom: 0,
  },
  viewAll: { fontSize: 12, color: "#5a5a5a", fontWeight: "500" },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  // 구분선
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 16,
    marginBottom: 22,
    marginHorizontal: 20,
  },
  dividerTopProduct: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  dividerBottomProduct: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
  dividerTopReservation: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 24,
    marginBottom: -34,
    marginHorizontal: 20,
  },
  horizontalScroll: { paddingLeft: 20, paddingRight: 8 },

  /* 리뷰 카드 */
  reviewCard: {
    width: 248,
    height: 84,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginRight: 12,
    flexDirection: "row",
    overflow: "hidden",
  },
  reviewThumb: { width: 56, height: 56, borderRadius: 10, margin: 14 },

  reviewRight: { flex: 1, justifyContent: "center", paddingRight: 12 },

  /* ✅ Frame498 스타일 반영: 제목+아이콘 1행, 코멘트 다음행 / 간격 제어 */
  reviewWrap: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    rowGap: 8, // ← 제목행과 코멘트 사이 간격 8
    columnGap: 2, // ← 제목과 아이콘 사이 간격 2
  },
  reviewTitleText: { fontSize: 14, fontWeight: "500", color: "#1b1b1b" },
  reviewCommentText: { fontSize: 12, fontWeight: "500", color: "#5a5a5a" },

  /* 연관 추천 상품 */
  relatedCard: {
    width: 140,
    marginRight: 5,
  },
  relatedImageWrap: {
    width: 120,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    position: "relative",
  },
  relatedImage: { width: "100%", height: "100%" },

  // 배경 없는 하트 오버레이
  iconOverlay: {
    position: "absolute",
    right: 12.3,
    top: 12,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  relatedInfoWrap: { paddingTop: 8 },

  /* 예약 버튼 */
  buttonWrapper: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: -30,
    width: "100%",
  },
});

export default RentalDetailScreen;
