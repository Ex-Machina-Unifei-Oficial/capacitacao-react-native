import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Settings = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Configurações de áudio</Text>
      <Button title="Voltar para Home" onPress={() => router.push("/")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Settings;
