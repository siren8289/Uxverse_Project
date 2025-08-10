import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cellularconnection from "../assets/cellular-connection.svg";
import Wifi from "../assets/wifi.svg";
import Cap from "../assets/cap.svg";
import Frame from "../assets/frame.svg";
import Frame1 from "../assets/frame1.svg";
import Line14 from "../assets/line-14.svg";
import Line15 from "../assets/line-15.svg";
import Line16 from "../assets/line-16.svg";
import Ellipse172 from "../assets/ellipse-172.svg";
import Vector from "../assets/vector.svg";
import Vector1 from "../assets/vector1.svg";
import Vector2 from "../assets/vector2.svg";
import Vector456 from "../assets/vector-456.svg";
import Vector457 from "../assets/vector-457.svg";

// ✅ GlobalStyles.js 없이 사용할 로컬 상수
const COLORS = {
  dimgray: "#6B6B6B",
  gainsboro: "#D9D9D9",
  gray100: "#FFFFFF",
  gray200: "#BDBDBD",
  black: "#000000",
  salmon: "#FF8C7A",
};

const FONTS = {
  notoKR: "Noto Sans KR",
  noto: "Noto Sans",
  sfPro: "SF Pro",
};

const Register = () => {
  return (
    <SafeAreaView style={styles.register}>
      <View style={styles.view}>
        <View style={[styles.statusBarIphone, styles.homeIndicatorPosition]}>
          <View style={styles.frame}>
            <View style={[styles.time, styles.timeFlexBox]}>
              <Text style={styles.time1}>9:41</Text>
            </View>
            <View style={[styles.dynamicIslandSpacer, styles.timeFlexBox]} />
            <View style={[styles.levels, styles.timeFlexBox]}>
              <Cellularconnection style={styles.cellularConnectionIcon} width={19} height={12} />
              <Wifi style={styles.wifiIcon} width={17} height={12} />
              <View style={styles.battery}>
                <View style={styles.border} />
                <Cap style={styles.capIcon} />
                <View style={[styles.capacity, styles.child1Layout]} />
              </View>
            </View>
          </View>
        </View>

        <Text style={[styles.text, styles.textTypo5]}>렌탈/공유 등록하기</Text>
        <Frame style={[styles.frameIcon, styles.frameIconPosition]} />
        <View style={styles.inner}>
          <View style={styles.instanceChild} />
        </View>
        <Frame1 style={[styles.frameIcon1, styles.frameIconPosition]} width={36} height={36} />
        <View style={[styles.wrapper, styles.timeFlexBox]}>
          <Text style={[styles.text1, styles.textTypo3]}>3/10</Text>
        </View>
        <Text style={[styles.text2, styles.textTypo3]}>상품명</Text>
        <Line14 style={[styles.child, styles.itemLayout]} width={349} />
        <Text style={[styles.text3, styles.textTypo3]}>카테고리</Text>
        <Line15 style={[styles.item, styles.itemLayout]} width={349} />
        <Text style={[styles.text4, styles.textTypo5]}>설명</Text>

        <View style={styles.rectangleParent}>
          <View style={styles.instanceItem} />
          <View style={[styles.container, styles.timeFlexBox]}>
            <Text style={[styles.text5, styles.textTypo4]}>0/2000</Text>
          </View>
          <Text style={[styles.text6, styles.textTypo6]}>{`본인 연락처, 계좌번호 등 개인정보 입력 시 등록이 제한될 수 있어요.
`}</Text>
          <Text style={[styles.text7, styles.textTypo6]}>
            거래 목적 외의 링크, 광고 문구 등은 삭제될 수 있어요.
          </Text>
        </View>

        <Text style={[styles.text8, styles.textTypo3]}>가격</Text>
        <Line16 style={[styles.lineIcon, styles.itemLayout]} width={349} />
        <Text style={[styles.text9, styles.textTypo5]}>거래방법</Text>
        <Text style={[styles.text10, styles.textTypo2]}>택배거래</Text>
        <Text style={[styles.text11, styles.textTypo1]}>별도</Text>

        <View style={[styles.rectangleView, styles.rectangleLayout]}>
          <View style={[styles.instanceInner, styles.instanceBorder]} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.instanceChild1, styles.instanceBorder]} />
          <Text style={[styles.text12, styles.textTypo6]}>포함</Text>
        </View>

        <Ellipse172 style={styles.ellipseIcon} width={18} height={18} />
        <Vector style={[styles.vectorIcon, styles.frameIconPosition]} />
        <Text style={[styles.text13, styles.textTypo]}>직거래</Text>
        <Text style={[styles.text14, styles.textTypo]}>+ 지역설정</Text>

        <Vector1 style={[styles.vectorIcon1, styles.vectorIconLayout]} />
        <Text style={[styles.text15, styles.textTypo2]}>편의점 픽업</Text>
        <Vector2 style={[styles.vectorIcon2, styles.vectorIconLayout]} />
        <Text style={[styles.text16, styles.textTypo6]}>+ 지역설정</Text>

        <View style={[styles.view1, styles.view1Layout]}>
          <View style={[styles.bigButton, styles.view1Layout]}>
            <View style={[styles.bigButtonChild, styles.bigButtonChildLayout]} />
          </View>
          <View style={[styles.frameView, styles.timeFlexBox]}>
            <Text style={[styles.text17, styles.textTypo1]}>등록하기</Text>
          </View>
        </View>

        <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
          <View style={[styles.homeIndicator1, styles.bigButtonChildLayout]} />
        </View>

        <Text style={[styles.text18, styles.textTypo1]}>별도</Text>
        <Vector456 style={[styles.child1, styles.child1Layout]} width={21} height={21} />
        <Vector457 style={[styles.child2, styles.rectangleLayout]} width={27} height={30} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  register: {
    backgroundColor: COLORS.gray100,
    flex: 1
  },
  homeIndicatorPosition: {
    width: "390px",
    left: "0px",
    position: "absolute"
  },
  timeFlexBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  child1Layout: {
    width: "21px",
    position: "absolute"
  },
  textTypo5: {
    color: COLORS.dimgray,
    textAlign: "left",
    fontFamily: FONTS.notoKR,
    fontWeight: "500",
    lineHeight: "24px",
    fontSize: "16px",
    position: "absolute"
  },
  frameIconPosition: {
    overflow: "hidden",
    position: "absolute"
  },
  textTypo3: {
    color: COLORS.gainsboro,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: "24px"
  },
  itemLayout: {
    width: "349px",
    left: "20px",
    maxHeight: "100%",
    position: "absolute"
  },
  textTypo4: {
    fontFamily: FONTS.noto,
    fontSize: "10px"
  },
  textTypo6: {
    fontWeight: "500",
    lineHeight: "24px"
  },
  textTypo2: {
    fontSize: "14px",
    left: "53px",
    color: COLORS.dimgray
  },
  textTypo1: {
    color: COLORS.gray100,
    fontFamily: FONTS.notoKR,
    fontWeight: "500",
    lineHeight: "24px"
  },
  rectangleLayout: {
    height: "30px",
    position: "absolute"
  },
  instanceBorder: {
    borderColor: COLORS.salmon,
    borderRadius: "100px",
    borderWidth: "0.8px",
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute"
  },
  textTypo: {
    top: "699px",
    textAlign: "left",
    fontFamily: FONTS.notoKR,
    fontWeight: "500",
    lineHeight: "24px",
    position: "absolute"
  },
  vectorIconLayout: {
    width: "4.62%",
    height: "2.02%",
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute"
  },
  view1Layout: {
    height: "62px",
    width: "350px",
    position: "absolute"
  },
  bigButtonChildLayout: {
    borderRadius: "100px",
    position: "absolute"
  },
  time1: {
    width: "37px",
    height: "22px",
    fontSize: "17px",
    lineHeight: "22px",
    fontWeight: "600",
    fontFamily: FONTS.sfPro,
    color: COLORS.black,
    textAlign: "center"
  },
  time: {
    paddingLeft: "16px",
    paddingRight: "6px",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1
  },
  dynamicIslandSpacer: {
    width: "124px",
    height: "10px"
  },
  cellularConnectionIcon: {
    width: "19.2px",
    height: "12.23px"
  },
  wifiIcon: {
    width: "17.14px",
    height: "12.33px"
  },
  border: {
    marginLeft: "-13.65px",
    borderRadius: "4px",
    borderColor: COLORS.black,
    width: "25px",
    opacity: 0.35,
    borderWidth: "1px",
    borderStyle: "solid",
    left: "50%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute"
  },
  capIcon: {
    height: "31.54%",
    marginLeft: "12.35px",
    top: "36.78%",
    bottom: "31.68%",
    width: "1px",
    opacity: 0.4,
    maxHeight: "100%",
    left: "50%",
    position: "absolute"
  },
  capacity: {
    height: "69.23%",
    marginLeft: "-11.65px",
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: "3px",
    backgroundColor: COLORS.black,
    left: "50%"
  },
  battery: {
    height: "13px",
    width: "27.33px"
  },
  levels: {
    paddingLeft: "6px",
    paddingRight: "16px",
    gap: "7px",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1
  },
  frame: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: "0px",
    alignItems: "center",
    flexDirection: "row"
  },
  statusBarIphone: {
    height: "50px",
    paddingTop: "21px",
    top: "0px",
    width: "390px"
  },
  text: {
    top: "67px",
    left: "131px",
    textAlign: "left"
  },
  frameIcon: {
    height: "2.85%",
    width: "6.15%",
    top: "7.82%",
    right: "88.72%",
    bottom: "89.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    left: "5.13%"
  },
  instanceChild: {
    borderWidth: "0.8px",
    borderColor: COLORS.gainsboro,
    borderRadius: "10px",
    left: "0%",
    right: "0%",
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%"
  },
  inner: {
    top: "118px",
    width: "92px",
    height: "87px",
    left: "20px",
    position: "absolute"
  },
  frameIcon1: {
    top: "138px",
    left: "48px",
    width: "36px",
    height: "36px"
  },
  text1: {
    width: "22px",
    fontFamily: FONTS.noto,
    fontSize: "10px"
  },
  wrapper: {
    top: "175px",
    left: "49px",
    width: "35px",
    height: "13px",
    position: "absolute"
  },
  text2: {
    top: "229px",
    left: "20px",
    fontFamily: FONTS.notoKR,
    fontSize: "16px",
    color: COLORS.gainsboro,
    position: "absolute"
  },
  child: {
    top: "261px"
  },
  text3: {
    top: "285px",
    left: "20px",
    fontFamily: FONTS.notoKR,
    fontSize: "16px",
    color: COLORS.gainsboro,
    position: "absolute"
  },
  item: {
    top: "317px"
  },
  text4: {
    top: "349px",
    left: "20px",
    textAlign: "left"
  },
  instanceItem: {
    backgroundColor: COLORS.gainsboro,
    borderColor: COLORS.gainsboro,
    borderRadius: "10px",
    left: "0%",
    right: "0%",
    borderWidth: "1px",
    borderStyle: "solid",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%"
  },
  text5: {
    width: "34px",
    color: COLORS.gray200,
    textAlign: "left",
    fontWeight: "500",
    lineHeight: "24px"
  },
  container: {
    height: "6.3%",
    width: "9.71%",
    top: "87.4%",
    right: "4.76%",
    bottom: "6.3%",
    left: "85.52%",
    position: "absolute"
  },
  text6: {
    height: "37.8%",
    width: "90.57%",
    top: "14.08%",
    left: "4.52%",
    fontSize: "12px",
    color: COLORS.gray200,
    textAlign: "left",
    fontFamily: FONTS.notoKR,
    position: "absolute"
  },
  text7: {
    width: "90.49%",
    top: "58.27%",
    left: "4.57%",
    fontSize: "12px",
    color: COLORS.gray200,
    textAlign: "left",
    fontFamily: FONTS.notoKR,
    position: "absolute"
  },
  rectangleParent: {
    top: "388px",
    height: "127px",
    width: "350px",
    left: "20px",
    position: "absolute"
  },
  text8: {
    top: "555px",
    left: "20px",
    fontFamily: FONTS.notoKR,
    fontSize: "16px",
    color: COLORS.gainsboro,
    position: "absolute"
  },
  lineIcon: {
    top: "587px"
  },
  text9: {
    top: "619px",
    left: "20px",
    textAlign: "left"
  },
  text10: {
    top: "659px",
    textAlign: "left",
    position: "absolute",
    fontFamily: FONTS.notoKR,
    fontWeight: "500",
    lineHeight: "24px"
  },
  text11: {
    left: "289px",
    top: "659px",
    textAlign: "left",
    position: "absolute",
    fontSize: "10px",
    color: COLORS.gray100
  },
  instanceInner: {
    width: "96.08%",
    right: "0.08%",
    left: "3.85%",
    backgroundColor: COLORS.salmon
  },
  rectangleView: {
    left: "279px",
    width: "51px",
    top: "652px",
    height: "30px"
  },
  instanceChild1: {
    left: "0%",
    right: "0%",
    width: "100%"
  },
  text12: {
    width: "46.08%",
    top: "10%",
    left: "27.45%",
    color: COLORS.salmon,
    fontSize: "12px",
    fontFamily: FONTS.notoKR,
    textAlign: "center",
    position: "absolute"
  },
  rectangleGroup: {
    left: "334px",
    width: "51px",
    top: "652px",
    height: "30px"
  },
  ellipseIcon: {
    top: "662px",
    width: "18px",
    height: "18px",
    left: "20px",
    position: "absolute"
  },
  vectorIcon: {
    height: "0.74%",
    width: "2.46%",
    top: "74.55%",
    right: "91.14%",
    bottom: "24.72%",
    left: "6.4%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%"
  },
  text13: {
    fontSize: "14px",
    left: "53px",
    color: COLORS.dimgray
  },
  text14: {
    left: "315px",
    fontSize: "12px",
    color: COLORS.gray200
  },
  vectorIcon1: {
    top: "78.34%",
    right: "90.16%",
    bottom: "19.64%",
    left: "5.23%"
  },
  text15: {
    top: "739px",
    textAlign: "left",
    fontFamily: FONTS.notoKR,
    fontWeight: "500",
    lineHeight: "24px",
    position: "absolute"
  },
  vectorIcon2: {
    top: "82.81%",
    right: "90.26%",
    bottom: "15.17%",
    left: "5.13%"
  },
  text16: {
    top: "742px",
    left: "316px",
    fontSize: "12px",
    color: COLORS.gray200,
    textAlign: "left",
    fontFamily: FONTS.notoKR,
    position: "absolute"
  },
  bigButtonChild: {
    backgroundColor: COLORS.salmon,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    borderRadius: "100px"
  },
  bigButton: {
    zIndex: 0,
    left: "0px",
    height: "62px",
    top: "0px"
  },
  text17: {
    fontSize: "20px",
    textAlign: "left"
  },
  frameView: {
    width: "90px",
    zIndex: 1,
    height: "18px",
    flexDirection: "row",
    justifyContent: "center"
  },
  view1: {
    top: "798px",
    paddingHorizontal: "130px",
    paddingVertical: "22px",
    gap: "10px",
    left: "20px"
  },
  homeIndicator1: {
    marginLeft: "72px",
    bottom: "8px",
    width: "144px",
    height: "5px",
    transform: [{ rotate: "180deg" }],
    backgroundColor: COLORS.black,
    left: "50%"
  },
  homeIndicator: {
    top: "862px",
    height: "34px"
  },
  text18: {
    top: "655px",
    left: "293px",
    fontSize: "12px",
    textAlign: "center",
    position: "absolute"
  },
  child1: {
    top: "736px",
    left: "155px",
    height: "21px"
  },
  child2: {
    top: "729px",
    left: "160px",
    width: "27px"
  },
  view: {
    height: "896px",
    width: "100%",
    backgroundColor: COLORS.gray100,
    flex: 1
  }
});

export default Register;
