import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { community, other, platinum } from '../../api/sponsors';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { SponserCard } from '../SponsorCard';

export default function Other() {
  const isMobPlatinum = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  return (
    <>
      {/* other  */}
      <Heading
        mt="20px"
        textAlign="center"
        background="linear-gradient(0deg, #59CAFA, #59CAFA), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
        backgroundBlendMode={' color, overlay, normal'}
        bgClip="text"
        mb="8px"
      >
        {' '}
        Other Sponsors
      </Heading>
      <Center width="100%">
        <Box
          height="2px"
          width="200px"
          mb="20px"
          background="linear-gradient(0deg, #59CAFA, #59CAFA), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
          backgroundBlendMode={' color, overlay, normal'}
        ></Box>
      </Center>
      <Flex flexDir="row" flexWrap="wrap" justifyContent={'space-evenly'}>
        {other.map((item, index) => {
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
                mx={isMobPlatinum ? '3px' : '20px'}
                width={isMobPlatinum ? '40vw' : '250px'}
                height={isMobPlatinum ? '100px' : '130px'}
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
