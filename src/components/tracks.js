import React from 'react';
import MakePage from './Basic/MakePage';
import { data } from '../api/tracks';
import { motion } from 'framer-motion';

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
      <H1Gradient content={'Tracks & Bounties'} mb="30px" />

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
                padding="30px"
                bgColor="white"
                rounded="20px"
                width="300px"
                // minW={isTablet ? '40vw' : '340px'}
                // minH={isTablet ? '80vh' : '510px'}
                key={item.id}
              >
                {/* <Flex
                  justifyContent="space-between"
                  width="100%"
                  alignItems="center"
                  mb="20px"
                >
                  <Image
                    width="60px"
                    height="60px"
                    borderRadius="50%"
                    objectFit="fit"
                    src={item.src}
                    boxShadow="0px 5px 3px #7B7A72"
                  />
                  <Box
                    boxShadow="0px 5px 3px #7B7A72"
                    textAlign="center"
                    bgColor="black"
                    width="70px"
                    height="40px"
                    borderRadius="50px"
                  ></Box>
                </Flex> */}

                <Heading
                  as={'h2'}
                  // mt="30px"
                  fontFamily=" 'Inter', sans-seri"
                  fontWeight="700"
                  fontSize="4xl"
                  color="black"
                  width="100%"
                >
                  {item.Heading}
                </Heading>
                <Text
                  fontFamily=" 'Inter', sans-seri"
                  fontSize="20px"
                  fontWeight="500"
                  color="black"
                >
                  {item.text}
                </Text>
                {/* <Flex
                  width="100%"
                  marginTop={isTablet ? '40' : '40'}
                  direction="column"
                  alignItems="center"
                >
                  <Center
                    my="5px"
                    textAlign="center"
                    ButtonShadow="0px 5px 3px #7B7A72"
                    width="100%"
                    height="60px"
                    borderRadius="xl"
                    fontSize="xl"
                    bgColor="black"
                    color="white"
                  >
                    <HStack
                      w="100%"
                      px="20px"
                      py="10px"
                      bg="#C75F60"
                      rounded="xl"
                      justifyContent="space-between"
                    >
                      <Heading>1st </Heading>
                      <Heading> $200 </Heading>
                    </HStack>
                  </Center>
                  <Center
                    my="5px"
                    textAlign="center"
                    ButtonShadow="0px 5px 3px #7B7A72"
                    width="100%"
                    height="60px"
                    borderRadius="xl"
                    fontSize="xl"
                    bgColor="black"
                    color="white"
                  >
                    <HStack
                      w="100%"
                      px="20px"
                      py="10px"
                      bg="#0DAF7D"
                      rounded="xl"
                      justifyContent="space-between"
                    >
                      <Heading>1st </Heading>
                      <Heading> $200 </Heading>
                    </HStack>
                  </Center>
                  <Center
                    my="5px"
                    mb="20px"
                    textAlign="center"
                    ButtonShadow="0px 5px 3px #7B7A72"
                    width="100%"
                    height="60px"
                    borderRadius="xl"
                    fontSize="xl"
                    bgColor="black"
                    color="white"
                  >
                    <HStack
                      w="100%"
                      px="20px"
                      py="10px"
                      bg="#D99B68"
                      rounded="xl"
                      justifyContent="space-between"
                    >
                      <Heading>1st </Heading>
                      <Heading> $200 </Heading>
                    </HStack>
                  </Center>
                  <Button
                    ButtonShadow="0px 5px 3px #7B7A72"
                    width="100%"
                    height="60px"
                    rounded="xl"
                    fontSize="xl"
                    bgColor="black"
                    color="white"
                  >
                    More Info
                  </Button>
                </Flex> */}
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
  return <MakePage id="faq" children={<TracksPage />} mb="100px" />;
}
