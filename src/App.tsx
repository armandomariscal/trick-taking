import { useState, useEffect } from 'react'
import { Box, Heading, Text, Center, VStack, Button, HStack } from '@chakra-ui/react'
import { gameThemes } from './theme/colors'

function App() {
  const [currentBg, setCurrentBg] = useState(gameThemes.red.background)
  const [accentColor, setAccentColor] = useState(gameThemes.red.accent)
  const [themeName, setThemeName] = useState('DevOps')

  useEffect(() => {
    document.title = `Trick-Taking | ${themeName}`;
  }, [themeName]);

  return (
    <Box bg={currentBg} w="100%" h="100vh" transition="all 0.5s ease">
      <Center h="100%">
        <VStack spacing={8}>
          <Heading color={accentColor} size="2xl">
            Trick-Taking
          </Heading>
          
          <Text color="white" fontSize="lg">
            Selecciona tu ambiente de juego:
          </Text>

          <HStack spacing={4} wrap="wrap" justify="center">
            <Button 
              colorScheme="blackAlpha"
              variant="outline"
              color="white"
              onClick={() => {
                setCurrentBg(gameThemes.red.background)
                setAccentColor(gameThemes.red.accent)
                setThemeName('DevOps')
              }}
            >
              DevOps 🔴
            </Button>

            <Button 
              colorScheme="blackAlpha"
              variant="outline"
              color="white"
              onClick={() => {
                setCurrentBg(gameThemes.orange.background)
                setAccentColor(gameThemes.orange.accent)
                setThemeName('Product')
              }}
            >
              Product 🟠
            </Button>

            <Button 
              colorScheme="blackAlpha"
              variant="outline"
              color="white"
              onClick={() => {
                setCurrentBg(gameThemes.blue.background)
                setAccentColor(gameThemes.blue.accent)
                setThemeName('System Design')
              }}
            >
              System Design 🔵
            </Button>

            {}
          </HStack>

          <Box p={6} border="1px dashed" borderColor={accentColor} borderRadius="md">
            <Text color="white">Modo actual: {themeName}</Text>
          </Box>
        </VStack>
      </Center>
    </Box>
  )
}

export default App