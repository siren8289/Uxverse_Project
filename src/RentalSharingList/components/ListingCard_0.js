import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons"; // ✅ 추가
import BookmarkIcon from "../assets/Frame_0.svg";
import FilledBookmarkIcon from "../assets/Heart_0.svg";

const ListingCard_0 = ({
  imageSource = null,
  price = "가격 없음",
  title = "상품명 없음",
  location = "위치 정보 없음",
  onPress = () => {},
  style,
  imageStyle,
  textBoxStyle,
  priceStyle,
  titleStyle,
  locationStyle,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);

  return (
    <Pressable style={[styles.card, style]} onPress={onPress}>
      {/* 이미지 */}
      {imageSource ? (
        <Image
          source={imageSource}
          style={[styles.productImage, imageStyle]}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.imagePlaceholder, imageStyle]}>
          <Text style={{ color: "#999" }}>이미지 없음</Text>
        </View>
      )}

      {/* 북마크 */}
      <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkIcon}>
        {isBookmarked ? (
          <FilledBookmarkIcon width={24} height={24} />
        ) : (
          <BookmarkIcon width={24} height={24} />
        )}
      </TouchableOpacity>

      {/* 텍스트 + 점점점 아이콘 */}
      <View style={[styles.textBox, textBoxStyle]}>
        <View style={styles.rowBetween}>
          <Text style={[styles.price, priceStyle]}>{price}</Text>

          {/* 점점점 아이콘 (세로방향) */}
          <TouchableOpacity>
            <Feather name="more-vertical" size={10} color="#777" />
          </TouchableOpacity>
        </View>
        <Text style={[styles.title, titleStyle]} numberOfLines={2}>
          {title}
        </Text>
        <Text style={[styles.location, locationStyle]}>{location}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 169,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
  },

  productImage: {
    width: 169,
    height: 168,
    borderRadius: 10,
  },

  imagePlaceholder: {
    width: 169,
    height: 168,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },

  bookmarkIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 10,
  },

  textBox: {
    paddingHorizontal: 6,
    paddingVertical: 6,
    alignItems: "flex-start",
    gap: 2,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  price: {
    fontSize: 16,
    color: "#1b1b1b",
    fontWeight: "600",
    fontFamily: "NotoSansKR-Medium",
    lineHeight: 22,
    textAlign: "left",
  },

  title: {
    fontSize: 14,
    color: "#1b1b1b",
    fontWeight: "500",
    fontFamily: "NotoSansKR-Medium",
    lineHeight: 20,
    textAlign: "left",
  },

  location: {
    fontSize: 12,
    color: "#5a5a5a",
    fontWeight: "400",
    fontFamily: "NotoSansKR-Regular",
    lineHeight: 18,
    textAlign: "left",
  },
});

export default ListingCard_0;
