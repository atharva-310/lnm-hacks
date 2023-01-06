import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

import sponsorData from '../api/sponser';
import H1Gradient from './Basic/H1Gradient';
import MakePage from './Basic/MakePage';
import { SponserCard, SponserUsCard } from './SponserCard';

import '../styles/main.css';
const SponsorPage = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    sm: true,
    md: true,
    lg: true,
  });

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <H1Gradient content={'Past Sponsors'} />
      <Flex
        flexDir="row"
        flexWrap="wrap"
        justifyContent={'space-evenly'}
        py="30px"
      >
        {sponsorData.map((item, index) => {
          return (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {}}
              href={item.link}
              target="_blank"
            >
              <Box
                my="10px"
                mx="3px"
                width={isDesktop ? '200px' : '80vw'}
                maxW="300px"
                height={isDesktop ? '150px' : '100px'}
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
        >
          <Box
            // key={index}
            my="10px"
            mx="3px"
            width={isDesktop ? '200px' : '80vw'}
            maxW="300px"
            height={isDesktop ? '150px' : '100px'}
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
              <Heading textAlign="center" fontSize="4xl" color="white">
                Sponsor Us
              </Heading>
            </Center>
            {/* <Box
              width="100%"
              height="7px"
              px="30px"
              mt="15px"
              bgGradient="linear(to-r,#4AC7FA, #E649F5)"
            ></Box> */}
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
