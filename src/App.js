import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './utils';
import { Home } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container bgColor="#DDDDDD" centerContent minHeight="100vh" fontFamily="Helvetica">
        <Home />
      </Container>
    </ChakraProvider>
  );
}

export default App;
