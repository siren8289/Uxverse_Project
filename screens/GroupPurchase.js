import * as React from "react";
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native';
import Cellularconnection from "../assets/Cellular Connection.svg";
import Wifi from "../assets/Wifi.svg";
//import Cap from "../../assets/cap.svg";
import Hearticon from "../assets/Frame.svg";
//import Frame1 from "../assets/frame1.svg";
//import Frame2 from "../assets/frame2.svg";
//import Frame521 from "../assets/frame-521.svg";
//import Frame3 from "../assets/frame3.svg";
//import Component2 from "../assets/component-2.svg";
// screens/GroupPurchase.js
import { Color, FontFamily, FontSize, Padding, Border } from "./GlobalStyles";
import Button_Plus from "../src/components/Button_Plus";
import Category from "../src/components/Category";
import ListingCard from "../src/components/ListingCard";
import Nav from "../src/components/Nav";
import TopBar_1 from "../src/components/TopBar_1";

// 상품 데이터
const products = [
  {
    id: "1",
    discount: "28%",
    price: "24,900원",
    name: "애플망고 2kg",
    remain: "3명 남음",
    image: require("./assets/mango.png"),
  },
  {
    id: "2",
    discount: "18%",
    price: "4,500원",
    name: "국내산 가지 1kg",
    remain: "7명 남음",
    image: require("./assets/gaji.png"),
  },
  {
    id: "3",
    discount: "21%",
    price: "14,900원",
    name: "레몬 연어 밀키트",
    remain: "6명 남음",
    image: require("./assets/salmon.png"),
  },
  {
    id: "4",
    discount: "23%",
    price: "9,900원",
    name: "바삭 김치전 밀키트",
    remain: "2명 남음",
    image: require("./assets/kimchijeon.png"),
  },
  {
    id: "5",
    discount: "20%",
    price: "8,900원",
    name: "바삭 감자전 밀키트",
    remain: "5명 남음",
    image: require("./assets/potato.png"),
  },
  {
    id: "6",
    discount: "18%",
    price: "10,900원",
    name: "전통 비빔밥 밀키트",
    remain: "2명 남음",
    image: require("./assets/bibimbab.png"),
  },
];
// 카테고리 데이터
const categories = ["인기순", "식품", "생활용품", "뷰티/미용", "디지털"];


export function GroupPurchase() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar_1 />

      {/* 카테고리 버튼 - 좌우 스크롤 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryScroll}
      >
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              index === 0 && styles.popularButton, // '인기순' 스타일
              index === 1 && styles.activeButton, // '식품' 선택
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.popularText,
                index === 1 && styles.activeText,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 상품 리스트 */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ListingCard
            image={item.image} // require 그대로 전달
            price={`${item.discount} ${item.price}`}
            title={item.name}
            location={item.remain}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20, // 카드 간격
        }}
        contentContainerStyle={{
          paddingHorizontal: 16, // 좌우 여백
          paddingTop: 10,
          paddingBottom: 120,
          backgroundColor: "#fff", // 전체 배경 흰색
        }}
      />




      {/* 플러스 버튼 */}
      <Button_Plus />

      {/* 하단 네비게이션 */}
      <Nav tabs={[]} state={{ routes: [] }} navigation={{ navigate: () => { } }} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  groupPurchase: {
    backgroundColor: Color.colorGray100,
    flex: 1,
  },
  homeIndicatorPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusBarIphone: {
    height: 50,
    paddingTop: 21,
    top: 0,
  },
  frame: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  time1: {
    fontSize: 17,
    fontWeight: "600",
    color: Color.colorBlack,
  },
  time: {
    paddingLeft: Padding.p_16,
    paddingRight: Padding.p_6,
    flex: 1,
  },
  dynamicIslandSpacer: {
    width: 124,
  },
  battery: {
    width: 27,
    height: 13,
  },
  border: {
    borderRadius: 4,
    borderColor: Color.colorBlack,
    width: 25,
    opacity: 0.35,
    borderWidth: 1,
    height: "100%",
    position: "absolute",
    left: "50%",
    marginLeft: -13.65,
  },
  capIcon: {
    height: "31.54%",
    width: 1,
    opacity: 0.4,
    position: "absolute",
    left: "50%",
    marginLeft: 12.35,
  },
  capacity: {
    height: "69.23%",
    width: 21,
    backgroundColor: Color.colorBlack,
    position: "absolute",
    left: "50%",
    marginLeft: -11.65,
  },
  levels: {
    paddingLeft: Padding.p_6,
    paddingRight: Padding.p_16,
    gap: 7,
    flex: 1,
  },
  view1: {
    top: 107,
    gap: 16,
    left: 20,
    position: "absolute",
  },
  view2: {
    width: 64,
    padding: Padding.p_6,
    height: 26,
    borderWidth: 0.8,
    borderColor: Color.colorSalmon,
    borderRadius: Border.br_100,
    alignItems: "center",
    flexDirection: "row",
  },
  frameIcon: {
    width: 14,
    height: 14,
  },
  wrapper: {
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Color.colorSalmon,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.notoSansKRMedium,
  },
  container: {
    paddingVertical: Padding.p_6,
    paddingHorizontal: Padding.p_12,
    // backgroundColor: Color.colorSalmon, ❌
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    color: Color.colorGray100,
    fontSize: FontSize.size_12,
  },
  wrapper2Border: {
    borderColor: Color.colorDimgray,
    paddingVertical: Padding.p_6,
    paddingHorizontal: Padding.p_12,
    borderWidth: 0.8,
    borderRadius: Border.br_100,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_12,
  },
});

export default GroupPurchase;
