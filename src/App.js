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
import MotionNav from './components/MotionNav';
import Loader from './components/Loader';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100vw'}>
        <Box width={'100%'} position="fixed" zIndex="99">
          {/* <Navbar /> */}
          <MotionNav />
        </Box>
        <Loader />
        <Home />
        <Schedule />
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
