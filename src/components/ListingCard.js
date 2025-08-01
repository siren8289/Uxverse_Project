import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookmarkIcon from "./assets/Frame.svg";

const ProductCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* <Image
          style={styles.productImage}
          resizeMode="cover"
          source={require("../assets/home little.png")}
        /> */}

        {/* <BookmarkIcon width={40} height={40} /> */}

        <View style={styles.imagePlaceholder}>
          <Text style={{ color: "#999" }}>이미지 자리</Text>
          <BookmarkIcon style={styles.bookmarkIcon} width={24} height={24} />
        </View>

        <View style={styles.textBox}>
          <Text style={styles.price}>7,000원</Text>
          <Text style={styles.title}>캠핑용 조명 렌턴</Text>
          <Text style={styles.location}>서울시 관악구·1시간 전</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 186,
    width: "100%",
    flex: 1,
  },
  // productImage: {
  //   height: "64.19%",
  //   width: "100%",
  //   position: "absolute",
  //   top: 0,
  // },
  bookmarkIcon: {
    position: "absolute", // 위치를 고정시키기 위해 필요
    top: 8, // 위에서 8px 떨어지게
    right: 8, // 오른쪽에서 8px 떨어지게
    width: 18, // 너가 원한 아이콘 크기
    height: 18,
    zIndex: 10, // 위에 보이도록
  },
  imagePlaceholder: {
    height: "64.19%",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    position: "absolute",
    top: "69.89%",
    width: "100%",
    gap: 6,
    paddingHorizontal: 16,
  },
  price: {
    fontSize: 16,
    color: "#1b1b1b",
    fontWeight: "500",
    fontFamily: "NotoSansKR-Medium",
    lineHeight: 24,
  },
  title: {
    fontSize: 14,
    color: "#1b1b1b",
    fontWeight: "500",
    fontFamily: "NotoSansKR-Medium",
    lineHeight: 24,
  },
  location: {
    fontSize: 12,
    color: "#5a5a5a",
    fontWeight: "500",
    fontFamily: "NotoSansKR-Medium",
    lineHeight: 24,
  },
});

export default ProductCard;
