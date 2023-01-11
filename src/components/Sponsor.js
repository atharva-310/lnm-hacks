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
      <H1Gradient content={'Sponsors'} />

      <Flex
        flexDir="row"
        flexWrap="wrap"
        justifyContent={'space-evenly'}
        pt="30px"
      >
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
      <Flex
        flexDir="row"
        flexWrap="wrap"
        justifyContent={'space-evenly'}
        pt="30px"
      >
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
