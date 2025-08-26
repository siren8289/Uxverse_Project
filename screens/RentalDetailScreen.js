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
import Button from "../src/components/Button_Register";
// 화면 내부 전용 컴포넌트
import ProductLabel from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";

// SVG(대문자)
import HeartIcon from "./assets/Heart_icon.svg";
import ShareIcon from "./assets/Share_icon.svg";
import LeftIcon from "../src/components/assets/Left.svg";
import SmileIcon from "./assets/Smile.svg";
import RightIcon from "./assets/Right.svg";

// 연관 추천 상품 이미지들
import TableImage from "./assets/Table.png";
import LightImage from "./assets/Light.png";
import BurnerImage from "./assets/Burner.png";
import UnderIcon from "./assets/Under.svg"; 

const RentalDetailScreen = () => {
  const navigation = useNavigation();

  const product = {
    title: "캠핑용 텐트 1~2인용",
    price: "20,000원",
    location: "서울시 관악구 신림역",
    description:
      "미니민 원터치 1~2인용 캠핑 텐트입니다. 가볍고 설치가 쉬워 초보자도 3분 이내 설치할 수 있어 간편하게 사용할 수 있습니다. 방수효과도 좋고 튼튼한 제품입니다.",
    image: require("./assets/Card_product.png"),
    reviews: [
      { title: "만족해요", comment: "초보도 쉽게 사용할 수 있어요." },
      { title: "만족해요", comment: "튼튼하고 방수가 좋아요." },
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
      {/* 상단 뒤로가기: SafeArea 바로 아래에서 16 내려오게 */}
      <SafeAreaView>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 메인 이미지 */}
        <Image
          source={product.image}
          style={styles.mainImage}
          resizeMode="cover"
        />

        {/* 제품 정보 + 하트/공유 아이콘을 같은 행에 */}
        <View style={styles.headerRow}>
          <View style={styles.infoTexts}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.location}>{product.location}</Text>
          </View>

          <View style={styles.rightIcons}>
            <HeartIcon width={24} height={24} />
            <ShareIcon width={24} height={24} />
          </View>
        </View>

        {/* --- 구분선 (제품 설명 위: 위쪽만 16, 아래 0) --- */}
        <View style={styles.dividerTopProduct} />

        {/* 제품 설명: 좌우 패딩을 다른 섹션 타이틀과 동일(20)로 맞춤 */}
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

        {/* --- 구분선 (제품 설명 아래: 위쪽만 16, 아래 0) --- */}
        <View style={styles.dividerBottomProduct} />

        {/* 리뷰 헤더 */}
        <View style={[styles.rowBetween, styles.pad20, { marginBottom: 8 }]}>
          <View>
            <Text style={styles.sectionTitle}>리뷰 15</Text>
            <Text style={styles.subtitle}>82%가 만족한 상품입니다</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Text style={styles.viewAll}>전체보기</Text>
            <RightIcon width={14} height={14} />
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
                source={product.image}
                style={styles.reviewThumb}
                resizeMode="cover"
              />
              <View style={styles.reviewRight}>
                <View style={styles.reviewTitleRow}>
                  <Text style={styles.reviewTitleText}>{rv.title}</Text>
                  <SmileIcon width={14} height={14} />
                </View>
                <Text style={styles.reviewCommentText} numberOfLines={2}>
                  {rv.comment}
                </Text>
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
                {/* 투명한 화이트 배경 하트 */}
                <View style={styles.relatedHeart}>
                  <HeartIcon width={16} height={16} />
                </View>
              </View>
              <View style={styles.relatedInfoWrap}>
                <ProductInfo
                  title={item.title}
                  price={item.price}
                  address={item.address}
                />
              </View>
            </View>
          ))}
        </ScrollView>

        {/* --- 구분선 --- */}
        <View style={styles.divider} />

        {/* ✅ 예약하기 버튼: 페이지 맨 아래(스크롤 콘텐츠의 마지막) + 중앙 정렬 */}
        <View style={styles.buttonWrapper}>
          <Button
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

  // SafeArea 바로 아래 여백 16
  topBar: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  scrollContent: { paddingBottom: 32 },

  mainImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 20, // 좌우 패딩(부모 여백 느낌)
  },

  // 제목/가격/위치 + 오른쪽 아이콘 한 줄
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

  // ProductLabel 오른쪽 Under 아이콘용 스타일
  productLabelBox: {
    paddingHorizontal: 20,   // 섹션들과 동일한 좌우 여백
    paddingRight: 36,        // 아이콘과 텍스트가 겹치지 않게 살짝 여유
    position: "relative",    // 절대배치 기준
  },

  productLabelUnder: {
    position: "absolute",
    right: 20,               // 우측 패딩선과 정렬
    top: 13,                 // 제목 라인 상단에 맞춤 (필요시 2~4로 미세조정)
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1b1b1b",
    marginBottom: 8,
  },
  subtitle: { fontSize: 12, color: "#5a5a5a" },
  viewAll: { fontSize: 12, color: "#5a5a5a" },

  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },

  // 공용 구분선(다른 섹션용: 기존 유지)
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 16,
    marginHorizontal: 20,
  },

  // ✅ 제품설명 위/아래만 별도 스타일
  dividerTopProduct: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 16,     // 위쪽만 16
    marginBottom: 0,   // 아래 0
    marginHorizontal: 20,
  },
  dividerBottomProduct: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginTop: 5,      // ProductLabel과 간격 16 (필요시 16으로 조정)
    marginBottom: 16,
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
  reviewTitleRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  reviewTitleText: { fontSize: 14, fontWeight: "600", color: "#1b1b1b" },
  reviewCommentText: { fontSize: 12, color: "#5a5a5a" },

  /* 연관 추천 상품 */
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

  /* 예약 버튼: 중앙 정렬(컴포넌트 자체가 가로폭 갖고 있으면 가운데 배치됨) */
  buttonWrapper: {
    paddingHorizontal: 20,  // 좌우 여백 통일
    alignItems: "center",    // 내부 자식(버튼) 중앙 정렬
    marginBottom: 24,
    width: "100%",           // 가로 폭 기준을 부모로 통일
  },
});

export default RentalDetailScreen;
