import { Box, Container, Text, VStack } from "native-base"

function Start() {
  return <Box safeArea>
    <Container>
      <VStack alignItems='center'>
        <Text fontSize='3xl'>
          Start game
        </Text>
      </VStack>
  </Container>
  </Box>
} 

export default Start
