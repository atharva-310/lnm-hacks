import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

import sponsorData from '../api/pastSponsor';
import { gold, platinum } from '../api/sponsors';
import H1Gradient from './Basic/H1Gradient';
import MakePage from './Basic/MakePage';
import { SponserCard } from './SponsorCard';

const SponsorPage = () => {
  const isMobPlatinum = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <H1Gradient content={'Sponsors'} mb="30px" />
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
                width={isMobPlatinum ? '80vw' : '350px'}
                // maxW="300px"
                height={isMobPlatinum ? '120px' : '200px'}
                bg="white"
                rounded="xl"
              >
                <SponserCard data={item} />
              </Box>
            </motion.a>
          );
        })}
      </Flex>
      <Heading
        mt="20px"
        textAlign="center"
        background="  linear-gradient(0deg, #D09742, #D09742), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
        backgroundBlendMode={' color, overlay, normal'}
        bgClip="text"
        mb="8px"
      >
        {' '}
        Gold
      </Heading>
      <Center width="100%">
        <Box
          height="2px"
          width="200px"
          mb="20px"
          background="  linear-gradient(0deg, #D09742, #D09742), linear-gradient(339.03deg, rgba(255, 255, 255, 0) 52.79%, #FFFFFF 95.95%), linear-gradient(76.82deg, #576265 11.6%, #9EA1A1 25.31%, #848B8A 48.06%, #576265 55.72%, #576265 77.23%, #757A7B 85.34%, #576265 91.31%);"
          backgroundBlendMode={' color, overlay, normal'}
        ></Box>
      </Center>
      <Flex flexDir="row" flexWrap="wrap" justifyContent={'space-evenly'}>
        {gold.map((item, index) => {
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
                width={isMobPlatinum ? '40vw' : '200px'}
                height={isMobPlatinum ? '120px' : '150px'}
                bg="white"
                rounded="xl"
              >
                <SponserCard data={item} />
              </Box>
            </motion.a>
          );
        })}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href={'mailto:sponsors@lnmhacks.xyz'}
        >
          <Box
            my="10px"
            mx="3px"
            width={isMobPlatinum ? '40vw' : '200px'}
            height={isMobPlatinum ? '120px' : '150px'}
            bg="white"
            rounded="xl"
          >
            {/* <SponserCard data={item} /> */}
            <Center
              height="100%"
              p="10px"
              rounded="xl"
              bg="linear-gradient(225deg, #231557 0%, #44107A 28.6%, #FF1361 66.82%, #FFF800 100%);"
            >
              <Heading textAlign="center" fontSize="3xl" color="white">
                Sponsor Us
              </Heading>
            </Center>
          </Box>
        </motion.a>
      </Flex>
    </>
  );
};

const Sponsor = () => {
  return <MakePage children={<SponsorPage />} id="sponsor" />;
};
export default Sponsor;
