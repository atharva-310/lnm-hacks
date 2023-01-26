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
import { jan27 } from '../../api/schedule';

export default function Jan27() {
  const isMobPlatinum = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });
  return (
    <>
      {isMobPlatinum ? (
        <VStack width="100%" mt="20px" mx="20px">
          {jan27.map((item, index) => {
            return (
              <>
                <Box width="100%">
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
      ) : (
        <HStack width="100%">
          <VStack width="50%" mt="20px" mx="20px">
            {jan27.map((item, index) => {
              if (index >= 4) {
                return null;
              }
              return (
                <>
                  <Box width="100%">
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
            {jan27.map((item, index) => {
              if (index < 4) {
                return null;
              }
              return (
                <>
                  <Box width="100%">
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
