import { View, Text } from "react-native";

type ItemProps = { title: string };

export const Item = ({ title }: ItemProps) => (
  <View
    style={{
      backgroundColor: "#ace",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}
  >
    <Text style={{ fontSize: 24 }}>{title}</Text>
  </View>
);
