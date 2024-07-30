import { Stack } from "expo-router";

export function StackNavigation() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      {/* Declaração da tela*/}
      <Stack.Screen
        name="index" // nome do arquivo (Home)
        options={{
          title: "Home", // título da tela, mostrado na parte superior
        }}
      />
      <Stack.Screen
        name="settings/index" // para utilizar uma pasta é preciso especificar o arquivo exato
        options={{
          title: "Configurações",
        }}
      />
    </Stack>
  );
}
