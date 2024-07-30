import { View, Text, ImageBackground } from "react-native";

export const ImageBackgroundExample = () => {
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
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        style={{
          width: 300,
          height: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("@/assets/images/Ex_logo.png")} // busca uma imagem local
        alt="ex machina logo"
      >
        <Text style={{ color: "#def" }}>
          Conteúdo dentro da imagem :D
          {"\n\n"}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quasi
          aliquam enim dolores odio perspiciatis voluptate nulla? Saepe
          doloribus, numquam nesciunt voluptas voluptates ipsum libero quaerat,
          repellat vitae in impedit!
          {"\n\n"}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quasi
          aliquam enim dolores odio perspiciatis voluptate nulla? Saepe
          doloribus, numquam nesciunt voluptas voluptates ipsum libero quaerat,
          repellat vitae in impedit!
        </Text>
      </ImageBackground>
    </View>
  );
};
