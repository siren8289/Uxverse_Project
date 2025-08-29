// pages/RentalSharingDetail/RentalDetailScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useProductDetail, useToggleLike } from "../../src/api/products";
import { useRentalDetail, useReserveRental } from "../../src/api/rentals";

import ButtonRegister from "../common_components/Button_Register";
import ProductLabel from "./components/ProductDescription";
import ProductInfo from "./components/ProductInfo";

import HeartIcon from "./assets/Heart_icon.svg";
import ShareIcon from "./assets/Share_icon.svg";
import LeftIcon from "../common_components/assets/Left.svg";
import SmileIcon from "./assets/Smile.svg";
import RightIcon from "./assets/Right.svg";
import UnderIcon from "./assets/Under.svg";

import TableImage from "./assets/Table.png";
import LightImage from "./assets/Light.png";
import BurnerImage from "./assets/Burner.png";
import PlaceholderImg from "./assets/Table.png";

import Tent1 from "./assets/Tent_1.png";
import Tent2 from "./assets/Tent_2.png";

const FOOTER_PAD = 32;

export default function RentalDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // 파라미터
  const params = route?.params ?? {};
  const passedProduct = params.product ?? null;
  const id = params.id ?? passedProduct?.id ?? null;

  // id 전혀 없을 때: 훅 호출 전에 리턴하면 또 순서가 달라지므로
  // 아래처럼 훅 호출은 그대로 두고, 화면 리턴만 뒤에서 처리
  const noId = !id;

  // 데이터 훅
  const {
    data: product,
    isLoading: loadingProduct,
    isError: errorProduct,
    refetch: refetchProduct,
  } = useProductDetail(id);

  const {
    data: rental,
    isLoading: loadingRental,
    isError: errorRental,
    refetch: refetchRental,
  } = useRentalDetail(id);

  const toggleLike = useToggleLike(id);
  const reserve = useReserveRental(id);

  // ---- 🟢 모든 훅 호출은 여기까지 (리턴 분기보다 위) ----

  // 폴백 + 이미지 보존 병합 (항상 호출되는 훅)
  const mergedProduct = React.useMemo(() => {
    const p = product ?? {};
    const pp = passedProduct ?? {};
    return {
      ...pp,
      ...p,
      image: p.image ?? pp.image ?? pp.imageSource,
      imageSource: p.imageSource ?? pp.imageSource ?? pp.image,
      thumb:
        typeof p.thumb === "string" && p.thumb.trim()
          ? p.thumb
          : typeof p.imageUrl === "string" && p.imageUrl.trim()
          ? p.imageUrl
          : typeof pp.thumb === "string" && pp.thumb.trim()
          ? pp.thumb
          : typeof pp.imageUrl === "string" && pp.imageUrl.trim()
          ? pp.imageUrl
          : undefined,
      imageUrl:
        typeof p.imageUrl === "string" && p.imageUrl.trim()
          ? p.imageUrl
          : typeof p.thumb === "string" && p.thumb.trim()
          ? p.thumb
          : typeof pp.imageUrl === "string" && pp.imageUrl.trim()
          ? pp.imageUrl
          : typeof pp.thumb === "string" && pp.thumb.trim()
          ? pp.thumb
          : undefined,
    };
  }, [product, passedProduct]);

  const mainImageSource = (() => {
    const p = mergedProduct ?? {};
    if (p.image) return p.image;
    if (p.imageSource) return p.imageSource;
    if (typeof p.thumb === "string" && p.thumb.trim()) return { uri: p.thumb };
    if (typeof p.imageUrl === "string" && p.imageUrl.trim())
      return { uri: p.imageUrl };
    return PlaceholderImg;
  })();

  const isLoading = (loadingProduct || loadingRental) && !mergedProduct;
  const isTotalError = (errorProduct || errorRental) && !mergedProduct;

  const onRefresh = () => {
    refetchProduct?.();
    refetchRental?.();
  };

  const handleReservation = () => {
    reserve.mutate(
      { dateFrom: "2025-09-01", dateTo: "2025-09-03", qty: 1 },
      {
        onSuccess: () => Alert.alert("예약 완료", "렌탈 예약이 완료되었어요."),
        onError: () => Alert.alert("예약 실패", "잠시 후 다시 시도해 주세요."),
      }
    );
  };

  const handleToggleLike = () => toggleLike.mutate();

  const formatPrice = (v) => {
    if (v == null) return "";
    if (typeof v === "number") return `${v.toLocaleString()}원`;
    const n = Number(v);
    return Number.isNaN(n) ? String(v) : `${n.toLocaleString()}원`;
  };

  // ---- 화면 리턴 분기 (훅 호출 이후) ----
  if (noId) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: FOOTER_PAD },
          ]}
        >
          <View style={{ padding: 20 }}>
            <Text>잘못된 접근입니다. 항목 ID가 없습니다.</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator />
      </View>
    );
  }

  if (isTotalError) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: FOOTER_PAD },
          ]}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={onRefresh} />
          }
        >
          <View style={{ padding: 20 }}>
            <Text>
              데이터를 불러오지 못했어요. 아래로 끌어당겨 새로고침 해주세요.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

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

  const reviews = [
    {
      title: "만족해요",
      comment: "초보도 쉽게 사용할 수 있어요.",
      image: Tent1,
    },
    { title: "만족해요", comment: "튼튼하고 방수가 좋아요.", image: Tent2 },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <LeftIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: FOOTER_PAD },
        ]}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        {/* 메인 이미지 */}
        <View style={styles.mainImageWrap}>
          <Image
            source={mainImageSource}
            style={styles.mainImage}
            resizeMode="cover"
          />
        </View>

        {/* 제품 정보 */}
        <View style={styles.headerRow}>
          <View style={styles.infoTexts}>
            <Text style={styles.title}>
              {mergedProduct?.title ?? "제목 없음"}
            </Text>
            <Text style={styles.price}>
              {formatPrice(mergedProduct?.price)}
            </Text>
            {!!rental?.location && (
              <Text style={styles.location}>{rental.location}</Text>
            )}
          </View>
          <View style={styles.rightIcons}>
            <TouchableOpacity
              onPress={handleToggleLike}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <HeartIcon width={24} height={24} />
            </TouchableOpacity>
            <ShareIcon width={16} height={18} />
          </View>
        </View>

        {/* 제품 설명 */}
        <View style={styles.dividerTopProduct} />
        <View style={styles.productLabelBox}>
          <ProductLabel text={rental?.description ?? ""} />
          <TouchableOpacity style={styles.productLabelUnder}>
            <UnderIcon width={18} height={18} />
          </TouchableOpacity>
        </View>
        <View style={styles.dividerBottomProduct} />

        {/* 리뷰 */}
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          {reviews.map((rv, i) => (
            <View key={i} style={styles.reviewCard}>
              <Image
                source={rv.image}
                style={styles.reviewThumb}
                resizeMode="cover"
              />
              <View style={styles.reviewRight}>
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
                <TouchableOpacity style={styles.iconOverlay}>
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

        {/* 예약 버튼 */}
        <View style={styles.dividerTopReservation} />
        <View style={styles.buttonWrapper}>
          <ButtonRegister
            text={reserve.isPending ? "예약 중..." : "예약하기"}
            onPress={handleReservation}
            isLoading={reserve.isPending}
            disabled={reserve.isPending}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FBFBFB" },
  topBar: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContent: { paddingBottom: FOOTER_PAD },
  mainImageWrap: { paddingHorizontal: 20 },
  mainImage: { width: "100%", height: 300, borderRadius: 10, marginTop: 10 },
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
  productLabelBox: {
    paddingHorizontal: 20,
    paddingRight: 36,
    position: "relative",
  },
  productLabelUnder: { position: "absolute", right: 20, top: 0 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1b1b1b",
    marginBottom: 8,
  },
  subtitle: { fontSize: 12, color: "#5a5a5a" },
  viewAll: { fontSize: 12, color: "#5a5a5a" },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  divider: { height: 1, backgroundColor: "#e0e0e0", margin: 20 },
  dividerTopProduct: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 20,
    marginTop: 24,
  },
  dividerBottomProduct: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 20,
    marginVertical: 16,
  },
  dividerTopReservation: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 20,
    marginTop: 24,
  },
  horizontalScroll: { paddingLeft: 20, paddingRight: 8 },
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
  reviewWrap: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    rowGap: 8,
    columnGap: 2,
  },
  reviewTitleText: { fontSize: 14, fontWeight: "500", color: "#1b1b1b" },
  reviewCommentText: { fontSize: 12, color: "#5a5a5a" },
  relatedCard: { width: 140, marginRight: 5 },
  relatedImageWrap: {
    width: 120,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    position: "relative",
  },
  relatedImage: { width: "100%", height: "100%" },
  iconOverlay: { position: "absolute", right: 12, top: 12 },
  relatedInfoWrap: { paddingTop: 8 },
  buttonWrapper: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: -30,
    width: "100%",
  },
});
