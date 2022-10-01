import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { theme } from './utils';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
      </Box>
    </ChakraProvider>
  );
}

export default App;
