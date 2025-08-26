// F:\ReactNativeProjects\Uxverse_Project\src\screens\Mypage.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

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
const BAR_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2; // 화면 전체 패딩 제외

const Mypage = () => {
  const currentAmount   = 20000; 
  const nextLevelAmount = 40000; 
  const progress        = Math.min(currentAmount / nextLevelAmount, 1); 
  const progressWidth   = Math.round(BAR_WIDTH * progress);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 0 }}>
        <TopBar_1 />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
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

          {/* 진행 바 */}
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

        {/* 아이콘 4개 */}
        <View style={styles.iconGrid}>
          <IconLabel icon={DeliveryIcon} label="주문/배송" />
          <IconLabel icon={CouponIcon}  label="쿠폰함"  />
          <IconLabel icon={ReviewIcon}  label="리뷰"   />
          <IconLabel icon={GiftIcon}    label="선물함" />
        </View>

        {/* Personal 카드 */}
        <View style={styles.personalWrap}>
          <Personal title="결제정보"  />
          <Personal title="주문정보" />
          <Personal title="커뮤니티" />
          <Personal title="문의/공지사항" />
        </View>
        
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color?.colorGray100 || "#FBFBFB",
  },
  scrollContent: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 100,
  },

  /* 유저 카드 */
  userCard: {
    marginTop: 50,
    width: "100%",
    position: "relative",
  },
  userName: {
    marginTop: 55,
    fontSize: FontSize?.size_18 || 18,
    lineHeight: 22,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
  },
  userLevelRow: {
    position: "absolute",
    top: 55,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  userLevel: {
    fontSize: FontSize?.size_16 || 16,
    lineHeight: 22,
    fontFamily: FontFamily?.notoSansKRMedium || "NotoSansKRMedium",
    fontWeight: "500",
    color: Color?.colorGray200 || "#1b1b1b",
    marginRight: 4,
  },
  userLevelArrow: {
    marginTop: 2,
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
  },
  barTrack: {
    width: BAR_WIDTH,
    height: 11,
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
    marginTop: 11.5,
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
    marginTop: 32,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* Personal 카드 */
  personalWrap: {
    marginTop: 17,
    width: "100%",
  },
});

export default Mypage;
