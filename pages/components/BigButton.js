import * as React from "react";
import {StyleSheet, View, Text} from "react-native";

const FontFamily = {
    notoSansKRMedium: "NotoSansKRMedium",
};

const Color = {
    colorSalmon: "#ff736d",
    colorGray: "#fbfbfb",
};

const Component = () => {
  	
  	return (
    		<View style={styles.view}>
      			<View style={styles.view1}>
        				<View style={styles.bigButton}>
          					<View style={styles.bigButtonChild} />
        				</View>
        				<View style={styles.wrapper}>
          					<Text style={styles.text}>등록하기</Text>
        				</View>
      			</View>
    		</View>);
};

const styles = StyleSheet.create({
  	view: {
    		flex: 1
  	},
  	bigButtonChild: {
    		height: "100%",
    		top: "0%",
    		right: "0%",
    		bottom: "0%",
    		left: "0%",
    		borderRadius: 100,
    		backgroundColor: Color.colorSalmon,
    		position: "absolute",
    		width: "100%"
  	},
  	bigButton: {
    		width: 350,
    		top: 0,
    		left: 0,
    		zIndex: 0,
    		position: "absolute",
    		height: 62
  	},
  	text: {
    		fontSize: 20,
    		lineHeight: 24,
    		fontWeight: "500",
    		fontFamily: FontFamily.notoSansKRMedium,
    		color: Color.colorGray,
    		textAlign: "left"
  	},
  	wrapper: {
    		width: 90,
    		height: 18,
    		flexDirection: "row",
    		alignItems: "center",
    		justifyContent: "center",
    		zIndex: 1
  	},
  	view1: {
    		paddingHorizontal: 130,
    		paddingVertical: 22,
    		gap: 10,
    		height: 62,
    		width: "100%",
    		flex: 1
  	}
});

export default Component;
