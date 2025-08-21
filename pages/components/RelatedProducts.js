import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Hearticon1 from "../../assets/heart-icon1.svg";
import Hearticon2 from "../../assets/heart-icon2.svg";
import Hearticon3 from "../../assets/heart-icon3.svg";
import Rectangle2 from "../../assets/Rectangle111141444.png";
import Rectangle3 from "../../assets/Rectangle11114144.png";
import Rectangle4 from "../../assets/homelittle.png";

const Color = {
  colorGray200: "#333333",
  colorDimgray: "#666666",
  colorSalmon: "#FF7F7F",
  colorDarkslategray100: "#2F4F4F",
};
const Gap = { gap_6: 6 };
const Border = { br_10: 10 };

const RelatedProducts = () => {
  return (
    <>
      <View style={styles.labelWrapper}>
        <Text style={styles.label2}>연관 추천 상품</Text>
      </View>

      {/* 썸네일들 */}
      <Image style={[styles.homeLittleIcon, styles.homeIconLayout]} source={Rectangle2} resizeMode="cover" />
      <Image style={[styles.homeLittleIcon1, styles.homeIconLayout]} source={Rectangle3} resizeMode="cover" />
      <Image style={[styles.homeLittleIcon2, styles.homeIconLayout]} source={Rectangle4} resizeMode="cover" />

      {/* 타이틀/가격 묶음 1 */}
      <View style={styles.parent1}>
        <Text style={styles.text14}>미트볼 토마토 스파게티 밀키트</Text>
        <View style={styles.parent2}>
          <Text style={styles.text15}>16%</Text>
          <Text style={styles.text16}>17,200</Text>
        </View>
        <Text style={styles.text17}>12,900원</Text>
      </View>

      {/* 묶음 2 */}
      <View style={styles.labelContainer}>
        <Text style={styles.label3}>
          <Text>
            <Text style={styles.text18}>20%</Text>
            <Text style={styles.text19}> 11,500원</Text>
          </Text>
        </Text>
        <Text style={styles.label4}>치킨 스틱 밀키트</Text>
        <Text style={styles.subText}>2명 남음</Text>
      </View>

      {/* 묶음 3 */}
      <View style={styles.labelParent1}>
        <Text style={styles.label3}>
          <Text>
            <Text style={styles.text18}>15%</Text>
            <Text style={styles.text19}> 7,500원</Text>
          </Text>
        </Text>
        <Text style={styles.label4}>바삭 군만두 밀키트</Text>
        <Text style={styles.subText}>4명 남음</Text>
      </View>

      {/* 묶음 4 */}
      <View style={styles.labelParent2}>
        <Text style={[styles.onlyPrice]}>9,800원</Text>
        <Text style={styles.label4}>등심 돈까스 밀키트</Text>
        <Text style={styles.subText}>2명 남음</Text>
      </View>

      {/* 하트 아이콘들 */}
      <Hearticon1 style={styles.heartIcon1} width={18} height={18} />
      <Hearticon2 style={styles.heartIcon2} width={18} height={18} />
      <Hearticon3 style={styles.heartIcon3} width={18} height={18} />
    </>
  );
};

const styles = StyleSheet.create({
  labelWrapper: { 
        top: 962, 
        flexDirection: "row", 
        left: 20, 
        position: "absolute", 
        height: 18, 
        justifyContent: "center", 
        alignItems: "center" 
    },
  label2: {
        width: 95,
        height: 16,
        display: "flex",
        color: Color.colorGray200,
        alignItems: "center",
        textAlign: "left",
        fontWeight: "500",
        lineHeight: 18,
        overflow: "hidden",
        fontSize: 11,
    },
  homeIconLayout: {
        height: 119, 
        width: 119, 
        top: 1004, 
        position: "absolute", 
        borderRadius: Border.br_10 
    },
  homeLittleIcon: { left: -9 },
  homeLittleIcon1: { left: 135 },
  homeLittleIcon2: { left: 280 },
  parent1: { 
        top: 445, 
        position: "absolute", 
        width: 202, 
        height: 72, 
        left: 20
    },
  text14: { 
        width: 210, 
        color: Color.colorGray200, 
        left: 0, 
        position: "absolute", 
        top: 0, 
        textAlign: "left", 
        fontWeight: "500", 
        lineHeight: 24 
    },
  parent2: { 
        top: 22, 
        gap: 4, 
        alignItems: "center", 
        flexDirection: "row", 
        left: 0, 
        position: "absolute" 
    },
  text15: { 
        width: 30, 
        color: Color.colorSalmon, 
        fontSize: 14, 
        lineHeight: 24, 
        textAlign: "left" 
    },
  text16: { 
        textDecorationLine: "line-through", 
        color: Color.colorDarkslategray100, 
        textAlign: "left", 
        fontSize: 14 
    },
  text17: { 
        top: 45, 
        fontSize: 18, 
        width: 137, 
        color: Color.colorSalmon, 
        textAlign: "left", 
        fontWeight: "500", 
        lineHeight: 24, 
        left: 0, 
        position: "absolute" 
    },
  text18: { 
        color: Color.colorSalmon, 
        fontSize: 13, 
        lineHeight: 18 
    },
  text19: { color: Color.colorGray200 },
  label3: { 
        display: "flex", 
        alignSelf: "stretch", 
        alignItems: "center", 
        lineHeight: 24, 
        textAlign: "left", 
        overflow: "hidden", 
        flex: 1 
    },
  label4: { 
        display: "flex", 
        color: Color.colorGray200, 
        alignSelf: "stretch", 
        alignItems: "center", 
        fontSize: 13, 
        lineHeight: 18, 
        textAlign: "left", 
        overflow: "hidden", flex: 1 
    },
  subText: { 
        height: 14, 
        display: "flex", 
        alignSelf: "stretch", 
        alignItems: "center", 
        color: Color.colorDimgray, 
        lineHeight: 18, 
        textAlign: "left", 
        fontSize: 11 
    },
  labelContainer: { 
        gap: Gap.gap_6, 
        height: 56, 
        top: 1134, 
        width: 119, 
        position: "absolute", 
        left: 135 
    },
  labelParent1: { 
        gap: Gap.gap_6, 
        height: 56, 
        top: 1134, 
        width: 119, 
        position: "absolute", 
        left: 279 
    },
  labelParent2: { 
        gap: Gap.gap_6, 
        height: 56, 
        top: 1134, 
        width: 119, 
        position: "absolute", 
        left: -9 
    },
  onlyPrice: { 
        display: "flex",
        color: Color.colorGray200, 
        alignSelf: "stretch", 
        alignItems: "center", 
        textAlign: "left", 
        fontWeight: "500", 
        lineHeight: 18, 
        overflow: "hidden", 
        flex: 1, 
        fontSize: 16 
    },
  heartIcon1: { 
        top: 1016, 
        width: 18, 
        height: 18, 
        position: "absolute", 
        left: 224 
    },
  heartIcon2: { 
        top: 1016, 
        width: 18, 
        height: 18, 
        position: "absolute", 
        left: 369
    },
  heartIcon3: { 
        top: 1016, 
        width: 18, 
        height: 18, 
        position: "absolute", 
        left: 80 
    },
});

export default RelatedProducts;
