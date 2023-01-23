import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { community, platinum } from '../../api/sponsors';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { SponserCard } from '../SponsorCard';

export default function Community() {
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
        background=" linear-gradient(0deg, #7F42AF, #7F42AF), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
        backgroundBlendMode={' color, overlay, normal'}
        bgClip="text"
        mb="8px"
      >
        {' '}
        Community Partners
      </Heading>
      <Center width="100%">
        <Box
          height="2px"
          width="200px"
          mb="20px"
          background="linear-gradient(0deg, #7F42AF, #7F42AF), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
          backgroundBlendMode={' color, overlay, normal'}
        ></Box>
      </Center>
      <Flex flexDir="row" flexWrap="wrap" justifyContent={'space-evenly'}>
        {community.map((item, index) => {
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
        {/* <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href={'mailto:sponsors@lnmhacks.xyz'}
        >
          <Box
            my="10px"
            mx="3px"
            width={isMobPlatinum ? '40vw' : '200px'}
            height={isMobPlatinum ? '100px' : '130px'}
            bg="white"
            rounded="xl"
          >
            <Center
              height="100%"
              p="10px"
              rounded="xl"
              bg="linear-gradient(225deg, #231557 0%, #44107A 28.6%, #FF1361 66.82%, #FFF800 100%);"
            >
              <Heading textAlign="center" fontSize="2xl" color="white">
                Sponsor Us
              </Heading>
            </Center>
          </Box>
        </motion.a> */}
      </Flex>
    </>
  );
}
