import React, { useState, useEffect } from 'react';
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
import { motion, useScroll, useSpring } from 'framer-motion';

import Home from './components/Home';

import MotionNav from './components/MotionNav';
import Loader from './components/Loader';

function App() {
  const [isLoading, setLoading] = useState(true);

  const stopLoader = () => {
    setLoading(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={'100vw'} overflowX="hidden" bg="black">
        {isLoading ? (
          <Loader stopLoader={stopLoader} />
        ) : (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <>
              <Box width={'100%'} position="fixed" zIndex="99">
                <MotionNav />
              </Box>

              <Home />
            </>
          </motion.div>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
