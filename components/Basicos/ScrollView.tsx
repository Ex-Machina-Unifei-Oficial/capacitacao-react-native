import { View, Text, ScrollView } from "react-native";

export const ScrollViewExample = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <ScrollView
        style={{
          flexGrow: 0.5,
          margin: 20,
        }}
        contentContainerStyle={{
          borderColor: "lightblue",
          borderWidth: 5,
          alignItems: "center",
          backgroundColor: "aliceblue",
          rowGap: 10,
        }}
      >
        <Text>Essa parte é rolável</Text>
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
        <View style={{ backgroundColor: "lightblue", height: 50, width: 50 }} />
      </ScrollView>
      <View
        style={{
          alignItems: "center",
          padding: 20,
          rowGap: 10,
        }}
      >
        <Text>Essa parte não é mais</Text>
        <View
          style={{ backgroundColor: "lightgreen", height: 50, width: 50 }}
        />
        <View
          style={{ backgroundColor: "lightgreen", height: 50, width: 50 }}
        />
      </View>
    </View>
  );
};
