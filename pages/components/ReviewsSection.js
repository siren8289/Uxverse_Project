import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Arrowicon from "../../assets/arrow-icon.svg";
import Frame1 from "../../assets/frame1.svg";
import Frame2 from "../../assets/frame2.svg";
import Rectangle from "../../assets/Rectangle111141511.png";
import Rectangle1 from "../../assets/Rectangle111141512.png";

const Color = {
  colorGray200: "#333333",
  colorDimgray: "#666666",
  colorGainsboro100: "#E6E6E6",
};
const Border = { br_10: 10 };
const Gap = { gap_6: 6, gap_8: 8 };

const ReviewsSection = () => {
  return (
    <>
      <View style={styles.reviewIcon}>
        <View style={[styles.reviewIconChild, styles.childPosition]} />
        <Image style={[styles.reviewIconItem, styles.iconLayout]} source={Rectangle} resizeMode="cover" />
      </View>

      <View style={styles.frameParent}>
        <View style={styles.labelGroup}>
          <Text style={styles.label}>리뷰 15</Text>
          <Text style={styles.subText}>82%가 만족한 상품입니다</Text>
        </View>
        <View style={styles.wrapper1}>
          <Text style={styles.text9}>전체보기</Text>
          <Arrowicon style={styles.seeMoreIcon} width={8} height={8} />
        </View>
      </View>

      <View style={styles.reviewIcon1}>
        <View style={[styles.reviewIconChild, styles.childPosition]} />
        <Image style={[styles.reviewIconItem, styles.iconLayout]} source={Rectangle1} resizeMode="cover" />
      </View>

      <View style={[styles.parent, styles.groupFlexBox]}>
        <Text style={styles.text10}>만족해요</Text>
        <Frame1 style={styles.frameIcon1} width={14} height={14} />
        <Text style={styles.text11}>진짜 맛집 퀄리티!</Text>
      </View>

      <View style={[styles.group, styles.groupFlexBox]}>
        <Text style={styles.text10}>만족해요</Text>
        <Frame2 style={styles.frameIcon1} width={14} height={14} />
        <Text style={styles.text11}>미트볼이 엄청 촉촉!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  childPosition: { 
      left: "0%", 
      right: "0%", 
      bottom: "0%", 
      top: "0%",
      height: "100%", 
      position: "absolute", 
      width: "100%" 
    },
  iconLayout: { 
      maxWidth: "100%", 
      maxHeight: "100%", 
      position: "absolute",
      overflow: "hidden" 
    },
  reviewIcon: { 
      height: 84, 
      top: 838, 
      width: 248, 
      position: "absolute", 
      left: 20 
    },
  reviewIcon1: { 
      height: 84, 
      top: 838, 
      width: 248, 
      position: "absolute", 
      left: 280 
    },
  reviewIconChild: { 
      borderColor: Color.colorGainsboro100, 
      borderWidth: 1, 
      borderStyle: "solid", 
      borderRadius: Border.br_10 
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
  frameParent: { 
      top: 785, 
      width: 360, 
      gap: 32, 
      flexDirection: "row", 
      left: 20, 
      position: "absolute" 
    },
  labelGroup: { 
      height: 38, 
      width: 248, 
      gap: Gap.gap_8 
    },
  label: { 
      textAlign: "left", 
      fontWeight: "500", 
      fontSize: 15, 
      color: Color.colorGray200, 
      lineHeight: 18 
    },
  subText: { 
      height: 14,
      display: "flex", 
      alignItems: "center", 
      color: Color.colorDimgray, 
      lineHeight: 18, 
      textAlign: "left", 
      fontSize: 11, 
      alignSelf: "stretch" 
    },
  wrapper1: { 
      height: 18, 
      justifyContent: "center", 
      alignItems: "center",
      flexDirection: "row" 
    },
  text9: { 
      height: 21,
      display: "flex", 
      textAlign: "center", 
      color: Color.colorDimgray, 
      fontSize: 11, 
      justifyContent: "center", 
      alignItems: "center" 
    },
  seeMoreIcon: { 
      marginLeft: 4, 
      alignSelf: "center"
    },
  groupFlexBox: { 
      columnGap: 2, 
      rowGap: Gap.gap_8, 
      alignContent: "flex-start", 
      flexWrap: "wrap", 
      top: 863, 
      width: 154, 
      flexDirection: "row", 
      position: "absolute" 
    },
  text10: { 
      width: 52,
      height: 15, 
      display: "flex", 
      alignItems: "center", 
      fontSize: 14, 
      color: Color.colorDimgray, 
      lineHeight: 14, 
      textAlign: "left" 
    },
  frameIcon1: { 
      width: 14, 
      height: 14, 
      overflow: "hidden", 
      marginLeft: -4 
    },
  text11: { 
      width: 154, 
      height: 12, 
      display: "flex", 
      alignItems: "center", 
      textAlign: "left", 
      color: Color.colorDimgray, 
      fontWeight: "500", 
      lineHeight: 12, 
      fontSize: 11 
    },
  parent: { left: 364 },
  group: { left: 104 },
});

export default ReviewsSection;
