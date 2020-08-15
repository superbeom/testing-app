import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import {
  useFonts,
  NotoSansKR_400Regular,
  NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";

export default App = () => {
  const [fontsLoaded] = useFonts({
    NotoSansKR_400Regular,
    NotoSansKR_900Black,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      {fontsLoaded && (
        <>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 36,
                fontFamily: "NotoSansKR_400Regular",
              }}
            >
              kakao
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 36,
                fontFamily: "NotoSansKR_900Black",
              }}
            >
              games
            </Text>
          </View>
          <ActivityIndicator
            style={{ marginBottom: 10 }}
            size={"large"}
            color={"#AD5A01"}
          />
          <View
            style={{
              padding: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>
              일시적인 오류로 연결이 끊깁니다.
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
