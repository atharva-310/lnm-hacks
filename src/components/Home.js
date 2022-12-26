import React from 'react';
import { Box, useBreakpointValue} from '@chakra-ui/react';
import steve from '../assets/homeHeroSteve.png';
import steveMob from '../assets/homeHeroSteveMob.png';


export default function Home() {
  const toggleHero = useBreakpointValue({ base: false, md: false,lg: true });
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  console.log(isDesktop);
  return (
    <Box
      // backgroundImage={
      //   'https://ethindia.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.fbc70285.png&w=3840&q=75'
      // }
      bgImage={ toggleHero ? steve : steveMob}

      backgroundColor="black"
      backgroundSize={isDesktop ? "cover" : "contain"}
      backgroundPosition={" center "}
      backgroundRepeat={'no-repeat'}
      height="100vh"
      maxW="100vw"
      fontFamily="'Josefin Sans', sans-serif"
    >
      {/* <Flex
        zIndex="80"
        width="100%"
        maxW="100vw"
        height="100%"
        maxH="100vh"
        // bg="rgba(0, 0, 0, 0.3)"
        position="absolute"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          // bg="green"
          width="80%"
          height="60%"
          color="white"
          fontFamily="'Josefin Sans', sans-serif"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-end"
          letterSpacing="2px"
          textAlign="right"
        >
          <Heading fontSize={['45px', '55px', '60px']}>Think Different</Heading>
          <Text mt="10px" fontSize={['16px', '16px', '18px']} maxW="500px">
            North India biggest
          </Text>
          <Button
            variant="outlined"
            border="1px"
            borderRadius="xl"
            colorScheme="white"
            fontSize="16px"
            margin="10px"
            ml="40px"
          >
            Read More
          </Button>
        </Flex>
      </Flex> */}
    </Box>
  );
}