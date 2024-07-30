import { StyleSheet, View, Text } from "react-native";

export const StyleSheetsExample = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello, World!</Text>
    <Text style={styles.text}>Segundo texto com a mesma estilização</Text>
    <Text style={[styles.text, styles.smallText]}>
      Terceiro texto com array de estilizações
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  smallText: {
    fontSize: 16,
  },
});
