import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import BookmarkIcon from "./assets/Frame.svg"; // 빈 찜 아이콘
import FilledBookmarkIcon from "./assets/Heart.svg"; // 채운 찜 아이콘

const ProductCard = ({
  imageSource = null,
  price = "가격 없음",
  title = "상품명 없음",
  location = "위치 정보 없음",
  onPress = () => {},
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* 이미지 영역 */}
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.productImage}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={{ color: "#999" }}>이미지 없음</Text>
        </View>
      )}

      {/* 북마크 아이콘 */}
      <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkIcon}>
        {isBookmarked ? (
          <FilledBookmarkIcon width={24} height={24} />
        ) : (
          <BookmarkIcon width={24} height={24} />
        )}
      </TouchableOpacity>

      {/* 텍스트 정보 */}
      <View style={styles.textBox}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 119.36,
    height: 220, // 119.36 이미지 + 여유 텍스트 영역
    borderRadius: 10,
    backgroundColor: "#fff",
    position: "relative",
    overflow: "hidden",
  },

  productImage: {
    width: 119.36,
    height: 119.36,
    borderRadius: 10,
  },

  imagePlaceholder: {
    width: 119.36,
    height: 119.36,
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
    position: "absolute",
    top: 130, // 이미지 아래 119.36 + 간격 약간
    width: 119.36,
    gap: 4,
    paddingHorizontal: 4,
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
    lineHeight: 20,
  },

  location: {
    fontSize: 12,
    color: "#5a5a5a",
    fontWeight: "500",
    fontFamily: "NotoSansKR-Medium",
    lineHeight: 18,
  },
});

export default ProductCard;
