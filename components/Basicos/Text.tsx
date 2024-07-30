import { View, Text } from "react-native";

export const TextExample = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", flexGrow: 1 }}
    >
      <Text style={{ fontSize: 24, fontWeight: 700, color: "orange" }}>
        O bom e velho{" "}
        <Text
          style={{ color: "darkblue" }}
          onPress={() => alert("é um hello world mesmo")}
        >
          Hello, World!
        </Text>
      </Text>
    </View>
  );
};
