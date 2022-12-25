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
import Schedule from './components/schedule/Schedule';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100vw'}>
        <Box width={'100%'} position="fixed" zIndex="99">
          <Navbar />
        </Box>
        <Home />
        <Schedule />
      </Box>
    </ChakraProvider>
  );
}

export default App;
