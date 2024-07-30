import { View, Image } from "react-native";

export const ImageExample = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "#333",
        flexGrow: 1,
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require("@/assets/images/Ex_logo.png")} // busca uma imagem local
        alt="ex machina logo"
      />
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png", // busca uma imagem na web
        }}
        alt="react native logo"
      />
    </View>
  );
};
