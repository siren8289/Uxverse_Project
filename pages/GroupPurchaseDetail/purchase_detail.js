// pages/GroupPurchaseDetail/GroupPurchaseDetail.js (예시 파일명)
// ─────────────────────────────────────────────────────────────
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  RefreshControl,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

// ✅ API 훅
import { useProductDetail, useToggleLike } from "../../src/api/products";
import { useGroupDetail, useJoinGroup } from "../../src/api/groups";

// ✅ 섹션 컴포넌트 (네가 만든 것들)
import ProgressStatusBar from "./components/ProgressStatusBar";
import ProductHeader from "./components/ProductHeader";
import DescriptionSection from "./components/DescriptionSection";
import ReviewsSection from "./components/ReviewsSection";
import RelatedProducts from "./components/RelatedProducts";
import BottomActions from "./components/BottomActions";

const Color = { colorGray100: "#FFFFFF" };
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function GroupPurchaseDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  // ✅ Home에서 넘긴 { id }만 받는다. 상세 데이터는 여기서 fetch
  const id = route?.params?.id;

  // ✅ 공통 상품정보(제목/가격/좋아요 등)
  const {
    data: product,
    isLoading: loadingProduct,
    isError: errorProduct,
    refetch: refetchProduct,
  } = useProductDetail(id);

  // ✅ 공구 전용 정보(진행률/참여자/설명 등)
  const {
    data: group,
    isLoading: loadingGroup,
    isError: errorGroup,
    refetch: refetchGroup,
  } = useGroupDetail(id);

  // ✅ 좋아요 토글/참여 뮤테이션
  const toggleLike = useToggleLike(id);
  const join = useJoinGroup(id);

  const isLoading = loadingProduct || loadingGroup;
  const isError = errorProduct || errorGroup;

  // 에러 시 새로고침
  const onRefresh = () => {
    refetchProduct();
    refetchGroup();
  };

  // 참여 버튼
  const handleJoin = () => {
    join.mutate(undefined, {
      onSuccess: () => {
        Alert.alert("참여 완료", "공동구매에 참여했어요.");
      },
      onError: () => {
        Alert.alert("참여 실패", "잠시 후 다시 시도해 주세요.");
      },
    });
  };

  // 좋아요 버튼
  const handleToggleLike = () => {
    toggleLike.mutate();
  };

  // ── 로딩 상태 ─────────────────────────────────────────────
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

  // ── 에러 상태 ──────────────────────────────────────────────
  if (isError) {
    return (
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <ScrollView
          contentContainerStyle={[
            styles.content,
            { minHeight: SCREEN_HEIGHT * 10 },
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

  // 🔎 안전가드
  if (!product || !group) return null;

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      {/* 📌 뒤로가기 버튼 */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { minHeight: SCREEN_HEIGHT * 1.2 },
        ]}
        showsVerticalScrollIndicator={true}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        {/* 진행률/참여자 상태바 
           - 컴포넌트의 실제 prop 이름과 다르면 내부에서 맞춰서 써줘 */}
        <ProgressStatusBar
          progress={group?.progress ?? 0} // 0~1
          joined={group?.joined ?? 0}
          target={group?.target ?? 0}
        />

        {/* 헤더(이미지/제목/가격/좋아요) */}
        <ProductHeader
          title={product?.title}
          price={product?.price}
          liked={product?.liked}
          onToggleLike={handleToggleLike}
          // 필요하면 썸네일/배지 등 추가
        />

        {/* 상세 설명 */}
        <DescriptionSection description={group?.description ?? ""} />

        {/* 리뷰/연관상품 – 아직 API 미연동이면 그대로 둬도 됨 */}
        <ReviewsSection productId={product?.id} />
        <RelatedProducts productId={product?.id} />
      </ScrollView>

      {/* 하단 고정 액션바: 참여 버튼 */}
      <BottomActions
        primaryLabel={join.isPending ? "참여 중..." : "참여하기"}
        onPrimaryPress={handleJoin}
        // 보조 버튼을 쓰고 싶다면 아래 주석 해제해서 사용
        // secondaryLabel={product?.liked ? "찜 해제" : "찜하기"}
        // onSecondaryPress={handleToggleLike}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorGray100,
  },
  backBtn: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 100,
    padding: 10,
  },
  backText: { fontSize: 20 },
  scroll: { flex: 1 },
  content: { paddingBottom: 32 },
});
