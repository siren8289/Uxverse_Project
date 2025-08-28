import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// ✅ SVG 아이콘 컴포넌트로 import
import PopularIcon from "./assets/Popular.svg";

const categories = [
  { label: "인기순", icon: PopularIcon },
  { label: "식품" },
  { label: "생활용품" },
  { label: "뷰티/미용" },
  { label: "디지털" },
];

const CategoryButton = ({
  label,
  icon: IconComponent,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isSelected
          ? label === "식품"
            ? styles.buttonSelectedFilled
            : styles.buttonSelectedOutlined
          : styles.buttonUnselected,
      ]}
      onPress={onPress}
    >
      {IconComponent && <IconComponent width={14} height={14} />}
      <Text
        style={[
          styles.buttonText,
          isSelected
            ? label === "식품"
              ? styles.textSelectedFilled
              : styles.textSelectedOutlined
            : styles.textUnselected,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Category = () => {
  const [selected, setSelected] = useState("식품");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        {categories.map(({ label, icon }) => (
          <CategoryButton
            key={label}
            label={label}
            icon={icon}
            isSelected={selected === label}
            onPress={() => setSelected(label)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  buttonSelectedOutlined: {
    borderColor: "#FA8072",
  },
  buttonSelectedFilled: {
    backgroundColor: "#FA8072",
    borderColor: "#FA8072",
  },
  buttonUnselected: {
    borderColor: "#999",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  textSelectedOutlined: {
    color: "#FA8072",
  },
  textSelectedFilled: {
    color: "#FFF",
  },
  textUnselected: {
    color: "#333",
  },
});

export default Category;
