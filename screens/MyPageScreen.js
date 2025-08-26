// F:\ReactNativeProjects\Uxverse_Project\src\screens\Mypage.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { NavigationContext, useNavigation } from "@react-navigation/native";

import TopBar_1 from "../src/components/TopBar_1";
import Bar from "./components/Bar";
import Personal from "./components/Personal";
import IconLabel from "./components/IconLabel";
import Nav from "../src/components/Nav";

import DeliveryIcon from "./assets/Delivery.svg";
import CouponIcon   from "./assets/Coupon.svg";
import ReviewIcon   from "./assets/Review.svg";
import GiftIcon     from "./assets/Gift.svg";
import RightIcon    from "./assets/Right.svg";

// 전역 디자인 토큰
import { Color, FontFamily, FontSize } from "../pages/GlobalStyles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HORIZONTAL_PADDING = 20;

// ── 진행바: 폭/비율 정의 ──────────────────────────────────────────
const TRACK_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2;
const TRACK_HEIGHT = 11;
const FILL_HEIGHT = 7;
const FILL_RATIO = 0.5; // 빨간바 1/2
const FILL_TOP_OFFSET = (TRACK_HEIGHT - FILL_HEIGHT) / 2; // 2px

const Mypage = () => {
  // v6 navigation 객체
  const navigation = useNavigation();

  // Nav(v4) 호환: navigation.state를 제공하는 “가짜” 내비 객체
  const legacyNav = React.useMemo(() => {
    const safeState =
      navigation?.getState?.() ?? { index: 0, routes: [{ key: "Mypage", name: "Mypage" }] };
    return { ...navigation, state: safeState };
  }, [navigation]);

  // 데이터
  const currentAmount   = 20000;
  const nextLevelAmount = 40000;

  // 빨간바 길이(현재는 1/2 고정)
  const progressWidth = Math.round(TRACK_WIDTH * FILL_RATIO);

  return (
    <NavigationContext.Provider value={legacyNav}>
      <View style={styles.container}>
        {/* 상단바 (수정 불가) */}
        <TopBar_1 />

        {/* '렌탈/공유' 가리기 → '마이페이지' 표시 (좌우 50만 덮어 중앙 가림) */}
        <View pointerEvents="none" style={styles.titleOverlay}>
          <Text style={styles.titleText}>마이페이지</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 유저 카드 */}
          <View style={styles.userCard}>
            <Text style={styles.userName}>000님</Text>

            <View style={styles.userLevelRow}>
              <Text style={styles.userLevel}>LV.3</Text>
              <RightIcon width={16} height={16} style={styles.userLevelArrow} />
            </View>

            <Text style={styles.toNext}>Lv 4 까지 구매 금액</Text>

            <View style={styles.remainRow}>
              <Text style={styles.amountText}>20,000원</Text>
              <Text style={styles.remainText}> 남음</Text>
            </View>

            {/* 진행 바: 검정 트랙(Bar) + 빨간 바(1/2 길이) 완전 겹치기 */}
            <View style={styles.progressWrap}>
              <View style={[styles.barOverlay, { width: TRACK_WIDTH }]}>
                <Bar sideGap={0} height={TRACK_HEIGHT} />
                <View style={[styles.redFill, { width: progressWidth }]} />
              </View>

              <View style={styles.progressLabelRow}>
                <Text style={styles.progressEdgeLeft}>0</Text>
                <Text style={styles.progressEdgeRight}>{nextLevelAmount}</Text>
              </View>
            </View>
          </View>

          {/* 아이콘 4개 */}
          <View style={styles.iconGrid}>
            <IconLabel icon={DeliveryIcon} label="주문/배송" />
            <IconLabel icon={CouponIcon}  label="쿠폰함"  />
            <IconLabel icon={ReviewIcon}  label="리뷰"   />
            <IconLabel icon={GiftIcon}    label="선물함" />
          </View>

          {/* Personal 카드 */}
          <View style={styles.personalWrap}>
            <Personal title="결제정보" />
            <Personal title="주문정보" />
            <Personal title="커뮤니티" />
            <Personal title="문의/공지사항" />
          </View>

          {/* 하단 네비 여유 공간 */}
          <View style={{ height: 120 }} />
        </ScrollView>

        {/* 필요 시 하단 네비 사용
        <View style={styles.navWrap}>
          <Nav active="MYPAGE" navigation={legacyNav} />
        </View>
        */}
      </View>
    </NavigationContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color?.colorGray100 || "#FBFBFB",
  },

  // TopBar_1 위를 덮는 타이틀 (살짝 좁혀 중앙만 가림)
  titleOverlay: {
    position: "absolute",
    top: 50,
    left: 50,
    right: 50,
    alignItems: "center",
    backgroundColor: Color?.colorGray100 || "#FBFBFB",
    height: 24,
    zIndex: 10,
  },
  titleText: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
  },

  scrollContent: {
    paddingHorizontal: HORIZONTAL_PADDING, // = 20
    paddingBottom: 100,
  },

  /* 유저 카드 */
  userCard: {
    marginTop: 0,
    width: "100%",
    position: "relative",
  },
  userName: {
    marginTop: 30,
    fontSize: FontSize?.size_18 || 18,
    lineHeight: 22,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
  },
  userLevelRow: {
    position: "absolute",
    top: 30,
    right: -2,
    flexDirection: "row",
    alignItems: "center",
  },
  userLevel: {
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 22,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
    marginRight: 2,
  },
  userLevelArrow: {
    marginTop: 2,
    marginRight: -2
  },

  toNext: {
    marginTop: 22,
    fontSize: FontSize?.size_14 || 14,
    lineHeight: 22,
    color: Color?.colorGray200 || "#1b1b1b",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
  },
  remainRow: {
    flexDirection: "row",
    marginTop: 2.5,
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 20,
    lineHeight: 24,
    color: Color?.colorSalmon || "#FF736D",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
  },
  remainText: {
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 24,
    color: Color?.colorGray200 || "#1b1b1b",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
  },

  /* 진행바 */
  progressWrap: {
    marginTop: 25,
    width: "100%",
    alignItems: "center",
  },
  barOverlay: {
    height: TRACK_HEIGHT,
    position: "relative",
    alignSelf: "center",
  },
  redFill: {
    position: "absolute",
    top: FILL_TOP_OFFSET, // 2px (11-7)/2
    left: 0,
    height: FILL_HEIGHT,
    borderRadius: 10,
    backgroundColor: Color?.colorSalmon || "#FF736D",
  },

  // 라벨
  progressLabelRow: {
    marginTop: 11.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingRight 없음 (중복 간격 방지)
  },
  progressEdgeLeft: {
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 22,
    color: Color?.colorGray200 || "#1b1b1b",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
  },
  progressEdgeRight: {
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 22,
    color: Color?.colorGray200 || "#1b1b1b",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    marginRight: 0, // ← 여기! 화면 기준 오른쪽 20px(컨테이너 패딩)만 적용
  },

  /* 아이콘 그리드 */
  iconGrid: {
    marginTop: 32.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* Personal 카드 */
  personalWrap: {
    marginTop: 17,
    width: "100%",
  },

  /* 하단 네비 고정 (원하면 주석 해제) */
  navWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
  },
});

export default Mypage;
