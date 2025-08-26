import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

// 공용 컴포넌트
import TopBar1 from "../src/components/TopBar_1";
import ButtonPlus from "../src/components/Button_Plus";
import Category from "../src/components/Category";

const PINK = "#FF736D";
const TEXT_DARK = "#1A1A1A";

// 이미지
const IMAGES = {
  mango: require("./assets/mango.png"),
  gaji: require("./assets/gaji.png"),
  salmon: require("./assets/salmon.png"),
  kimchijeon: require("./assets/kimchijeon.png"),
  potato: require("./assets/potato.png"),
  bibimbab: require("./assets/bibimbab.png"),
};

const products = [
  { id: "1", discount: "28%", price: "24,900원", name: "애플망고 2kg", remain: "3명 남음", image: IMAGES.mango },
  { id: "4", discount: "23%", price: "9,900원", name: "바삭 김치전 밀키트", remain: "2명 남음", image: IMAGES.kimchijeon },
  { id: "2", discount: "18%", price: "4,500원", name: "국내산 가지 1kg", remain: "7명 남음", image: IMAGES.gaji },
  { id: "5", discount: "20%", price: "8,900원", name: "바삭 감자전 밀키트", remain: "5명 남음", image: IMAGES.potato },
  { id: "3", discount: "21%", price: "14,900원", name: "레몬 연어 밀키트", remain: "6명 남음", image: IMAGES.salmon },
  { id: "6", discount: "18%", price: "10,900원", name: "전통 비빔밥 밀키트", remain: "2명 남음", image: IMAGES.bibimbab },
];

export function GroupPurchase() {
  const tabBarHeight = useBottomTabBarHeight();
  const [activeCat, setActiveCat] = useState(1); // 기본: 식품

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단바 */}
      <View style={styles.topbarWrap}>
        <TopBar1 title="공동구매" />
      </View>

      {/* 카테고리: 원본처럼 가로 스크롤 */}
      <View style={styles.categoryWrap}>
        <Category activeIndex={activeCat} onSelect={setActiveCat} />
      </View>

      {/* 상품 그리드 */}
      <FlatList
        data={products}
        keyExtractor={(it) => it.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 22 }}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: tabBarHeight + 96,
        }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imgWrap}>
              <Image source={item.image} style={styles.img} resizeMode="cover" />
            </View>
            <View style={{ marginTop: 12 }}>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text style={styles.discountText}>{item.discount}</Text>
                <Text style={styles.priceText}> {item.price}</Text>
              </View>
              <Text style={styles.titleText} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.remainText}>{item.remain}</Text>
            </View>
          </View>
        )}
      />

      {/* + 제안하기 버튼 (네비 위에 고정) */}
      <View style={[styles.fabWrap, { bottom: tabBarHeight + 12, right: 18 }]}>
        <ButtonPlus text="+ 제안하기" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* 상단바 보정 */
  topbarWrap: {
    marginTop: 6,    // 원본처럼 조금 내려주기
    marginBottom: 4,
  },

  /* 카테고리 감싸는 영역 */
  categoryWrap: {
    marginBottom: 8,
  },

  /* 카드 */
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  imgWrap: { position: "relative" },
  img: { width: "100%", height: 152, borderRadius: 14, backgroundColor: "#eee" },

  discountText: { fontSize: 13, color: PINK, fontWeight: "700", marginRight: 4 },
  priceText: { fontSize: 15, color: TEXT_DARK, fontWeight: "700" },
  titleText: { marginTop: 4, fontSize: 13, color: "#2B2B2B", fontWeight: "600" },
  remainText: { marginTop: 2, fontSize: 12, color: "#8B8B8B" },

  /* FAB */
  fabWrap: {
    position: "absolute",
    zIndex: 30,   // 카드 위로
  },
});

export default GroupPurchase;
