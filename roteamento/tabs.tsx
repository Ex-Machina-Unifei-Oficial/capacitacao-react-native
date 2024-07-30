import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export function TabsNavigation() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      {/* Declaração da tela*/}
      <Tabs.Screen
        name="index" // nome do arquivo (Home)
        options={{
          title: "Home", // título da tela, mostrado na parte inferior
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              color={focused ? "#00f" : "#666"}
              size={size}
            />
          ), // ícone da tela, mostrado na parte inferior
        }}
      />
      <Tabs.Screen
        name="settings/index" // para utilizar uma pasta é preciso especificar o arquivo exato
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
