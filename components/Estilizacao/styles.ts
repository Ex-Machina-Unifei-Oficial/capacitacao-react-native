// styles.ts
import styled from "styled-components/native";

// styled possui acesso a todos componentes básicos do React Native
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

export const CustomText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
`;
