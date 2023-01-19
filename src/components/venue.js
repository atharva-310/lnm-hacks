import React from 'react';
import MakePage from './Basic/MakePage';
import {
  useBreakpointValue,
  Center,
  Box,
  HStack,
  Image,
  Heading,
  VStack,
  Button,
} from '@chakra-ui/react';
import VenueB from '../assets/venueImage/venueB.jpg';
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
      <H1Gradient content={'Venue'} />
      <Center>
        <Box
          margin="10px"
          // bgImage={VenueB}
          bg="white"
          //bg=' linear-gradient(128deg, rgba(131,58,180,1) 0%, rgba(253,29,143,0.6475840336134453) 50%, rgba(252,176,69,1) 100%);'
          //   minW={isTablet ? '100vw' : 'full'}
          //   minH={isTablet? '100vh':'full'}
          // borderRadius="2%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          rounded="xl"
          padding="20px"
        >
          <VStack
            justifyContent="center"
            padding="40px"
            pr="60px"
            width="550px"
            height="550px"
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
              <Button bg="black" color="white">
                Get Directions
              </Button>
            </Box>
          </VStack>
          <Box width="600px" height="550px">
            <Image src={venue} height="100%" width="100%" rounded={'xl'} />
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default function Venue() {
  return <MakePage id="faq" children={<VenuePage />} mb="100px" />;
}
