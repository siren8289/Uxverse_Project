import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Color, FontSize } from "./GlobalStyles";
import PopularIcon from "../assets/Popular.svg"; // ✅ SVG 임포트
// ✅ 이미지
import MangoImg from "../assets/mango.png";
import KimchiImg from "../assets/kimchijeon.png";
import GajiImg from "../assets/gaji.png";
import GamjaImg from "../assets/potato.png";
import SalmonImg from "../assets/salmon.png";
import BibimbabImg from "../assets/bibimbab.png";

const GroupPurchase = () => {
  const [category, setCategory] = useState("food");
  const [likedItems, setLikedItems] = useState({});

  /** 카테고리 */
  const categories = useMemo(
    () => [
      { id: "popular", label: "인기순", type: "outlined", icon: PopularIcon },
      { id: "food", label: "식품", type: "filled" },
      { id: "living", label: "생활용품", type: "outlined" },
      { id: "beauty", label: "뷰티/미용", type: "outlined" },
      { id: "digital", label: "디지털", type: "outlined" },
    ],
    []
  );


  /** 상품 데이터 */
  const PRODUCTS = useMemo(
    () => [
      {
        id: "1",
        image: MangoImg,
        discount: "28%",
        price: "24,900원",
        title: "애플망고 2kg",
        remain: "3명 남음",
      },
      {
        id: "2",
        image: KimchiImg,
        discount: "23%",
        price: "9,900원",
        title: "바삭 김치전 밀키트",
        remain: "2명 남음",
      },
      {
        id: "3",
        image: GajiImg,
        discount: "18%",
        price: "4,500원",
        title: "국내산 가지 1kg",
        remain: "7명 남음",
      },
      {
        id: "4",
        image: GamjaImg,
        discount: "20%",
        price: "8,900원",
        title: "바삭 감자전 밀키트",
        remain: "5명 남음",
      },
      {
        id: "5",
        image: SalmonImg,
        discount: "21%",
        price: "14,900원",
        title: "레몬 연어 밀키트",
        remain: "6명 남음",
      },
      {
        id: "6",
        image: BibimbabImg,
        discount: "18%",
        price: "10,900원",
        title: "전통 비빔밥",
        remain: "2명 남음",
      },
    ],
    []
  );

  /** 상품 카드 */
  const renderItem = ({ item }) => {
    const liked = likedItems[item.id];
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImg} resizeMode="cover" />
        <View style={styles.cardInfo}>
          <Text style={styles.discount}>{item.discount}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.remain}>{item.remain}</Text>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() =>
            setLikedItems((prev) => ({ ...prev, [item.id]: !liked }))
          }
        >
          <Feather
            name="heart"
            size={20}
            color={liked ? "#FA8072" : "#292E38"} // ✅ 수정 (#292E38)
          />
        </TouchableOpacity>

      </View>
    );
  };

  /** 카테고리 버튼 */
  const renderCategory = (cat) => {
    const isSelected = category === cat.id;

    return (
      <TouchableOpacity
        key={cat.id}
        style={[
          styles.categoryButton,
          isSelected && cat.type === "outlined" && styles.categorySelectedOutlined,
          isSelected && cat.type === "filled" && styles.categorySelectedFilled,
        ]}
        onPress={() => setCategory(cat.id)}
      >
        {/* ✅ "인기순" 아이콘 */}
        {cat.icon && (
          <cat.icon
            width={12}
            height={12}
            style={{ marginRight: 4 }}
            fill={isSelected ? "#FA8072" : "#999"}
          />
        )}
        <Text
          style={[
            styles.categoryText,
            isSelected && cat.type === "outlined" && styles.categoryTextOutlined,
            isSelected && cat.type === "filled" && styles.categoryTextFilled,
          ]}
        >
          {cat.label}
        </Text>
      </TouchableOpacity>
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* 상단바 */}
      <View style={styles.topBarWrapper}>
        <Feather name="chevron-left" size={24} color={Color.colorGray200} />
        <Text style={styles.topBarTitle}>공동구매</Text>
        <View style={styles.rightIconWrap}>
          <Feather
            name="search"
            size={22}
            color={Color.colorGray200}
            style={{ marginRight: 14 }}
          />
          <Feather name="shopping-cart" size={22} color={Color.colorGray200} />
        </View>
      </View>

      {/* 카테고리 */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryRow}
      >
        {categories.map(renderCategory)}
      </ScrollView>

      {/* 상품 리스트 */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ gap: 14 }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 160,
          rowGap: 20,
        }}
        showsVerticalScrollIndicator={false}
      />



      {/* 제안하기 버튼 */}
      <View style={styles.fabWrap} pointerEvents="box-none">
        <TouchableOpacity style={styles.fabButton}>
          <Text style={styles.plusIcon}>＋</Text>
          <Text style={styles.fabText}>제안하기</Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // ✅ 상태바 아래 17px 간격
  topBarWrapper: {
    marginTop: 17,  // 상태바와 상단바 사이 17px
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 44,
    marginBottom: 16, // ✅ 공동구매 라인과 카테고리 라인 사이 16px
  },
  rightIconWrap: { flexDirection: "row", alignItems: "center" },
  topBarTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Color.colorGray200,
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
  },

  categoryRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 16,          // 버튼 간격
    paddingVertical: 6,
    marginBottom: 24, // 카테고리 ↔ 리스트
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 13,
    paddingHorizontal: 12,
    height: 26,
  },
  categorySelectedOutlined: { borderColor: "#FA8072" },
  categorySelectedFilled: {
    backgroundColor: "#FA8072",
    borderColor: "#FA8072",
  },
  categoryText: { fontSize: 12, color: "#333" },
  categoryTextOutlined: { color: "#FA8072" },
  categoryTextFilled: { color: "#FFF" },



  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  cardImg: {
    width: 170,   // ✅ 고정 가로 170px
    height: 170,  // ✅ 고정 세로 170px
    borderRadius: 10,
  },

  cardInfo: {
    flexDirection: "row",
    marginTop: 6,
    marginHorizontal: 2,
    alignItems: "center",
    gap: 4,
  },
  discount: { color: "#FA8072", fontSize: 14, fontWeight: "600" },
  price: { fontSize: 18, fontWeight: "600", color: "#1b1b1b" },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#222",
    marginHorizontal: 2,
    marginTop: 2,
  },
  remain: {
    fontSize: 12,
    color: "#777",
    marginHorizontal: 2,
    marginTop: 2,
    marginBottom: 8,
  },
  heartIcon: { position: "absolute", top: 8, right: 8 },

  fabWrap: { position: "absolute", right: 20, bottom: 20 },
  fabButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA8072",
    width: 120,
    height: 46,
    borderRadius: 23,
  },
  plusIcon: {
    fontSize: 24,
    color: "#fff",
    marginRight: 6,
  },
  fabText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default GroupPurchase;
