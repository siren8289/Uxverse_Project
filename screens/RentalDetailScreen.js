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
import { useNavigation } from "@react-navigation/native"; // ✅ 추가

// 공통 UI
import Button from "../src/components/Button_Register";
// 화면 내부 전용 컴포넌트
import ProductLabel from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";

// SVG(대문자)
import HeartIcon from "./assets/Heart_icon.svg";
import ShareIcon from "./assets/Share_icon.svg";
import LeftIcon from "../src/components/assets/Left.svg"; // ⬅️ 뒤로가기 아이콘 추가
import SmileIcon from "./assets/Smile.svg"; // screens/assets/Smile.svg 기준
import UnderIcon from "./assets/Under.svg";

// 연관 추천 상품 이미지들
import TableImage from "./assets/Table.png";
import LightImage from "./assets/Light.png";
import BurnerImage from "./assets/Burner.png";

const RentalDetailScreen = () => {
  const navigation = useNavigation(); // ✅ 추가

  const product = {
    title: "캠핑용 텐트 1~2인용",
    price: "20,000원",
    location: "서울시 관악구 신림역",
    description:
      "미니민 원터치 1~2인용 캠핑 텐트입니다. 가볍고 설치가 쉬워 초보자도 3분 이내 설치 가능하며 방수 효과도 좋고 튼튼한 제품입니다.",
    image: require("./assets/Card_product.png"),
    reviews: [
      { title: "만족해요", comment: "초보도 쉽게 사용할 수 있어요." },
      { title: "만족해요", comment: "튼튼하고 방수가 좋아요." },
    ],
  };

  // 연관 추천 상품 더미 데이터
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
      title: "9,000원 버너",
      price: "9,000원",
      address: "서울시 관악구 · 2시간 전",
    },
  ];

  const handleReservation = () => {
    console.log("예약하기 버튼 클릭");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftIcon width={24} height={24} />
        </TouchableOpacity>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 메인 이미지 */}
        <Image
          source={product.image}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* 상품 정보 */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.location}>{product.location}</Text>
        </View>

        {/* 좋아요 / 공유 */}
        <View style={styles.iconRow}>
          <HeartIcon width={24} height={24} />
          <ShareIcon width={24} height={24} />
        </View>

        {/* 제품 설명 */}
        <View style={{ marginTop: 16 }}>
          <ProductLabel />
        </View>

        {/* 리뷰 헤더 */}
        <View style={styles.reviewHeader}>
          <View>
            <Text style={styles.sectionTitle}>리뷰 15</Text>
            <Text style={styles.subtitle}>82%가 만족한 상품입니다</Text>
          </View>
          <Text style={styles.viewAll}>전체보기</Text>
        </View>

        {/* 리뷰 가로 스크롤 카드들 (간단 버전) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.reviewRow}
        >
          {product.reviews.map((rv, i) => (
            <View key={i} style={styles.reviewCard}>
              <Image source={product.image} style={styles.reviewThumb} resizeMode="cover" />
              <View style={styles.reviewRight}>
                <View style={styles.reviewTitleRow}>
                  <Text style={styles.reviewTitleText}>{rv.title}</Text>
                  <SmileIcon width={14} height={14} style={styles.reviewSmile} />
                </View>
                <Text style={styles.reviewCommentText} numberOfLines={2}>
                  {rv.comment}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* 연관 추천 상품 */}
        <View style={styles.relatedHeaderRow}>
          <Text style={styles.sectionTitle}>연관 추천 상품</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.relatedRow}
        >
          {related.map((item) => (
            <View key={item.id} style={styles.relatedCard}>
              <View style={styles.relatedImageWrap}>
                <Image source={item.image} style={styles.relatedImage} resizeMode="cover" />
                <View style={styles.relatedHeart}>
                  <HeartIcon width={16} height={16} />
                </View>
              </View>

              {/* 🔽 텍스트 영역은 ProductInfo를 그대로 사용 */}
              <View style={styles.relatedInfoWrap}>
                <ProductInfo title={item.title} price={item.price} address={item.address} />
              </View>
            </View>
          ))}
        </ScrollView>

        {/* 예약하기 버튼 */}
        <View style={styles.buttonWrapper}>
          <Button
            text="예약하기"
            onPress={handleReservation}
            isLoading={false}
            disabled={false}
          />
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBFBFB" },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 120 },

  // 상단 헤더 (뒤로가기 아이콘)
  topBar: {
    marginTop: 17, // ✅ 추가: SafeAreaView 위쪽 여백
    left: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  mainImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },

  infoContainer: { marginTop: 20 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 6, color: "#1b1b1b" },
  price: { fontSize: 16, color: "#FF736D", marginBottom: 4, fontWeight: "600" },
  location: { fontSize: 14, color: "#666" },

  iconRow: { flexDirection: "row", gap: 16, marginTop: 16 },

  sectionTitle: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    color: "#1b1b1b",
    marginBottom: 8,
  },
  subtitle: { fontSize: 12, color: "#5a5a5a" },
  viewAll: { fontSize: 12, color: "#5a5a5a" },

  /* 리뷰 섹션 */
  reviewHeader: {
    marginTop: 20,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  reviewRow: { paddingRight: 8 },
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
  reviewTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 2, gap: 6 },
  reviewSmile: { marginTop: -1 },
  reviewTitleText: { fontSize: 14, fontWeight: "600", color: "#1b1b1b" },
  reviewStar: { fontSize: 12 },
  reviewCommentText: { fontSize: 12, color: "#5a5a5a" },

  /* 연관 추천 상품 */
  relatedHeaderRow: { marginTop: 28, marginBottom: 12 },
  relatedRow: { paddingRight: 8 },
  relatedCard: { width: 160, marginRight: 14 },
  relatedImageWrap: {
    width: 160,
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    position: "relative",
  },
  relatedImage: { width: "100%", height: "100%" },
  relatedHeart: {
    position: "absolute",
    right: 8,
    top: 8,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(255,255,255,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  relatedInfoWrap: { paddingTop: 8 },

  /* 버튼 */
  buttonWrapper: { marginTop: 30, marginBottom: 40 },
});

export default RentalDetailScreen;
