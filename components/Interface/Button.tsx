import { Button, View } from "react-native";

export const ButtonExample = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      marginHorizontal: 16,
    }}
  >
    <Button
      title="Aperte-me"
      color="purple"
      onPress={() => alert("Mensagem.txt")}
    />
    <View
      style={{
        marginVertical: 8,
        borderBottomColor: "#777",
        borderBottomWidth: 0.5,
      }}
    />
    <Button
      title="Não consegue me apertar"
      disabled
      onPress={() => alert("Não consegue né Moisés")}
    />
  </View>
);
