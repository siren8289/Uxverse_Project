import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Arrowicon2 from "../../assets/arrow-icon2.svg";
import Line24 from "../../assets/line-24.svg";

const Color = {
  colorGray100: "#FFFFFF",
  colorGray200: "#333333",
  colorDimgray: "#666666",
};
const Gap = { gap_8: 8 };

const DescriptionSection = () => {
  return (
    <>
      <View style={styles.labelParent}>
        <Text style={styles.descriptionLabel}>제품 설명</Text>
        <Text style={styles.descriptionText}>
          탱글한 면발과 촉촉한 미트볼이 어우러진 정통 토마토 스파게티 밀키트{"\n"}
          입니다. 간편하게 조리해도 레스토랑 퀄리티의 깊은 맛을 즐길 수 있어요.
        </Text>
      </View>
      <Arrowicon2 style={styles.arrowIcon} width={8} height={8} />
      <Line24 style={styles.line24} width={350} />
    </>
  );
};

const styles = StyleSheet.create({
  descriptionLabel: {
        fontSize: 14,
        fontWeight: "600",
        color: Color.colorGray200,
        textAlign: "left",
        marginLeft: 4,
    },
  descriptionText: {
        lineHeight: 18,
        alignSelf: "stretch",
        color: Color.colorDimgray,
        fontSize: 11,
        fontWeight: "500",
        textAlign: "left",
        marginLeft: 4,
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
  arrowIcon: { 
        top: 678, 
        left: 352, 
        width: 18, 
        height: 18, 
        position: "absolute", 
        overflow: "hidden" 
    },
  line24: {
        top: 760, // Arrowicon2 바로 밑
        left: 20,
        position: "absolute",
        width: 350,
        maxHeight: "100%",
    },
});

export default DescriptionSection;
