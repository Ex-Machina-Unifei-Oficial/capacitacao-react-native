import { ViewExample } from "@/components/Basicos/VIew";
import { ScrollViewExample } from "@/components/Basicos/ScrollView";
import { KeyboardAvoidingViewExample } from "@/components/Basicos/KeyBoardAvoidingView";
import { TextExample } from "@/components/Basicos/Text";
import { ImageExample } from "@/components/Basicos/Image";
import { ImageBackgroundExample } from "@/components/Basicos/ImageBackground";
import { TextInputExample } from "@/components/Basicos/TextInput";

import { SwitchExample } from "@/components/Interface/Switch";
import { ButtonExample } from "@/components/Interface/Button";
import { PressableExample } from "@/components/Interface/Pressable";
import {
  TouchableHighlightExample,
  TouchableOpacityExample,
  TouchableNativeFeedbackExample,
  TouchableWithoutFeedbackExample,
} from "@/components/Interface/Touchable";

import { FlatListExample } from "@/components/Listas/FlatList";
import { SectionListExample } from "@/components/Listas/SectionList";

import { ActivityIndicatorExample } from "@/components/Outros/ActivityIndicator";
import { AlertExample } from "@/components/Outros/Alert";
import { ModalExample } from "@/components/Outros/Modal";
import { StatusBarExample } from "@/components/Outros/StatusBar";

import { StyleSheetsExample } from "@/components/Estilizacao/StyleSheet";

// Compoentes:
// export default function Home() {
//   return <StyleSheetsExample />;
// }

// Roteamento:
// import { useRouter } from "expo-router";
// import { View, Text, Button, StyleSheet } from "react-native";

// export default function Home() {
//   const router = useRouter();
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home</Text>
//       <Button
//         title="Ir para configurações"
//         onPress={() => router.push("/settings")}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//   },
//   text: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10,
//   },
// });

// Async Storage:
// import { AsyncStorageExample } from "@/asyncStorage";

// export default function Home() {
//   return <AsyncStorageExample />;
// }

// Permissões:
import { CameraExample } from "@/permissoes/camera";

export default function Home() {
  return <CameraExample />;
}
