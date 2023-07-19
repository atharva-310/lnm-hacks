import { Box, Center, HStack, VStack, Heading } from '@chakra-ui/react';

import { useState } from 'react';

// Custom wrapper components
import H1Gradient from '../Basic/H1Gradient';
import MakePage from '../Basic/MakePage';

// Data for each day's schedule
import { jan27 } from '../../api/schedule';
import { jan28 } from '../../api/schedule';
import { jan29 } from '../../api/schedule';

import DayPage from './DayPage';

// Calendar like component display schedule for each day
const SchedulePage = () => {
  const [curId, setId] = useState(27);
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
            {[...Array(2)].map(i => (
              <HStack width="50%" justifyContent="center" key={i}>
                {[...Array(3)].map((i, index) => (
                  <Box
                    key={index}
                    height="60px"
                    width="20px"
                    borderRadius="20px"
                    bg="#E61B1B"
                  ></Box>
                ))}
              </HStack>
            ))}
          </HStack>

          <Box width="95%" minH="350px" border="2px solid #000000" rounded="xl">
            <HStack
              width="100%"
              height="80px"
              px="10px"
              justifyContent="space-evenly"
              cursor="pointer"
            >
              {['27 Jan', '28 Jan', '29Jan'].map((item, index) => {
                const id = index + 27;
                return (
                  <>
                    <Heading
                      key={index}
                      textAlign="center"
                      color={curId === id ? 'black' : 'gray'}
                      _hover={{ transform: 'scale(1.1)' }}
                      onClick={() => {
                        setId(id);
                      }}
                    >
                      {item}
                    </Heading>

                    {index !== 2 && (
                      <Box bg="black" height="100%" width="2px"></Box>
                    )}
                  </>
                );
              })}
            </HStack>
            <Box width="100%" bg="black" height="2px"></Box>

            {/* Based on the state of dynamically set the current page of the calendar */}
            {curId === 27 && <DayPage data={jan27} numberOfItems={4} />}
            {curId === 28 && <DayPage data={jan28} numberOfItems={5} />}
            {curId === 29 && <DayPage data={jan29} numberOfItems={3} />}
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
