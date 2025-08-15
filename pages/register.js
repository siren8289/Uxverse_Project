import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import IconCellular from "../assets/Cellular-Connection.svg";
import IconWifi from "../assets/Wifi.svg";
import IconBackArrow from "../assets/frame.svg";
import IconCamera from "../assets/frame1.svg";
import DividerLine14 from "../assets/line-14.svg";
import DividerLine15 from "../assets/line-15.svg";
import DividerLine16 from "../assets/line-16.svg";
import IconMarker from "../assets/vector-456.svg";
import IconPackage from "../assets/vector-457.svg";

import DescriptionBox from "./components/DescriptionBox";
import BigButton from "./components/BigButton";
import TradeRow from "./components/TradeRow"; 

const FontFamily = {
  notoSansMedium: "NotoSansMedium",
  notoSansKRMedium: "NotoSansKRMedium",
  sFPro: "SF Pro",
};

const FontSize = {
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
};
const Color = {
  colorSalmon: "#ff736d",
  colorGainsboro: "#d9d9d9",
  colorGray100: "#fbfbfb",
  colorGray200: "#949393",
  colorDimgray: "#5a5a5a",
  colorBlack: "#000",
};
const Padding = { p_6: 6, p_16: 16 };
const Border = { br_10: 10, br_100: 100 };

const Register = () => {
  return (
    <SafeAreaView style={styles.register}>
      <View style={styles.view}>
        {/* 상태바
        <View style={[styles.statusBarIphone, styles.homeIndicatorPosition]}>
          <View style={styles.frame}>
            <View style={[styles.time, styles.timeFlexBox]}>
              <Text style={styles.time1}>9:41</Text>
            </View>
            <View style={[styles.dynamicIslandSpacer, styles.timeFlexBox]} />
            <View style={[styles.levels, styles.timeFlexBox]}>
              <IconCellular width={19} height={12} />
              <IconWifi width={17} height={12} />
              <View style={styles.battery}>
                <View style={styles.border} />
                <View style={[styles.capacity, styles.child1Layout]} />
              </View>
            </View>
          </View>
        </View> */}

        {/* 헤더 */}
        <Text style={[styles.text, styles.textTypo5]}>렌탈/공유 등록하기</Text>
        <IconBackArrow style={[styles.frameIcon, styles.frameIconPosition]} />

        {/* 이미지 업로드 영역 */}
        <View style={styles.inner}>
          <View style={styles.instanceChild} />
        </View>
        <IconCamera style={[styles.frameIcon1, styles.frameIconPosition]} width={36} height={36} />
        <View style={[styles.wrapper, styles.timeFlexBox]}>
          <Text style={[styles.text1, styles.textTypo3]}>3/10</Text>
        </View>

        {/* 상품명 */}
        <Text style={[styles.text2, styles.textTypo3]}>상품명</Text>
        <DividerLine14 style={[styles.child, styles.itemLayout]} width={349} />

        {/* 카테고리 */}
        <Text style={[styles.text3, styles.textTypo3]}>카테고리</Text>
        <DividerLine15 style={[styles.item, styles.itemLayout]} width={349} />

        {/* 설명 */}
        <Text style={[styles.text4, styles.textTypo5]}>설명</Text>
        <View style={{ position: "absolute", top: 388, left: 20, width: 350, height: 150 }}>
          <DescriptionBox />
        </View>

        {/* 가격 */}
        <Text style={[styles.text8, styles.textTypo3]}>가격</Text>
        <DividerLine16 style={[styles.lineIcon, styles.itemLayout]} width={349} />

        {/* 거래방법 */}
        <Text style={[styles.text9, styles.textTypo5]}>거래방법</Text>

        <View style={styles.tradeSection}>
          <TradeRow />
        </View>

        {/* 등록 버튼 */}
        <View style={styles.view1}>
          <BigButton />
        </View>

        {/* 하단 인디케이터 */}
        {/* <View style={[styles.homeIndicator, styles.homeIndicatorPosition]}>
          <View style={styles.homeIndicator1} />
        </View> */}

        {/* 하단 아이콘들 */}
        <IconMarker style={[styles.child1, styles.child1Layout]} width={21} height={21} />
        <IconPackage style={[styles.child2, styles.rectangleLayout]} width={27} height={30} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  register: { 
      backgroundColor: Color.colorGray100, 
      flex: 1 
  },
  homeIndicatorPosition: { 
      width: 390, 
      left: 0, 
      position: "absolute" 
  },
  timeFlexBox: {
      justifyContent: "center", 
      alignItems: "center" 
    },
  child1Layout: { 
      width: 21,
      position: "absolute" 
  },
  textTypo5: {
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.notoSansKRMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_16,
    position: "absolute",
  },
  frameIconPosition: { 
      overflow: "hidden", 
      position: "absolute" 
  },
  textTypo3: { 
      color: Color.colorGainsboro, 
      textAlign: "left", 
      fontWeight: "500", 
      lineHeight: 24
  },
  itemLayout: { 
      width: 349, 
      left: 20, 
      maxHeight: "100%", 
      position: "absolute" 
  },
  textTypo1: { 
      color: Color.colorGray100, 
      fontFamily: FontFamily.notoSansKRMedium, 
      fontWeight: "500", 
      lineHeight: 24 
  },
  time1: { 
      fontSize: 17, 
      lineHeight: 22, 
      fontWeight: "600", 
      fontFamily: FontFamily.sFPro, 
      color: Color.colorBlack, 
      textAlign: "center" 
  },
  time: { 
      paddingLeft: Padding.p_16, 
      paddingRight: Padding.p_6, 
      flexDirection: "row", 
      justifyContent: "center", 
      flex: 1 
  },
  dynamicIslandSpacer: { 
      width: 124, 
      height: 10 
  },
  cellularConnectionIcon: { 
      width: 19, 
      height: 12 
  },
  wifiIcon: { 
      width: 17, 
      height: 12 
  },
  border: {
      marginLeft: -13.65,
      borderRadius: 4,
      borderColor: Color.colorBlack,
      width: 25,
      opacity: 0.35,
      borderWidth: 1,
      borderStyle: "solid",
      left: "50%",
      bottom: "0%",
      top: "0%",
      height: "100%",
      position: "absolute",
  },
  capacity: { 
      height: "69.23%", 
      marginLeft: -11.65,
      top: "15.38%", 
      bottom: "15.38%", 
      borderRadius: 3, 
      backgroundColor: Color.colorBlack, 
      left: "50%" 
  },
  battery: { 
      height: 13, 
      width: 27 
  },
  levels: { 
      paddingLeft: Padding.p_6, 
      paddingRight: Padding.p_16, 
      gap: 7, 
      flexDirection: "row",
      justifyContent: "center", 
      flex: 1 
  },
  frame: { 
      alignSelf: "stretch", 
      justifyContent: "space-between", 
      gap: 0, 
      alignItems: "center", 
      flexDirection: "row" 
  },
  statusBarIphone: { 
      height: 50, 
      paddingTop: 21, 
      top: 0, 
      width: 390 
  },
  text: { 
      top: 67,
      left: 131, 
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
      left: "5.13%",
  },
  instanceChild: {
      borderWidth: 0.8,
      borderColor: Color.colorGainsboro,
      borderRadius: Border.br_10,
      left: "0%",
      right: "0%",
      borderStyle: "solid",
      bottom: "0%",
      top: "0%",
      height: "100%",
      position: "absolute",
      width: "100%",
  },
  inner: { 
      top: 118, 
      width: 92, 
      height: 87, 
      left: 20, 
      position: "absolute" 
  },
  frameIcon1: { 
      top: 138, 
      left: 48, 
      width: 36, 
      height: 36 
  },
  text1: { 
      width: 22, 
      fontFamily: FontFamily.notoSansMedium, 
      fontSize: FontSize.size_10 
  },
  wrapper: { 
      top: 175, 
      left: 49, 
      width: 35, 
      height: 13, 
      position: "absolute" 
  },
  text2: { 
      top: 229, 
      left: 20, 
      fontFamily: FontFamily.notoSansKRMedium, 
      fontSize: FontSize.size_16, 
      color: Color.colorGainsboro,
      position: "absolute" 
  },
  child: { top: 261 },
  text3: { 
      top: 285, 
      left: 20, 
      fontFamily: FontFamily.notoSansKRMedium, 
      fontSize: FontSize.size_16, 
      color: Color.colorGainsboro, 
      position: "absolute" 
  },
  item: { top: 317 },
  text4: { 
      top: 349, 
      left: 20, 
      textAlign: "left" 
  },
  text8: { 
      top: 555, 
      left: 20, 
      fontFamily: FontFamily.notoSansKRMedium, 
      fontSize: FontSize.size_16, 
      color: Color.colorGainsboro, 
      position: "absolute" 
  },
  lineIcon: { top: 587 },

  text9: { 
      top: 619, 
      left: 20, 
      textAlign: "left" 
  },
  tradeSection: {
      position: "absolute",
      left: 20,
      top: 652, 
      width: 350,
  },
  view1: {
      top: 798,
      alignSelf: "center",
      paddingHorizontal: 0,
      paddingVertical: 22,
      gap: 10,
  },
  homeIndicator1: { 
      marginLeft: 72, 
      bottom: 8, 
      width: 144, 
      height: 5, 
      transform: [{ rotate: "180deg" }], 
      backgroundColor: Color.colorBlack, 
      left: "50%" 
  },
  homeIndicator: { 
      top: 862, 
      height: 34 
  },
  text18: { 
      top: 655, 
      left: 293, 
      fontSize: FontSize.size_12, 
      textAlign: "center", 
      position: "absolute" 
  },
  child1: { 
      top: 736, 
      left: 155, 
      height: 21 
  },
  child2: { 
      top: 729, 
      left: 160, 
      width: 27 
  },
  view: { 
      height: 896, 
      width: "100%", 
      backgroundColor: Color.colorGray100, 
      flex: 1 },
});

export default Register;
