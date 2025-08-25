// src/screens/RentalDetailScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// 공통 UI
import TopBar_1 from "../src/components/TopBar_1";
// ❌ Nav는 이 화면에서 렌더하지 않습니다.
import Button from "../src/components/Button_Register";

// 화면 내부 전용 컴포넌트
import ProductLabel from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";

// SVG는 대문자 컴포넌트명으로 임포트
import HeartIcon from "./assets/Heart_icon.svg";
import ShareIcon from "./assets/Share_icon.svg";

const RentalDetailScreen = () => {
  const product = {
    title: "캠핑용 텐트 1~2인용",
    price: "20,000원",
    location: "서울시 관악구 신림역",
    description:
      "미니민 원터치 1~2인용 캠핑 텐트입니다. 가볍고 설치가 쉬워 초보자도 3분 이내 설치 가능하며 방수 효과도 좋고 튼튼한 제품입니다.",
    // ⚠️ 파일명 대소문자 정확히 맞추세요 (특히 Android에서 중요)
    image: require("./assets/Card_product.png"),
    reviews: [
      { title: "만족해요", comment: "튼튼하고 방수가 좋아요." },
      { title: "만족해요", comment: "초보도 쉽게 사용할 수 있어요." },
    ],
  };

  const handleReservation = () => {
    console.log("예약하기 버튼 클릭");
  };

  return (
    <View style={styles.container}>
      <TopBar_1 />

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

        {/* 제품 설명 (원본 컴포넌트 그대로 사용) */}
        <ProductLabel />

        {/* 제품 정보 */}
        <ProductInfo
          title={product.title}
          price={product.price}
          address={product.location}
        />

        {/* 좋아요 / 공유 */}
        <View style={styles.iconRow}>
          <HeartIcon width={24} height={24} />
          <ShareIcon width={24} height={24} />
        </View>

        {/* 리뷰 */}
        {product.reviews.map((review, idx) => (
          <View key={idx} style={styles.reviewItem}>
            <Text style={styles.reviewTitle}>{review.title}</Text>
            <Text style={styles.reviewComment}>{review.comment}</Text>
          </View>
        ))}

        {/* 예약하기 버튼 */}
        <View style={styles.buttonWrapper}>
          <Button
            text="예약하기"
            onPress={handleReservation}
            isLoading={false}
            disabled={false}
          />
        </View>

        {/* 탭바와 겹치지 않도록 하단 여백 */}
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBFBFB" },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 120 },
  mainImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  infoContainer: { marginTop: 20 },
  title: { fontSize: 18, fontWeight: "600", marginBottom: 6 },
  price: { fontSize: 16, color: "#FF736D", marginBottom: 4 },
  location: { fontSize: 14, color: "#666" },
  iconRow: { flexDirection: "row", gap: 16, marginTop: 20 },
  reviewItem: { marginTop: 20 },
  reviewTitle: { fontSize: 14, fontWeight: "500" },
  reviewComment: { fontSize: 12, color: "#666" },
  buttonWrapper: { marginTop: 30, marginBottom: 40 },
});

export default RentalDetailScreen;
