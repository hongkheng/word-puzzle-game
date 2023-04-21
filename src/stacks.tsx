import { createStackNavigator } from "@react-navigation/stack";

import Start from "./game/Start";
import WordPuzzle from "./game/WordPuzzle";

const GameStack = createStackNavigator<RootStackParamList>();

function Game() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="Start" component={Start} />
      <GameStack.Screen name="WordPuzzle" component={WordPuzzle} />
    </GameStack.Navigator>
  );
}

export default Game;
