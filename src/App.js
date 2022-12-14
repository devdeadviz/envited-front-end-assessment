import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './utils';
import { CreateEvent, Home } from './pages';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        bgColor="#DDDDDD"
        centerContent
        minHeight="100vh"
        fontFamily="Helvetica"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
