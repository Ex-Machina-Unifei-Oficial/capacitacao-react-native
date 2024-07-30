import { Pressable, Text } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: pressed ? "#8ac" : "#ace",
        borderRadius: 8,
        padding: 6,
        margin: 10,
        width: 200,
      })}
    >
      <Text style={{ fontSize: 16, textAlign: "center" }}>{title}</Text>
    </Pressable>
  );
};
