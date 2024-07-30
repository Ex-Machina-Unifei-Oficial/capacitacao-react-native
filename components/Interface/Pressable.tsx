import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export const PressableExample = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [buttonText, setButtonText] = useState("Me Aperta");
  const [buttonColor, setButtonColor] = useState("#def");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
      }}
    >
      <View
        style={{
          padding: 20,
          width: 200,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{timesPressed ? timesPressed + "x onPress" : ""}</Text>
      </View>

      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#8ac" : "#ace",
          borderRadius: 8,
          padding: 6,
          margin: 10,
          width: 200,
        })}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {pressed ? "Pressed!" : "Press Me"}
          </Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={{
          backgroundColor: buttonColor,
          borderRadius: 8,
          padding: 6,
          margin: 10,
          width: 200,
        }}
        onPressIn={() => {
          setButtonText("Apertado");
          setButtonColor("#8ac");
        }}
        onPressOut={() => {
          setButtonText("Me Aperta");
          setButtonColor("#ace");
        }}
        onLongPress={() => {
          setButtonText("Me Larga");
          setButtonColor("#c88");
        }}
        hitSlop={20}
      >
        <Text style={{ fontSize: 16, textAlign: "center" }}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};
