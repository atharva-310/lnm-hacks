import React from 'react';
import MakePage from './Basic/MakePage';
import {
  useBreakpointValue,
  Center,
  Box,
  Image,
  Heading,
  VStack,
  Button,
} from '@chakra-ui/react';

import venue from '../assets/venueImage/venue1.jpg';
import H1Gradient from './Basic/H1Gradient';
const VenuePage = () => {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });

  return (
    <>
      <H1Gradient content={'Venue'} mb="50px" />

      <Center>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent={isTablet ? 'center' : 'space-evenly'}
          flexDirection={isTablet ? 'column' : 'row'}
          my="40px"
          width={'100%'}
          maxW="1200px"
          bg="white"
          rounded="xl"
          padding="20px"
          py="40px"
        >
          <VStack
            justifyContent="center"
            padding={isTablet ? '10px' : '40px'}
            pr={isTablet ? '10px' : '60px'}
            width={isTablet ? '100%' : '40%'}
            // textAlign="center"
          >
            <Heading as={'h2'} color="black">
              The LNM Institute Of Information Technology
            </Heading>
            <Heading as={'h2'} width="100%" color="black" mt="10px">
              LNMIIT
            </Heading>
            <Heading as={'h4'} width="100%" fontSize="lg" color="gray">
              Rupa ki Nangal, Jaipur, Rajasthan
            </Heading>

            <Box width="100%" height="100px" py={'20px'}>
              <Button
                bg="black"
                color="white"
                as="a"
                href="https://goo.gl/maps/zBz2p7g6TxDMAc1n8"
                target="_blank"
              >
                Get Directions
              </Button>
            </Box>
          </VStack>
          <Center width={isTablet ? '100%' : '55%'} px={isTablet ? '10px' : ''}>
            <Image
              src={venue}
              height={['200px', '300px', '450px']}
              objectFit="cover"
              objectPosition={'center'}
              rounded={'xl'}
            />
          </Center>
        </Box>
      </Center>
    </>
  );
};

export default function Venue() {
  return <MakePage id="venue" children={<VenuePage />} mb="100px" />;
}
