import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const TouchableOpacityExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCount(count + 1)} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableOpacity>

      <View style={{ backgroundColor: "lightblue" }}>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <View style={[styles.button, { margin: 5 }]}>
            <Text>Aperte</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableHighlight
        onPress={() => setCount(count + 1)}
        underlayColor="#fff"
      >
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => setCount(count + 1)}
        underlayColor="#000"
      >
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => setCount(count + 1)}>
        <View style={[styles.button, { margin: 5 }]}>
          <Text>Aperte</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export const TouchableNativeFeedbackExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableNativeFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export const TouchableWithoutFeedbackExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
          borderWidth: 0.5,
          borderColor: "#f0f0f0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Text>{count ? count + "x Aperado" : ""}</Text>
      </View>

      <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
        <View style={styles.button}>
          <Text>Aperte</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#AAA",
    padding: 10,
    width: 200,
  },
});
