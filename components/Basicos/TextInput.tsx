import { useState } from "react";
import { TextInput, View } from "react-native";

export const TextInputExample = () => {
  const [text, setText] = useState("Texto inicial");
  const [number, setNumber] = useState("");

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderBottomWidth: 1,
          padding: 10,
        }}
        onChangeText={setText}
        value={text}
      />
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setNumber}
        value={number}
        placeholder="placeholder não precisa ser numérico tbm"
        keyboardType="numeric"
      />
    </View>
  );
};
