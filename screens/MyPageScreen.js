// F:\ReactNativeProjects\Uxverse_Project\src\screens\Mypage.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

// 요청하신 import 순서
import Bar from "./components/Bar";
import Personal from "./components/Personal";
import TopBar_1 from "../src/components/TopBar_1";
import IconLabel from "./components/IconLabel"; // ✅ default import

import DeliveryIcon from "./assets/Delivery.svg";
import CouponIcon from "./assets/Coupon.svg";
import ReviewIcon from "./assets/Review.svg";
import GiftIcon from "./assets/Gift.svg";

// 전역 디자인 토큰 (px)
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../pages/GlobalStyles";

const Mypage = () => {
  // 예시: 진행도/등급 등의 수치를 화면에서 계산/표현할 수 있게 JS 로직 포함
  const currentAmount = 20000; // 원
  const nextLevelAmount = 40000; // 원
  const progress = Math.min(currentAmount / nextLevelAmount, 1); // 0~1

  // 진행바 가로폭(px) — Bar 컴포넌트가 300px 기준이라 맞춰서 표현용 가이드 텍스트도 함께 배치
  const BAR_WIDTH = 300;
  const progressWidth = Math.round(BAR_WIDTH * progress);

  return (
    <View style={styles.container}>
      {/* 상단바 */}
      <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
        <TopBar_1 title="마이페이지" />
        {/* ...나머지 콘텐츠 */}
      </View>

      {/* 본문 */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 유저 카드 */}
        <View style={styles.userCard}>
          <Text style={styles.userName}>000님</Text>
          <Text style={styles.userLevel}>LV.3</Text>

          {/* 남은 금액 */}
          <View style={styles.remainRow}>
            <Text style={styles.amountText}>20,000원</Text>
            <Text style={styles.remainText}> 남음</Text>
          </View>
          <Text style={styles.toNext}>Lv 4 까지 구매 금액</Text>

          {/* 진행 바 (배경 Bar + 진행 오버레이) */}
          <View style={styles.progressWrap}>
            <View style={styles.barTrack}>
              <Bar />
            </View>
            <View style={[styles.barFill, { width: progressWidth }]} />
            <View style={styles.progressLabelRow}>
              <Text style={styles.progressEdgeLeft}>0</Text>
              <Text style={styles.progressEdgeRight}>{nextLevelAmount}</Text>
            </View>
          </View>
        </View>

        {/* 아이콘 4개 (쿠폰함/주문/리뷰/선물함) - 아이콘 파일 없을 시 텍스트만 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginTop: 24,
          }}
        >
          <IconLabel icon={DeliveryIcon} label="주문/배송" />
          <IconLabel icon={CouponIcon} label="쿠폰함" />
          <IconLabel icon={ReviewIcon} label="리뷰" />
          <IconLabel icon={GiftIcon} label="선물함" />
        </View>

        {/* 개인/결제 요약 카드 (Personal 컴포넌트) */}
        {/* 개인/결제 요약 카드 */}
        <View style={styles.personalWrap}>
          <Personal title="결제정보" />
          <Personal title="주문정보" />
          <Personal title="커뮤니티" />
          <Personal title="문의/공지사항" />
        </View>

        {/* 하단 여백 (탭바와 겹치지 않도록) */}
        <View style={{ height: 24 }} />
      </ScrollView>

      {/*
        ⚠️ Nav는 공용 CustomTabBar 입니다.
        탭 네비게이터에서 tabBar={(props) => <Nav {...props} />} 로만 사용하세요.
        이 화면 내부에서 렌더하면 state/index props가 없어 오류가 납니다.
      */}
      {/* <Nav /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color?.colorGray100 || "#FBFBFB",
  },
  scrollContent: {
    paddingHorizontal: 20, // px
    paddingBottom: 100, // px (탭바와 겹치지 않도록)
  },

  /* 유저 카드 */
  userCard: {
    marginTop: 16, // px
  },
  userName: {
    position: "absolute",
    top: 55, // 디자인 기준 위치값(px)
    left: 21,
    fontSize: FontSize?.size_18 || 18,
    lineHeight: 22,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
  },
  userLevel: {
    position: "absolute",
    top: 55,
    right: 20,
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 22,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
  },

  remainRow: {
    flexDirection: "row",
    marginTop: 90, // px (상단 텍스트와 간격)
    marginLeft: 20,
    alignItems: "flex-end",
  },
  amountText: {
    fontSize: 20, // px
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
  toNext: {
    marginTop: 6, // px
    marginLeft: 20,
    fontSize: FontSize?.size_14 || 14,
    lineHeight: 22,
    color: Color?.colorGray200 || "#1b1b1b",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
  },

  /* 진행바 */
  progressWrap: {
    marginTop: 12, // px
    marginLeft: 20, // px
    width: 300, // px (Bar 컴포넌트 기준)
    height: 24, // px (라벨 공간)
  },
  barTrack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: 7,
  },
  barFill: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 7,
    borderRadius: 10,
    backgroundColor: Color?.colorSalmon || "#FF736D",
  },
  progressLabelRow: {
    position: "absolute",
    top: 18,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
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
  },

  /* 아이콘 그리드 */
  iconGrid: {
    marginTop: 24, // px
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* Personal 카드 영역 */
  personalWrap: {
    marginTop: 24, // px
    marginHorizontal: 20,
  },

  /* 메뉴 리스트 */
  menuList: {
    marginTop: 28, // px
  },
  menuRow: {
    height: 48, // px
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuTitle: {
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 24,
    letterSpacing: -0.4,
    color: Color?.colorGray200 || "#1b1b1b",
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
  },
  chevronStub: {
    width: 18, // px
    height: 18, // px
    opacity: 0.35,
  },
  divider: {
    marginLeft: 20, // px
    width: 351, // px
    height: 1,
    borderTopWidth: 0.8, // px
    borderColor: "#d9d9d9", // gainsboro
    borderStyle: "solid",
  },
});

export default Mypage;
