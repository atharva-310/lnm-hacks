import {
  useBreakpointValue,
  Box,
  Image,
  Heading,
  Flex,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import MakePage from '../Basic/MakePage';
import H1Gradient from '../Basic/H1Gradient';
import BountyCard from './BountyCard';

import { bounty } from '../../api/bounty';
import { data } from '../../api/tracks';

// Display all tracks and bounties
const TracksBountyPage = () => {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });
  const isMob = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false,
  });
  return (
    <>
      <H1Gradient content={'Tracks & Bounties'} mb="30px" />
      <Center>
        <Flex
          flexDir={isTablet ? 'column' : 'row'}
          flexWrap="wrap"
          justifyContent={isTablet ? 'center' : 'space-evenly'}
          mb="40px"
        >
          {data.map(item => {
            return (
              <VStack
                m={'10px'}
                padding="25px"
                bgColor="white"
                rounded="10px"
                width={isMob ? '85vw' : '300px'}
                key={item.id}
              >
                <Box color="black" width="100%" mb="14px">
                  <Image
                    src={item.src}
                    widht="100%"
                    objectFit="cover"
                    style={{
                      width: '100%',
                    }}
                  />
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
                  width="100%"
                  fontFamily=" 'Inter', sans-seri"
                  fontSize="md"
                  fontWeight="500"
                  fontStyle={'bold'}
                  color="black"
                  px="4px"
                  mt="0px"
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

export default function TracksBounty() {
  return <MakePage id="tracks" children={<TracksBountyPage />} />;
}
