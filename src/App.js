import React, { useState, useEffect, useRef } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  useColorMode,
  Divider,
} from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import useCursor from './hooks/useCursor';

import Home from './components/Home';
import MotionNav from './components/MotionNav';
import Loader from './components/Loader';
import PastSponsor from './components/PastSponsor';
import AboutUs from './components/AboutUs';
import ScrollerBanner from './components/ScrollerBanner';
import Footer from './components/Footer';
import Register from './components/Register';
import Sponsor from './components/Sponsor';
import Faq from './components/Faq';
import Venue from './components/venue';
import Tracks from './components/tracks';
import Schedule from './components/schedule/Schedule';

function App() {
  const body = useRef(null);

  const [isLoading, setLoading] = useState(true);

  // useCursor(body);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState('default');

  const textEnter = () => setCursorVariant('text');
  const countEnter = () => setCursorVariant('count');
  const registerEnter = () => setCursorVariant('register');
  const subTextEnter = () => setCursorVariant('subText');
  const textLeave = () => setCursorVariant('default');

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const stopLoader = () => {
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box ref={body}>
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
                <Box width={'100%'} position="fixed" zIndex="80">
                  <MotionNav />
                </Box>
                <Home />
                <AboutUs />
                <ScrollerBanner />

                <Schedule />
                <Tracks />
                <Register />
                <Sponsor />
                <Faq />
                <Venue />

                <Divider />
                <Footer />
              </>
            </motion.div>
          )}
        </Box>
        <motion.div
          className="cursor"
          hidden
          // variants={variants}
          animate={cursorVariant}
          transition={{
            x: { delay: 0 },
            y: { delay: 0 },
            type: 'tween',
            damping: 25,
            stiffness: 700,
          }}
        />
      </Box>
    </ChakraProvider>
  );
}

export default App;
