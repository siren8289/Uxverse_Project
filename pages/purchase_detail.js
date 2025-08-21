import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Line10 from "../assets/line-10.svg";
import Line14 from "../assets/line-14.svg";
import Line24 from "../assets/line-24.svg";
import Shareicon from "../assets/share-icon.svg";
import Hearticon from "../assets/heart-icon.svg";
import Frame from "../assets/frame.svg";
import Line26 from "../assets/line-26.svg";
import Frame1 from "../assets/frame1.svg";
import Frame2 from "../assets/frame2.svg";
import Arrowicon from "../assets/arrow-icon.svg";
import Frame3 from "../assets/frame3.svg";
import Arrowicon2 from "../assets/arrow-icon2.svg";
import Hearticon1 from "../assets/heart-icon1.svg";
import Hearticon2 from "../assets/heart-icon2.svg";
import Hearticon3 from "../assets/heart-icon3.svg";
import card_product from "../assets/Rectangle111141453.png";
import Rectangle from "../assets/Rectangle111141511.png";
import Rectangle1 from "../assets/Rectangle111141512.png";
import Rectangle2 from "../assets/Rectangle111141444.png";
import Rectangle3 from "../assets/Rectangle11114144.png";
import Rectangle4 from "../assets/homelittle.png";

const Color = {
  colorGray100: "#FFFFFF",
  colorGray200: "#333333",
  colorDimgray: "#666666",
  colorDarkslategray100: "#2F4F4F",
  colorDarkslategray200: "#4F5B62",
  colorGainsboro100: "#E6E6E6",
  colorGainsboro200: "#D9D9D9",
  colorSalmon: "#FF7F7F",
  colorBlack: "#000000",
};

const Border = {
  br_10: 10,
  br_100: 100,
};

const FontFamily = {
  notoSansKRMedium: "NotoSansKR-Medium",
  sFPro: "SFPro",
};

const Padding = {
  p_6: 6,
  p_8: 8,
  p_10: 10,
  p_16: 16,
};

const FontSize = {
  size_12: 12,
  size_14: 14,
  size_16: 16,
};

const Gap = {
  gap_6: 6,
  gap_8: 8,
};

const GroupPurchaseDetail = () => {
  return (
    <View style={styles.groupPurchaseDetail}>
      <View style={styles.view}>

        {/* 진행 상태 바 */}
        <View style={[styles.child, styles.itemLayout]} />
        <View style={[styles.item, styles.itemLayout]} />
        <Text style={[styles.text, styles.textTypo1]}>10/15</Text>
        <Text style={[styles.text1, styles.textTypo1]}>70%</Text>
        <Text style={[styles.text2, styles.textTypo1]}>참가한 인원</Text>

        {/* 상단 제품 카드 */}
        <Image style={[styles.cardProductIcon, styles.iconPosition]} source={card_product} resizeMode="cover" />
        <Shareicon style={styles.shareIcon} width={22} height={20} />
        <Hearticon style={[styles.heartIcon, styles.iconLayout1]} width={24} height={24} />

        {/* 남은 시간 / 참여 버튼 */}
        <Line14 style={[styles.lineIcon, styles.iconPosition]} width={350} />
        <View style={[styles.wrapper, styles.wrapperPosition]}>
          <Text style={[styles.text3, styles.textClr]}>홍**</Text>
        </View>
        <View style={[styles.container, styles.wrapperPosition]}>
          <Text style={[styles.text4, styles.textTypo1]}>
            <Text style={styles.text5}>4일 </Text>
            <Text style={styles.text6}>남음</Text>
          </Text>
        </View>
        <View style={styles.littleRectangle}>
          <View style={styles.childPosition}>
            <View style={[styles.instanceChild, styles.childPosition]} />
          </View>
        </View>
        <View style={[styles.frameView, styles.timeFlexBox]}>
          <Text style={[styles.text7, styles.textTypo]}>참여</Text>
        </View>
        <Frame style={[styles.frameIcon, styles.iconLayout]} />
        <Line10 style={styles.inner} width={349} />

        {/* 제품 설명 */}
        <View style={styles.labelParent}>
          <Text style={styles.descriptionLabel}>제품 설명</Text>
          <Text style={styles.descriptionText}>
            탱글한 면발과 촉촉한 미트볼이 어우러진 정통 토마토 스파게티 밀키트{"\n"}
            입니다. 간편하게 조리해도 레스토랑 퀄리티의 깊은 맛을 즐길 수 있어요.
          </Text>
        </View>
        <Arrowicon2 style={[styles.arrowIcon, styles.arrowIconLayout]} width={8} height={8} />
        <Line24 style={styles.line24} width={350} />

        {/* 리뷰 */}
        <View style={[styles.reviewIcon, styles.reviewIconLayout]}>
          <View style={[styles.reviewIconChild, styles.childPosition]} />
          <Image style={[styles.reviewIconItem, styles.iconLayout]} source={Rectangle} resizeMode="cover" />
        </View>
        <View style={styles.frameParent}>
          <View style={styles.labelGroup}>
            <Text style={[styles.label, styles.reviewLabelTypo]}>리뷰 15</Text>
            <Text style={[styles.text8, styles.textTypo1]}>82%가 만족한 상품입니다</Text>
          </View>
          <View style={[styles.wrapper1, styles.wrapperFlexBox]}>
            <Text style={[styles.text9, styles.textLayout]}>전체보기</Text>
            <Arrowicon style={styles.seeMoreIcon} width={8} height={8} />
          </View>
        </View>
        <View style={[styles.reviewIcon1, styles.reviewIconLayout]}>
          <View style={[styles.reviewIconChild, styles.childPosition]} />
          <Image style={[styles.reviewIconItem, styles.iconLayout]} source={Rectangle1} resizeMode="cover" />
        </View>
        <View style={[styles.parent, styles.groupFlexBox]}>
          <Text style={[styles.text10, styles.textTypo1]}>만족해요</Text>
          <Frame1 style={styles.frameIcon1} width={14} height={14} />
          <Text style={styles.text11}>진짜 맛집 퀄리티!</Text>
        </View>
        <View style={[styles.group, styles.groupFlexBox]}>
          <Text style={[styles.text10, styles.textTypo1]}>만족해요</Text>
          <Frame2 style={styles.frameIcon1} width={14} height={14} />
          <Text style={styles.text11}>미트볼이 엄청 촉촉!</Text>
        </View>

        {/* 연관 추천 상품 */}
        <View style={[styles.labelWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.label2, styles.labelTypo]}>연관 추천 상품</Text>
        </View>
        <Image style={[styles.homeLittleIcon, styles.homeIconLayout]} source={Rectangle2} resizeMode="cover" />
        <Image style={[styles.homeLittleIcon1, styles.homeIconLayout]} source={Rectangle3} resizeMode="cover" />
        <Image style={[styles.homeLittleIcon2, styles.homeIconLayout]} source={Rectangle4} resizeMode="cover" />
        <View style={[styles.parent1, styles.parent1Position]}>
          <Text style={[styles.text14, styles.labelTypo]}>미트볼 토마토 스파게티 밀키트</Text>
          <View style={[styles.parent2, styles.textPosition]}>
            <Text style={[styles.text15, styles.textTypo1]}>16%</Text>
            <Text style={[styles.text16, styles.textLayout]}>17,200</Text>
          </View>
          <Text style={[styles.text17, styles.textPosition]}>12,900원</Text>
        </View>
        <View style={[styles.labelContainer, styles.labelParentLayout]}>
          <Text style={[styles.label3, styles.textTypo1]}>
            <Text>
              <Text style={styles.text18}>20%</Text>
              <Text style={[styles.text19, styles.labelTypo]}> 11,500원</Text>
            </Text>
          </Text>
          <Text style={[styles.label4, styles.textTypo1]}>치킨 스틱 밀키트</Text>
          <Text style={[styles.text8, styles.textTypo1]}>2명 남음</Text>
        </View>
        <View style={[styles.labelParent1, styles.labelParentLayout]}>
          <Text style={[styles.label3, styles.textTypo1]}>
            <Text>
              <Text style={styles.text18}>15%</Text>
              <Text style={[styles.text19, styles.labelTypo]}> 7,500원</Text>
            </Text>
          </Text>
          <Text style={[styles.label4, styles.textTypo1]}>바삭 군만두 밀키트</Text>
          <Text style={[styles.text8, styles.textTypo1]}>4명 남음</Text>
        </View>
        <View style={[styles.labelParent2, styles.labelParentLayout]}>
          <Text style={[styles.label, styles.labelTypo]}>9,800원</Text>
          <Text style={[styles.label4, styles.textTypo1]}>등심 돈까스 밀키트</Text>
          <Text style={[styles.text8, styles.textTypo1]}>2명 남음</Text>
        </View>

        <Line26 style={[styles.child1, styles.iconPosition]} width={350} />
        <View style={[styles.bigButton, styles.bigPosition]}>
          <View style={styles.childPosition}>
            <View style={[styles.bigButtonChild, styles.childPosition]} />
          </View>
        </View>
        <View style={[styles.bigButton2, styles.bigPosition]}>
          <View style={styles.childPosition}>
            <View style={[styles.bigButtonChild, styles.childPosition]} />
          </View>
        </View>
        <Text style={[styles.text25, styles.text25Position]}>참여하기</Text>
        <Frame3 style={[styles.frameIcon3, styles.text25Position]} width={24} height={24} />
        <Arrowicon2 style={[styles.arrowIcon2, styles.arrowIconLayout]} width={10} height={10} />

        {/* 하트 아이콘들 */}
        <Hearticon1 style={[styles.heartIcon1, styles.heartIconPosition]} width={18} height={18} />
        <Hearticon2 style={[styles.heartIcon2, styles.heartIconPosition]} width={18} height={18} />
        <Hearticon3 style={[styles.heartIcon3, styles.heartIconPosition]} width={18} height={18} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
   
  groupPurchaseDetail: {
    backgroundColor: Color.colorGray100,
    flex: 1,
  },
  seeMoreIcon: {
  marginLeft: 4,
  alignSelf: "center",
},
  descriptionLabel: {
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "600",
    color: Color.colorGray200,
    textAlign: "left",
    marginLeft: 4,
  },
  descriptionText: {
    lineHeight: 18, //글씨 높이 조정
    alignSelf: "stretch",
    color: Color.colorDimgray,
    fontSize: 11,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: 4,
  },
  reviewLabelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    fontSize: 15,  
    color: Color.colorGray200,   
    lineHeight: 18,
  },
  itemLayout: {
    height: 7,
    top: 563,
    borderRadius: Border.br_10,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
  },
  iconPosition: {
    width: 349,
    left: 26,
    position: "absolute",
  },
  wrapperPosition: {
    paddingBottom: Padding.p_10,
    paddingTop: Padding.p_8,
    paddingHorizontal: Padding.p_10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 616,
    position: "absolute",
  },
  textClr: {
    color: Color.colorDarkslategray100,
    textAlign: "left",
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  childPosition: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    color: Color.colorGray100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    fontSize: FontSize.size_16,
    color: Color.colorGray200,
  },
  reviewIconLayout: {
    height: 84,
    top: 838,
    width: 248,
    position: "absolute",
  },
  wrapperFlexBox: {
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  textLayout: {
    width: 55,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  groupFlexBox: {
    columnGap: 2,
    rowGap: Gap.gap_8,
    alignContent: "flex-start",
    flexWrap: "wrap",
    top: 863,
    width: 154,
    flexDirection: "row",
    position: "absolute",
  },
  arrowIconLayout: {
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  parent1Position: {
    top: 445,
    position: "absolute",
  },
  textPosition: {
    left: 0,
    position: "absolute",
  },
  homeIconLayout: {
    height: 119,
    width: 119,
    top: 1004,
    position: "absolute",
    borderRadius: 10,
  },
  labelParentLayout: {
    gap: Gap.gap_6,
    height: 56,
    top: 1134,
    width: 119,
    position: "absolute",
  },
  bigPosition: {
    height: 62,
    top: 1240,
    position: "absolute",
  },
  text25Position: {
    top: 1259,
    position: "absolute",
  },
  heartIconPosition: {
    top: 1016,
    width: 18,
    height: 18,
    position: "absolute",
  },
  child: {
    left: 27,
    backgroundColor: Color.colorDarkslategray200,
    width: 338,
  },
  item: {
    width: 200,
    backgroundColor: Color.colorSalmon,
    left: 20,
  },
  text: {
    top: 572,
    width: 40,
    height: 20,
    color: Color.colorDimgray,
    lineHeight: 24,
    textAlign: "left",
    fontSize: 12,
    left: 20,
    position: "absolute",
  },
  text1: {
    top: 534,
    left: 342,
    width: 28,
    height: 23,
    color: Color.colorDimgray,
    lineHeight: 24,
    textAlign: "left",
    fontSize: 12,
    position: "absolute",
  },
  text2: {
    top: 533,
    width: 75,
    fontSize: 13,
    color: Color.colorDimgray,
    lineHeight: 24,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  inner: {
    top: 658,
    width: 349,
    maxHeight: "100%",
    left: 20,
    position: "absolute",
  },
  lineIcon: {
    top: 616,
    width: 349,
    maxHeight: "100%",
    marginHorizontal: -7,
  },
  text3: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    color: Color.colorDarkslategray100,
    lineHeight: 25,
    fontSize: FontSize.size_12,
  },
  wrapper: {
    left: 21,
  },
  text5: {
    color: Color.colorSalmon,
  },
  text6: {
    color: Color.colorDarkslategray200,
  },
  text4: {
    lineHeight: 24,
    textAlign: "left",
    fontSize: FontSize.size_12,
  },
  container: {
    left: 246,
  },
  shareIcon: {
    left: 348,
    width: 22,
    height: 24,
    top: 445,
    position: "absolute",
    overflow: "hidden",
  },
  cardProductIcon: {
    top: 105,
    height: 316,
  },
  heartIcon: {
    left: 306,
    top: 445,
    position: "absolute",
  },
  instanceChild: {
    borderRadius: 20,
    backgroundColor: Color.colorSalmon,
  },
  littleRectangle: {
    top: 624,
    left: 310,
    width: 51,
    height: 26,
    position: "absolute",
  },
  text7: {
    alignSelf: "stretch",
    fontSize: 13,
  },
  frameView: {
    top: 625,
    left: 324,
    position: "absolute",
  },
  frameIcon: {
    height: "1.69%",
    width: "6.15%",
    top: "4.84%",
    right: "88.72%",
    bottom: "93.47%",
    left: "5.13%",
  },
  lineView: {
    top: 768,
    borderColor: Color.colorGainsboro200,
    borderTopWidth: 0.8,
    width: 351,
    height: 1,
    borderStyle: "solid",
    left: 20,
    position: "absolute",
  },
  child1: {
    top: 1214,
    maxHeight: "100%",
  },
  label: {
    display: "flex",
    color: Color.colorGray200,
    alignSelf: "stretch",
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 18,
    overflow: "hidden",
    flex: 1,
  },
  v: {
    lineHeight: 18,
    alignSelf: "stretch",
    color: Color.colorDimgray,
    fontSize: FontSize.size_12,
  },
  labelParent: {
    top: 675,
    height: 78,
    gap: Gap.gap_8,
    width: 350,
    left: 20,
    position: "absolute",
    alignItems: "flex-start",
  },
  reviewIconChild: {
    borderColor: Color.colorGainsboro100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_10,
  },
  reviewIconItem: {
    height: "66.67%",
    width: "22.58%",
    top: "16.67%",
    right: "71.77%",
    bottom: "16.67%",
    left: "5.65%",
    borderRadius: Border.br_10,
  },
  reviewIcon: {
    left: 20,
  },
  text8: {
    height: 14,
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    color: Color.colorDimgray,
    lineHeight: 18,
    textAlign: "left",
    fontSize: 11,
  },
  labelGroup: {
    height: 38,
    width: 248,
    gap: Gap.gap_8,
  },
  text9: {
    height: 21,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorDimgray,
    fontSize: 11,
  },
  wrapper1: {
    flexDirection: "row",
  },
  frameParent: {
    top: 785,
    width: 360,
    gap: 32,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  reviewIcon1: {
    left: 280,
  },
  text10: {
    width: 52,
    height: 15,
    display: "flex",
    alignItems: "center",
    fontSize: FontSize.size_14,
    color: Color.colorDimgray,
    lineHeight: 14, 
    textAlign: "left",
  },
  frameIcon1: {
    width: 14,
    height: 14,
    overflow: "hidden",
    marginLeft: -4, // 아이콘 왼쪽으로 이동
  },
  text11: {
    width: 154,
    display: "flex",
    height: 12,
    alignItems: "center",
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: 11,
  },
  parent: {
    left: 364,
  },
  group: {
    left: 104,
  },
  label2: {
    width: 95,
    height: 16,
    display: "flex",
    color: Color.colorGray200,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 18,
    overflow: "hidden",
    fontSize: 11,
  },
  labelWrapper: {
    top: 962,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  arrowIcon: {
    top: 678,
    left: 352,
    width: 18,
  },
  arrowIcon1: {
    top: 795,
    left: 352,
    width: 18,
  },
  text14: {
    width: 210,
    color: Color.colorGray200,
    left: 0,
    position: "absolute",
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  text15: {
    width: 30,
    color: Color.colorSalmon,
    fontSize: FontSize.size_14,
    lineHeight: 24,
    textAlign: "left",
  },
  text16: {
    textDecorationLine: "line-through",
    color: Color.colorDarkslategray100,
    textAlign: "left",
    fontSize: FontSize.size_14,
  },
  parent2: {
    top: 22,
    gap: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  text17: {
    top: 45,
    fontSize: 18,
    width: 137,
    color: Color.colorSalmon,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  parent1: {
    width: 202,
    height: 72,
    left: 20,
  },
  homeLittleIcon: {
    left: -9,
  },
  homeLittleIcon1: {
    left: 135,
  },
  text18: {
    color: Color.colorSalmon,
    fontSize: 13,
    lineHeight: 18,
  },
  text19: {
    color: Color.colorGray200,
  },
  label3: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    lineHeight: 24,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  label4: {
    display: "flex",
    color: Color.colorGray200,
    alignSelf: "stretch",
    alignItems: "center",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "left",
    overflow: "hidden",
    flex: 1,
  },
  labelContainer: {
    left: 135,
  },
  homeLittleIcon2: {
    left: 280,
  },
  labelParent1: {
    left: 279,
  },
  labelParent2: {
    left: -9,
  },
  bigButtonChild: {
    borderRadius: Border.br_100,
    backgroundColor: Color.colorSalmon,
  },
  bigButton: {
    left: 111,
    width: 260,
  },
  bigButton2: {
    width: 79,
    left: 21,
  },
  text25: {
    left: 204,
    fontSize: 18,
    color: Color.colorGray100,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 24,
  },
  frameIcon3: {
    left: 48,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  arrowIcon2: {
    top: 1215,
    left: 195,
  },
  heartIcon1: {
    left: 224,
  },
  heartIcon2: {
    left: 369,
  },
  heartIcon3: {
    left: 80,
  },
  view: {
    height: 1352,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorGray100,
    flex: 1,
  },
  line24: {
  top: 760,              // Arrowicon2 바로 밑으로 맞춰 위치
  left: 20,
  position: "absolute",
  width: 350,
  maxHeight: "100%",
},

});

export default GroupPurchaseDetail;