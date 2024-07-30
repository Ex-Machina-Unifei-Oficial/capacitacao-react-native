import { ActivityIndicator, View } from "react-native";

export const ActivityIndicatorExample = () => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    }}
  >
    <ActivityIndicator />
    <ActivityIndicator size="small" color="#292963" />
    <ActivityIndicator size="large" color="#4cbd4c" />
  </View>
);
