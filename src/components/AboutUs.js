import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';

import H1Gradient from './Basic/H1Gradient';
import MakePage from './Basic/MakePage';

import aboutImg from '../assets/aboutImg.png';

// About us section gives description of hackathon
const AboutUsPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <H1Gradient content={'About Hackathon'} />
      <HStack
        w="100%"
        alignItems="center"
        justifyContent={isDesktop ? 'space-between' : 'center'}
        my={isDesktop ? '0' : '40px'}
        flexWrap={isDesktop ? 'no-wrap' : 'wrap'}
        flexDir={isDesktop ? 'row' : 'column-reverse'}
      >
        <Box
          fontFamily="Noto Sans"
          fontWeight="400"
          fontSize="2xl"
          lineHeight="10"
          color="white"
          width={isDesktop ? '60%' : '100%'}
          maxW="800px"
        >
          <Text>
            <Text as="b">LNMHacks</Text> is the flagship annual hackathon of The
            LNM Institute of Information Technology. A{' '}
            <Text as="b"> 72-hours</Text> in-person hackathon with a wide range
            of tracks in the blockchain field, such as DeFi, DAOs, NFTs, and
            gaming. LNMHacks 5.0 expects the participation of innovators and
            developers from all over the nation.
          </Text>
          <Text mt="20px">
            All the participants will be required to create a working
            application to showcase their solution to the problem.
          </Text>
        </Box>
        <VStack width="40%">
          <Image src={aboutImg} />
        </VStack>
      </HStack>
    </>
  );
};
export default function AboutUs() {
  return <MakePage children={<AboutUsPage />} id="about" />;
}
