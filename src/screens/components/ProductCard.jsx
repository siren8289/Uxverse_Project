// src/screens/components/ProductCard.jsx
import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";

/** ---- Figma 스펙 상수 ---- */
const DEFAULT_W = 119.36; // 카드/이미지 기본 폭
const IMAGE_TEXT_GAP = 12; // 이미지 아래 여백
const INFO_H = 56; // 텍스트 블록 전체 높이
const GAP = 6; // 텍스트 줄 간 간격
const RADIUS = 10; // 이미지 라운드

/** 단일 외곽 하트 아이콘 */
const HeartOutline = ({ size = 22, color = "#1B1B1B", strokeWidth = 1 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

function ProductCard({
  /** 이미지/텍스트 데이터 */
  svg: SvgComponent,
  imageSource = null, // require(...) | { uri } | "https://..."
  price = 0,
  title = "상품명 없음",
  location = "위치 정보 없음",
  discount = 0,
  showDiscount = true,
  showHeart = true,
  onPress = () => {},

  /** 레이아웃(부모에서 통일해 주입) */
  cardWidth = DEFAULT_W, // ← 부모가 넘겨주는 카드 폭
  imageSize, // 주지 않으면 cardWidth와 동일
  cardHeight, // 주지 않으면 자동 계산(IMG + 12 + 56)
}) {
  const [liked, setLiked] = useState(false);

  const IMG = imageSize ?? cardWidth;
  const H = cardHeight ?? Math.ceil(IMG + IMAGE_TEXT_GAP + INFO_H); // 기본 188

  const src =
    typeof imageSource === "string" ? { uri: imageSource } : imageSource;

  const priceStr =
    typeof price === "number"
      ? `${price.toLocaleString("ko-KR")}원`
      : String(price);

  const showDisc = showDiscount && typeof discount === "number" && discount > 0;

  return (
    <Pressable
      style={[s.card, { width: cardWidth, height: H }]}
      onPress={onPress}
    >
      {/* 이미지: 폭=부모 100%, 높이=IMG, 라운드=10, 하단여백=12 */}
      <View
        style={[
          s.imageWrap,
          { height: IMG, borderRadius: RADIUS, marginBottom: IMAGE_TEXT_GAP },
        ]}
      >
        {SvgComponent ? (
          <SvgComponent
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
          />
        ) : src ? (
          <Image source={src} style={s.image} resizeMode="cover" />
        ) : (
          <View style={[s.image, s.placeholder]}>
            <Text style={s.placeholderText}>이미지 없음</Text>
          </View>
        )}

        {showHeart && (
          <TouchableOpacity
            style={s.heart}
            onPress={() => setLiked((v) => !v)}
            hitSlop={8}
          >
            <HeartOutline size={22} color="#1B1B1B" strokeWidth={1} />
          </TouchableOpacity>
        )}
      </View>

      {/* 텍스트: 고정 56px, 내부 gap 6px */}
      <View style={[s.info, { height: INFO_H, gap: GAP }]}>
        <View style={s.priceRow}>
          {showDisc && (
            <Text style={s.discount} numberOfLines={1} allowFontScaling={false}>
              {discount}%
            </Text>
          )}
          <Text style={s.price} numberOfLines={1} allowFontScaling={false}>
            {priceStr}
          </Text>
        </View>

        <Text style={s.title} numberOfLines={1} allowFontScaling={false}>
          {title}
        </Text>
        <Text style={s.location} numberOfLines={1} allowFontScaling={false}>
          {location}
        </Text>
      </View>
    </Pressable>
  );
}

export default memo(ProductCard);

const s = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  imageWrap: {
    position: "relative",
    width: "100%",
    backgroundColor: "#F2F4F7",
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%" },
  placeholder: { justifyContent: "center", alignItems: "center" },
  placeholderText: { color: "#9AA3AE" },
  heart: { position: "absolute", top: 8, right: 8, zIndex: 2, elevation: 2 },

  info: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: "flex-start",
  },
  priceRow: { flexDirection: "row", alignItems: "baseline", gap: 6 },
  discount: {
    color: "#FF6B6B",
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "700",
  },
  price: { color: "#1B1B1B", fontSize: 12, lineHeight: 14, fontWeight: "700" },
  title: { color: "#1B1B1B", fontSize: 12, lineHeight: 14, fontWeight: "500" },
  location: {
    color: "#5A5A5A",
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "400",
  },
});
