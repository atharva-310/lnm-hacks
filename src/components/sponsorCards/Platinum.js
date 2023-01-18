import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { platinum } from '../../api/sponsors';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { SponserCard } from '../SponsorCard';

export default function Platinum() {
  const isMobPlatinum = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <Heading
        textAlign="center"
        background="linear-gradient(0deg, #C95C5C, #C95C5C), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
        backgroundBlendMode={' color, overlay, normal'}
        bgClip="text"
        mb="8px"
      >
        {' '}
        Platinum
      </Heading>
      <Center width="100%">
        <Box
          height="2px"
          width="200px"
          mb="20px"
          background="linear-gradient(0deg, #C95C5C, #C95C5C), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
          backgroundBlendMode={' color, overlay, normal'}
        ></Box>
      </Center>
      <Flex flexDir="row" flexWrap="wrap" justifyContent={'space-evenly'}>
        {platinum.map((item, index) => {
          return (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={item.link}
              target="_blank"
            >
              <Box
                my="10px"
                mx="3px"
                width={isMobPlatinum ? '80vw' : '290px'}
                // maxW="300px"
                height={isMobPlatinum ? '120px' : '180px'}
                bg="white"
                rounded="xl"
              >
                <SponserCard data={item} />
              </Box>
            </motion.a>
          );
        })}
      </Flex>
    </>
  );
}
