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
import Sponsor from './components/Sponsor';
import AboutUs from './components/AboutUs';
import ScrollerBanner from './components/ScrollerBanner';
import Footer from './components/Footer';

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

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
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
                <Box
                  width={'100%'}
                  position="fixed"
                  zIndex="80"
                  // onMouseEnter={subTextEnter}
                  // onMouseLeave={textLeave}
                >
                  <MotionNav />
                </Box>
                <Home />
                <AboutUs />
                <ScrollerBanner />
                <Sponsor />
                <div
                  className="apply-button"
                  data-hackathon-slug="lnmhacks"
                  data-button-theme="dark"
                  // style={{
                  //   width: '100px',
                  //   height: '200px',
                  // }}
                ></div>

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
