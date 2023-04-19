import { NativeBaseProvider } from "native-base";

import Start from "./game/Start";

export default function App() {
  return (
    <NativeBaseProvider>
      <Start />
    </NativeBaseProvider>
  );
}
