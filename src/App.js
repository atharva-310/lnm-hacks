import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, theme, useColorMode } from '@chakra-ui/react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

import { AiFillTwitterSquare, AiFillDribbbleCircle } from 'react-icons/ai';
import Home from './components/Home';
import MotionNav from './components/MotionNav';
import Loader from './components/Loader';
import useCursor from './hooks/useCursor';
import Sponsor from './components/Sponsor';
import AboutUs from './components/AboutUs';
import ScrollerBanner from './components/ScrollerBanner';

function App() {
  const body = useRef(null);

  const [isLoading, setLoading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  // useCursor(body);
  console.log(colorMode);
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

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    text: {
      height: 130,
      width: 130,
      x: mousePosition.x - 63,
      y: mousePosition.y - 65,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
    count: {
      height: 100,
      width: 100,
      x: mousePosition.x - 48,
      y: mousePosition.y - 50,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
    subText: {
      height: 50,
      width: 50,
      x: mousePosition.x - 23,
      y: mousePosition.y - 25,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
    register: {
      height: 50,
      width: 50,
      x: mousePosition.x - 23,
      y: mousePosition.y - 25,
      // backgroundColor : "white",
      borderWidth: '1px',
      mixBlendMode: 'difference',
    },
  };

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
      {/* <Box ref={body}> */}
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

              {/* <div class="support">
                  <a
                    className="cursor-hover-item"
                    datacursortext="Follow Me!"
                    datacursortextrepeat="3"
                    href="https://twitter.com/DevLoop01"
                    target="_blank"
                  >
                    <AiFillTwitterSquare />
                  </a>
                  <a
                    className="cursor-hover-item"
                    datacursortext="Tweet"
                    datacursortextrepeat="5"
                    href="https://dribbble.com/devloop01"
                    target="_blank"
                  >
                    <AiFillDribbbleCircle />
                  </a>
                </div> */}
            </>
          </motion.div>
        )}
      </Box>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
          type: 'tween',
          damping: 25,
          stiffness: 700,
        }}
      />
      {/* cursor div  */}
      {/* <div className="cursor">
          <div className="cursor--small"></div>
          <div className="cursor--large"></div>
          <div className="cursor--text">
            <div className="text">GO HERE! GO HERE! GO HERE! GO HERE!</div>
          </div>
        </div> */}
      {/* </Box> */}
    </ChakraProvider>
  );
}

export default App;
