import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export function DrawerNavigation() {
  return (
    <GestureHandlerRootView>
      <Drawer screenOptions={{ headerShown: true }}>
        {/* Declaração da tela*/}
        <Drawer.Screen
          name="index" // nome do arquivo (Home)
          options={{
            title: "Home", // título da tela, mostrado na parte inferior
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="home-outline"
                color={focused ? "#00f" : "#666"}
                size={size}
              />
            ), // ícone da tela, mostrado na parte inferior
          }}
        />
        <Drawer.Screen
          name="settings/index" // para utilizar uma pasta é preciso especificar o arquivo exato
          options={{
            title: "Configurações",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
