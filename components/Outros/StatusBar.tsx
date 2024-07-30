import { useState } from "react";
import { Button, StatusBar, Text, View, StatusBarStyle } from "react-native";

const STYLES = ["default", "dark-content", "light-content"] as const;

export const StatusBarExample = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = (STYLES.indexOf(statusBarStyle) + 1) % 3;
    setStatusBarStyle(STYLES[styleId]);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar
        animated={false}
        backgroundColor="#def"
        barStyle={statusBarStyle}
        hidden={hidden}
      />
      <Text style={{ textAlign: "center" }}>
        StatusBar: {hidden ? "Inativa" : "Ativa"}
      </Text>
      <Text style={{ textAlign: "center" }}>
        StatusBar Style: {statusBarStyle}
      </Text>
      <View style={{ padding: 10, rowGap: 10 }}>
        <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
        <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
      </View>
    </View>
  );
};
