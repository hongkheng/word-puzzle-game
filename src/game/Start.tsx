import type { StackScreenProps } from "@react-navigation/stack";
import { Box, Button, Select, Text, VStack } from "native-base";
import { useState } from "react";

type Props = StackScreenProps<RootStackParamList, "Start">;

function Start({ navigation }: Props) {
  const [category, setCategory] = useState("");

  return (
    <Box safeArea>
      <VStack space="1/3" alignItems="center">
        <Text fontSize="3xl">Word Puzzle Game</Text>
        <Select
          selectedValue={category}
          minWidth="200"
          accessibilityLabel="Choose Category"
          placeholder="Choose Category"
          mt={1}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          <Select.Item label="Solar System" value="solar" />
          <Select.Item label="Sea animals" value="sea" />
          <Select.Item label="Dinosaurs" value="dinosaurs" />
        </Select>
        <Button
          onPress={() => {
            navigation.navigate("WordPuzzle");
          }}
        >
          Start game
        </Button>
      </VStack>
    </Box>
  );
}

export default Start;
