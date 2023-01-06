import {
  Box,
  HStack,
  VStack,
  Text,
  Image,
  useBreakpointValue,
  Tag,
  Flex,
  TagLabel,
} from '@chakra-ui/react';
import H1Gradient from './Basic/H1Gradient';
import MakePage from './Basic/MakePage';
import aboutImg from '../assets/aboutImg.png';
const AboutUsPage = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box>
      <H1Gradient content={'About Hackathon'} />
      <HStack
        w="100%"
        alignItems="center"
        justifyContent={isDesktop ? 'space-between' : 'center'}
        my={isDesktop ? '0' : '40px'}
        flexWrap={isDesktop ? 'no-wrap' : 'wrap'}
        // py="10px"
        // flexDirection={isDesktop ? 'row' : 'column-reverse'}
        flexDir={isDesktop ? 'row' : 'column-reverse'}
      >
        <Box
          fontFamily="Noto Sans"
          fontWeight="400"
          fontSize="2xl"
          // letterSpacing="2px"
          lineHeight="10"
          color="white"
          width={isDesktop ? '60%' : '100%'}
          // minW="500px"
        >
          <Box maxW="800px">
            <Text>
              <Text as="b">LNMHacks</Text> is the flagship annual hackathon of
              The LNM Institute of Information Technology. A{' '}
              <Text as="b"> 72-hours</Text> in-person hackathon with a wide
              range of tracks in the blockchain field, such as DeFi, DAOs, NFTs,
              and gaming. LNMHacks 5.0 expects the participation of innovators
              and developers from all over the nation.
            </Text>
            <Text mt="20px">
              All the participants will be required to create a working
              application to showcase their solution to the problem.
            </Text>
            {/* <Flex>
              {['sm', 'md', 'lg'].map(size => (
                <Tag size="lg" colorScheme="red" borderRadius="full">
                  <TagLabel>Segun</TagLabel>
                </Tag>
              ))}
            </Flex> */}
          </Box>
        </Box>
        <VStack width="40%">
          <Box>
            <Image src={aboutImg} />
          </Box>
          {/* <Box w="90%" bg="white" minH="200px"></Box> */}
        </VStack>
      </HStack>
    </Box>
  );
};
export default function AboutUs() {
  return <MakePage children={<AboutUsPage />} minH="90vh" id="about" />;
}
