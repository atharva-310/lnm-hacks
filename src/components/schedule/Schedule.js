import {
  Box,
  Center,
  HStack,
  VStack,
  Divider,
  Text,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { jan27 } from '../../api/schedule';
import H1Gradient from '../Basic/H1Gradient';
import MakePage from '../Basic/MakePage';
import Jan27 from './Jan27';
import Jan28 from './Jan28';
import Jan29 from './Jan29';

const SchedulePage = () => {
  const [curId, setId] = useState(27);
  const isMobPlatinum = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });
  console.log(isMobPlatinum);

  return (
    <>
      <H1Gradient content={'Schedule'} mb="80px" />
      <Center>
        <VStack
          width="100%"
          maxW="1000px"
          minH="400px"
          px="20px"
          pb="50px"
          bg="white"
          boxShadow="5px 7px 0px #E61B1B"
          borderRadius="20px"
          transition={'Height 0.05s'}
        >
          <HStack
            width="100%"
            justifyContent="space-evenly"
            position="relative"
            top="-30px"
          >
            <HStack width="50%" justifyContent="center">
              <Box
                height="60px"
                width="20px"
                borderRadius="20px"
                bg="#E61B1B"
              ></Box>
              <Box
                height="60px"
                width="20px"
                borderRadius="20px"
                bg="#E61B1B"
              ></Box>
              <Box
                height="60px"
                width="20px"
                borderRadius="20px"
                bg="#E61B1B"
              ></Box>
            </HStack>
            <HStack width="50%" justifyContent="center">
              <Box
                height="60px"
                width="20px"
                borderRadius="20px"
                bg="#E61B1B"
              ></Box>
              <Box
                height="60px"
                width="20px"
                borderRadius="20px"
                bg="#E61B1B"
              ></Box>
              <Box
                height="60px"
                width="20px"
                borderRadius="20px"
                bg="#E61B1B"
              ></Box>
            </HStack>
          </HStack>
          <Box width="95%" minH="350px" border="2px solid #000000" rounded="xl">
            <HStack
              width="100%"
              height="80px"
              px="10px"
              justifyContent="space-evenly"
              cursor="pointer"
            >
              <Heading
                textAlign="center"
                color={curId === 27 ? 'black' : 'gray'}
                _hover={{ transform: 'scale(1.1)' }}
                onClick={() => {
                  setId(27);
                }}
              >
                {' '}
                27 Jan
              </Heading>
              <Box bg="black" height="100%" width="2px"></Box>

              <Heading
                textAlign="center"
                color={curId === 28 ? 'black' : 'gray'}
                _hover={{ transform: 'scale(1.1)' }}
                onClick={() => {
                  setId(28);
                }}
              >
                {' '}
                28 Jan
              </Heading>
              <Box bg="black" height="100%" width="2px"></Box>
              <Heading
                textAlign="center"
                color={curId === 29 ? 'black' : 'gray'}
                _hover={{ transform: 'scale(1.1)' }}
                onClick={() => {
                  setId(29);
                }}
              >
                {' '}
                29 Jan
              </Heading>
            </HStack>
            <Box width="100%" bg="black" height="2px"></Box>

            {curId === 27 && <Jan27 />}
            {curId === 28 && <Jan28 />}
            {curId === 29 && <Jan29 />}
          </Box>
        </VStack>
      </Center>
    </>
  );
};

const Schedule = () => {
  return (
    <MakePage
      children={<SchedulePage />}
      id="schedule"
      pb="50px"
      height="auto"
    />
  );
};
export default Schedule;
