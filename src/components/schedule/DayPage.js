import {
  Box,
  HStack,
  VStack,
  Divider,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

// Will display the schedule of each day in form of table
export default function DayPage({ data, numberOfItems }) {
  const isMob = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });
  return (
    <>
      {isMob ? (
        <VStack width="100%" mt="20px" mx="20px">
          {data.map((item, index) => {
            return (
              <>
                <Box key={index} width="100%" fontSize="2xl">
                  <Heading display="inline" color="gray" me="20px">
                    {item.time}
                  </Heading>
                  <Heading display="inline" color="black">
                    {item.event}
                  </Heading>
                  <Divider width="90%" my="10px" />
                </Box>
              </>
            );
          })}
        </VStack>
      ) : (
        <HStack width="100%">
          <VStack width="50%" mt="20px" mx="20px">
            {data.map((item, index) => {
              if (index >= numberOfItems) {
                return null;
              }
              return (
                <>
                  <Box width="100%" key={index}>
                    <Heading
                      fontSize="2xl"
                      display="inline"
                      color="gray"
                      me="20px"
                    >
                      {item.time}
                    </Heading>
                    <Heading fontSize="2xl" display="inline" color="black">
                      {item.event}
                    </Heading>
                    <Divider width="90%" my="10px" />
                  </Box>
                </>
              );
            })}
          </VStack>
          <VStack width="50%" mt="20px" mx="20px">
            {data.map((item, index) => {
              if (index < numberOfItems) {
                return null;
              }
              return (
                <>
                  <Box width="100%" key={index}>
                    <Heading
                      fontSize="2xl"
                      display="inline"
                      color="gray"
                      me="20px"
                    >
                      {item.time}
                    </Heading>
                    <Heading fontSize="2xl" display="inline" color="black">
                      {item.event}
                    </Heading>
                    <Divider width="90%" my="10px" />
                  </Box>
                </>
              );
            })}
          </VStack>
        </HStack>
      )}
    </>
  );
}
