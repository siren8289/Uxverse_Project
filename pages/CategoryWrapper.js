import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Category from "../src/components/Category"; // 공용 컴포넌트 그대로 사용

const CategoryWrapper = ({ items, value, onChange }) => {
  const [selected, setSelected] = useState(value || items[0].id);

  const handleSelect = (id) => {
    setSelected(id);
    if (onChange) onChange(id);
  };

  return (
    <View style={styles.row}>
      {items.map((item) => (
        <Category
          key={item.id}
          label={item.label}
          icon={item.icon}        // ✅ 아이콘(최신순) 넘겨주기
          selected={selected === item.id}
          onPress={() => handleSelect(item.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 12, // 카테고리 간격
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default CategoryWrapper;
