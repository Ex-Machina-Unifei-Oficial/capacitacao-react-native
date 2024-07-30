import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export function CameraExample() {
  const [showCamera, setShowCamera] = useState(true);
  const [facing, setFacing] = useState<CameraType>("back");
  // Nesse caso, o Expo faz o gerenciamento das permissões através de um Hook (prática muito comum)
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // carregando as permissões da câmera
    return <View />;
  }

  if (!permission.granted) {
    // Permissões não foram concedidas
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          É necessário que você permita a utilização da câmera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function toggleShowCamera() {
    setShowCamera((current) => !current);
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <CameraView style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>Alternar câmera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={toggleShowCamera}>
              <Text style={styles.text}>Esconder câmera</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.center}>
          <TouchableOpacity style={styles.button} onPress={toggleShowCamera}>
            <Text style={[styles.text, { color: "black" }]}>
              Mostrar câmera
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "flex-end",
    margin: 64,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
