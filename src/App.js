import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import { Logo } from './Logo';

import { Navbar } from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Box width={'100vw'} position="fixed" zIndex="99">
          <Navbar />
        </Box>
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
