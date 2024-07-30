import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "./Button";
import { getData, removeData, storeData, storeObject } from "./functions";

export const AsyncStorageExample = () => {
  const [key, setKey] = useState("my-key");
  const [information, setInformation] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const load = async () => {
      const value = await getData(key);
      setData(value ?? "nenhum valor encontrado");
    };
    load();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
      }}
    >
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderBottomWidth: 1,
          padding: 10,
          width: 200,
        }}
        placeholder="Chave"
        value={key}
        onChangeText={setKey}
      />
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderBottomWidth: 1,
          padding: 10,
          width: 200,
        }}
        placeholder="Informação"
        value={information}
        onChangeText={setInformation}
      />
      <Button
        title="Salvar informação"
        onPress={() => {
          storeData(key, information);
        }}
      />
      <Button
        title="Carregar informação"
        onPress={async () => {
          const value = await getData(key);
          setInformation(value ?? "nenhum valor encontrado");
        }}
      />
      <Button
        title="Deletar informação"
        onPress={() => {
          removeData(key);
        }}
      />
      <Button
        title="Salvar informação"
        onPress={() => {
          storeObject(key, { information });
        }}
      />
      <Text>{data}</Text>
    </View>
  );
};
