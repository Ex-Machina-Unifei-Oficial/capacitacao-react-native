import { View, Button, Alert } from "react-native";

const defaultAlert = () => Alert.alert("Título", "Mensagem de alerta");

const customAlert = () =>
  Alert.alert("Título", "Mensagem que necessita tomada de ação", [
    {
      text: "Mais tarde",
      onPress: () => console.log("Resposta neutra"),
    },
    {
      text: "Cancelar",
      onPress: () => console.log("Resposta negativa"),
    },
    {
      text: "OK",
      onPress: () => console.log("Resposta positiva"),
    },
  ]);

export const AlertExample = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 50,
      }}
    >
      <Button title={"Alert Padrão"} onPress={defaultAlert} />
      <Button title={"Alert Customizado"} onPress={customAlert} />
    </View>
  );
};
