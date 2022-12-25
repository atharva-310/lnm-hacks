import { Box, Center, Heading, HStack, useBreakpointValue, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import d1 from '../../assets/sch-d1.png'
export default function Schedule() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    < Box 
      mx={isDesktop ? '10vw' : '5vw'}
      pt="15vh"
      minH="100vh"
      maxW="1500px" 
      justifyContent="center"
    >
      <Heading mb="10px"> Schedule</Heading>
      <Box
        width={isDesktop ? '80vw' : '90vw'}
        maxW="1500px"
        rounded={"xl"}
        minH="70vh"
        bg="#9BDDF4"
        bgImage={d1}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="right top"
      >
        <HStack 
          padding={"10px"}
        >
          
          <Center 
            w="60px" 
            h="60px" 
            rounded={"xl"}
            bgColor="white"
            fontWeight="700"
            // color="red"
            textAlign="center"
          >
            Jan
            <br/>
            8
          </Center>
          <Center 
            w="60px" 
            h="60px" 
            rounded={"xl"}
            bgColor="white"
            fontWeight="700"
            // color="red"
            textAlign="center"
          >
            Jan
            <br/>
            10
          </Center>
        </HStack>
        <motion.div
          style={{
            width: "60px",
            height: "60px"
          }}
          // initial={{ opacity: 1 }}
          whileHover={{ scale: 1.2}}
        >
          <Center 
            w="60px" 
            h="60px" 
            rounded={"xl"}
            bgColor="white"
            fontWeight="700"
            // color="red"
            textAlign="center"
          >
            Jan
            <br/>
            10
          </Center>
        </motion.div>
        {/* <VStack>
          <Box >

          </Box>
        </VStack> */}
      </Box>
    </Box>
  );
}
