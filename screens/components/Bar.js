import React from "react";
import { StyleSheet, View } from "react-native";

// 색상 정의
const Color = {
  colorDarkslategray: "#292e38",
};

const Long1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barWrapper}>
        <View style={styles.bar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // 바 자체만 필요하니 flex:1 제거 (불필요한 확장 방지)
  },
  barWrapper: {
    height: 7,
    width: "100%",       // ← 부모(스크린 패딩 20 적용된 영역) 가로폭을 그대로 사용
    position: "relative",
    marginTop: 2,        // ← 살짝 아래로
    overflow: "hidden",  // ← 혹시라도 넘치는 픽셀 깔끔히 잘라줌
    alignSelf: "center",
  },
  bar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,            // ← width: "100%" 대신 left/right로 꽉 채우기
    height: 7,
    borderRadius: 10,
    backgroundColor: Color.colorDarkslategray,
  },
});

export default Long1;
