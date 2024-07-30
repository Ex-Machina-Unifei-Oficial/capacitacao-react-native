import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";

export const KeyboardAvoidingViewExample = () => {
  return (
    <KeyboardAvoidingView
      style={{
        flexGrow: 1,
        margin: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "lightblue",
          flexGrow: 1,
          marginVertical: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Alguma coisa espaçosa</Text>
      </View>
      <TextInput style={{ borderWidth: 1 }} placeholder="Input de Texto" />
    </KeyboardAvoidingView>
  );
};
