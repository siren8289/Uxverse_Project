import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

/* Fonts */
const FontFamily = {
  notoSansMedium: "NotoSansMedium",
  notoSansKRMedium: "NotoSansKRMedium",
};
/* Font sizes */
const FontSize = {
  size_12: 12,
};
/* Colors */
const Color = {
  colorGainsboro: "#d9d9d9",
  colorGray: "#949393",
};

const Group123219 = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.view}>
        <View style={styles.child} />
        <View style={styles.wrapper}>
          <Text style={styles.text}>0/2000</Text>
        </View>
        <Text style={[styles.text1, styles.textTypo]}>
          {`본인 연락처, 계좌번호 등 개인정보 입력 시 등록이 제한될 수 있어요.`}
        </Text>
        <Text style={[styles.text2, styles.textTypo]}>
          거래 목적 외의 링크, 광고 문구 등은 삭제될 수 있어요.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.notoSansKRMedium,
    fontSize: FontSize.size_12,
    textAlign: "left",
    color: Color.colorGray,
    fontWeight: "500",
    lineHeight: 24,
    position: "absolute",
  },
  child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: Color.colorGainsboro,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    position: "absolute",
    width: "100%",
  },
  text: {
    width: 34,
    fontSize: 10,
    fontFamily: FontFamily.notoSansMedium,
    textAlign: "left",
    color: Color.colorGray,
    fontWeight: "500",
    lineHeight: 24,
  },
  wrapper: {
    height: "6.3%",
    width: "9.71%",
    top: "87.4%",
    right: "4.76%",
    bottom: "6.3%",
    left: "85.52%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  text1: {
    height: "37.8%",
    width: "90.57%",
    top: "14.08%",
    left: "4.52%",
  },
  text2: {
    width: "90.49%",
    top: "58.27%",
    left: "4.57%",
  },
  view: {
    height: 127,
    width: "100%",
    flex: 1,
  },
});

export default Group123219;
