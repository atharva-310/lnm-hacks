import React from 'react';
import MakePage from './Basic/MakePage';
import { data } from '../api/tracks';
import { motion } from 'framer-motion';
import defiTracks from '../assets/cur-sponsor-logo/defiTracks.png';
import prize from '../assets/prizeImage.png'
import {
  useBreakpointValue,
  Center,
  Box,
  Image,
  Heading,
  Flex,
  Text,
  Divider,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react';
import H1Gradient from './Basic/H1Gradient';
import { SponserCard } from './SponsorCard';
import { gold } from '../api/sponsors';
import { BountyCard } from './BountyCard';
import { bounty } from '../api/bounty';
const TracksPage = () => {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  return (
    <>
      <H1Gradient content={'Bounties'} mb="30px" />
      
      <Center>
        <Flex
          flexDir={isTablet ? 'column' : 'row'}
          flexWrap="wrap"
          justifyContent={isTablet ? 'center' : 'space-evenly'}
        >
          {data.map(item => {
            return (
              <VStack
                m={'10px'}
                padding="20px"
                bgColor="white"
                rounded="20px"
                width="300px"
                key={item.id}
              >
                <Box  color='black' 
                width='100%'

                >
                   <Image src={defiTracks} />
                </Box>
                <Heading
                  as={'h2'}
                  fontFamily=" 'Inter', sans-seri"
                  fontWeight="700"
                  fontSize="3xl"
                  color="black"
                  width="100%"
                >
                  {item.Heading}
                </Heading>
                <Text
                  fontFamily=" 'Inter', sans-seri"
                  fontSize='sm'
                  fontWeight="500"
                  color="black"
                >
                  {item.text}
                </Text>
              </VStack>
            );
          })}
        </Flex>
      </Center>

      {/* Bounties */}
      <Flex flexDir="row" flexWrap="wrap" justifyContent={'space-evenly'}>
        {bounty.map((item, index) => {
          return (
            <motion.a
              key={index}
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.9 }}
              href={item.link}
              target="_blank"
            >
              <Box
                my="10px"
                mx="3px"
                // width={isTablet ? '20vw' : '200px'}
                width={['40vw', '40vw', '20vw', '20vw', '200px']}
                height={isTablet ? '130px' : '130px'}
                bg="white"
                rounded="xl"
              >
                <BountyCard data={item} />
              </Box>
            </motion.a>
          );
        })}
      </Flex>
    </>
  );
};

export default function Tracks() {
  return <MakePage id="tracks" children={<TracksPage />} />;
}
