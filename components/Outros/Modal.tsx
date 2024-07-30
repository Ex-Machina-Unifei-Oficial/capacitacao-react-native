import { Dispatch, SetStateAction, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

type ModalContentProps = {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

const ModalContent = ({ setModalVisible }: ModalContentProps) => {
  return (
    <View style={styles.centeredView}>
      {/* ^ Centraliza o Modal na tela */}
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
          <Text style={styles.textStyle}>Fechar Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

export const ModalExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal foi fechado pelo botão voltar");
          setModalVisible(false);
        }}
      >
        {/* Conteúdo do modal: */}
        <ModalContent setModalVisible={setModalVisible} />
      </Modal>
      {/* Conteúdo da página: */}
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    height: 300,
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
