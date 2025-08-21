import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Line26 from "../../assets/line-26.svg";
import Frame3 from "../../assets/frame3.svg";
import Arrowicon2 from "../../assets/arrow-icon2.svg";

const Color = {
  colorSalmon: "#FF7F7F",
  colorGray100: "#FFFFFF",
};
const Border = { br_100: 100 };

const BottomActions = () => {
  return (
    <>
      <Line26 style={styles.divider} width={350} />
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
      <Text style={styles.ctaText}>참여하기</Text>
      <Frame3 style={styles.ctaIcon} width={24} height={24} />
      <Arrowicon2 style={styles.arrowIcon2} width={8} height={8} />
    </>
  );
};

const styles = StyleSheet.create({
  divider: { 
        top: 1214, 
        maxHeight: "100%", 
        width: 349, 
        left: 26, 
        position: "absolute" 
    },
  childPosition: { 
        left: "0%", 
        right: "0%", 
        bottom: "0%", 
        top: "0%", 
        height: "100%", 
        position: "absolute", 
        width: "100%" 
    },
  bigButtonChild: { 
        borderRadius: Border.br_100, 
        backgroundColor: Color.colorSalmon 
    },

  bigPosition: { 
        height: 62, 
        top: 1240, 
        position: "absolute" 
    },
  bigButton: { 
        left: 111, 
        width: 260 
    },
  bigButton2: { 
        width: 79, 
        left: 21 
    },
  ctaText: { 
        left: 204, 
        fontSize: 18, 
        color: Color.colorGray100, 
        textAlign: "left", 
        fontWeight: "500",
        lineHeight: 24, 
        top: 1259, 
        position: "absolute" 
    },
  ctaIcon: { 
        left: 48, 
        width: 24, 
        height: 24, 
        overflow: "hidden", 
        top: 1259, 
        position: "absolute" 
    },
  arrowIcon2: { 
        top: 1215, 
        left: 195, 
        width: 18, 
        height: 18, 
        position: "absolute", 
        overflow: "hidden" 
    },
});

export default BottomActions;
