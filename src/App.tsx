import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import Game from "./stacks";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Game />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
