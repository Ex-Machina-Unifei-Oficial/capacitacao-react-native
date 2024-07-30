import { useState } from "react";
import { View, Switch, Text } from "react-native";

export const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleSwitch = () => setEnabled((previous) => !previous);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 20,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 18 }}>Mostrar segunda View:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={enabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={enabled}
        />
      </View>
      {enabled && (
        <View style={{ height: 100, width: 200, backgroundColor: "#345" }} />
      )}
    </View>
  );
};
