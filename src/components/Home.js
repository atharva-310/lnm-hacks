import React from 'react';
import {
  Box,
  useBreakpointValue,
  Flex,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import steve from '../assets/homeHeroSteve.png';
import steveMob from '../assets/homeHeroSteveMob.png';

export default function Home() {
  const toggleHero = useBreakpointValue({ base: false, md: false, lg: true });
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  //   console.log(isDesktop);
  return (
    <Box
      id="home"
      // backgroundImage={
      //   'https://ethindia.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.fbc70285.png&w=3840&q=75'
      // }
      bgImage={toggleHero ? steve : steveMob}
      backgroundColor="black"
      backgroundSize={isDesktop ? 'cover' : 'contain'}
      backgroundPosition={' center '}
      backgroundRepeat={'no-repeat'}
      height="100vh"
      maxW="100vw"
      fontFamily="'Josefin Sans', sans-serif"
    >
      <Box></Box>
    </Box>
  );
}
