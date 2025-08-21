import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Line10 from "../../assets/line-10.svg";
import Line14 from "../../assets/line-14.svg";
import Shareicon from "../../assets/share-icon.svg";
import Hearticon from "../../assets/heart-icon.svg";
import Frame from "../../assets/frame.svg";
import card_product from "../../assets/Rectangle111141453.png";

const Color = {
  colorGray100: "#FFFFFF",
  colorDarkslategray100: "#2F4F4F",
  colorDarkslategray200: "#4F5B62",
  colorDimgray: "#666666",
  colorSalmon: "#FF7F7F",
};
const Padding = { p_8: 8, p_10: 10 };

const ProductHeader = () => {
  return (
    <>
      {/* 상단 제품 카드 */}
      <Image style={[styles.cardProductIcon, styles.iconPosition]} source={card_product} resizeMode="cover" />
      <Shareicon style={styles.shareIcon} width={22} height={24} />
      <Hearticon style={[styles.heartIcon, styles.iconLayout1]} width={24} height={24} />

      {/* 남은 시간 / 참여 버튼 */}
      <Line14 style={[styles.lineIcon, styles.iconPosition]} width={350} />
      <View style={[styles.wrapper, styles.wrapperPosition]}>
        <Text style={[styles.text3, styles.textClr]}>홍**</Text>
      </View>
      <View style={[styles.container, styles.wrapperPosition]}>
        <Text style={styles.text4}>
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
        <Text style={styles.text7}>참여</Text>
      </View>
      <Frame style={[styles.frameIcon, styles.frameIconLayout]} />
      <Line10 style={styles.inner} width={349} />
    </>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
        width: 349,
        left: 26,
        position: "absolute",
    },
  iconLayout1: {
        width: 24,
        height: 24,
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
        textAlign: "left" 
    },
  timeFlexBox: { 
        justifyContent: "center", 
        alignItems: "center" 
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
  frameIconLayout: { 
        position: "absolute", 
        overflow: "hidden", 
        maxWidth: "100%", 
        maxHeight: "100%" 
    },
  shareIcon: { 
        left: 348, 
        width: 22, 
        height: 24, 
        top: 445, 
        position: "absolute", 
        overflow: "hidden" 
    },
  cardProductIcon: { 
        top: 105, 
        height: 316 
    },
  heartIcon: {
        left: 306, 
        top: 445, 
        position: "absolute" 
    },
  lineIcon: { 
        top: 616, 
        width: 349, 
        maxHeight: "100%", 
        marginHorizontal: -7 
    },
  text3: { 
        fontWeight: "500", 
        color: Color.colorDarkslategray100, 
        lineHeight: 25, 
        fontSize: 12 
    },
  wrapper: { left: 21 },
  text5: { color: Color.colorSalmon },
  text6: { color: Color.colorDarkslategray200 },
  text4: { 
        lineHeight: 24, 
        textAlign: "left", 
        fontSize: 12, 
        fontWeight: "500" 
    },
  container: { left: 246 },
  instanceChild: { 
    borderRadius: 20, 
    backgroundColor: Color.colorSalmon 
},
  littleRectangle: { 
        top: 624,
        left: 310, 
        width: 51, 
        height: 26, 
        position: "absolute" 
    },
  text7: { 
        alignSelf: "stretch", 
        fontSize: 13, 
        color: Color.colorGray100, 
        textAlign: "left", 
        lineHeight: 24, 
        fontWeight: "500" 
    },
  frameView: { 
        top: 625, 
        left: 324, 
        position: "absolute" 
    },
  frameIcon: { 
        height: "1.69%", 
        width: "6.15%", 
        top: "4.84%", 
        right: "88.72%", 
        bottom: "93.47%", 
        left: "5.13%" 
    },
  inner: { 
        top: 658, 
        width: 349, 
        maxHeight: "100%", 
        left: 20, 
        position: "absolute" 
    },
});

export default ProductHeader;
