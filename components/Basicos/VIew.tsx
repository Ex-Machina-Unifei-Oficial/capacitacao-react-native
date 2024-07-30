import { View } from "react-native";

export const ViewExample = () => {
  return (
    <View
      style={{
        alignItems: "center",
        padding: 20,
        rowGap: 10,
      }}
    >
      <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
      <View style={{ backgroundColor: "lightgreen", height: 50, width: 50 }} />
    </View>
  );
};
