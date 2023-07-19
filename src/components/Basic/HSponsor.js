import { Box, Center, Heading } from '@chakra-ui/react';
export const HSponsor = ({ background, title }) => {
  return (
    <>
      <Heading
        mt="20px"
        textAlign="center"
        background={background}
        backgroundBlendMode={' color, overlay, normal'}
        bgClip="text"
        mb="8px"
      >
        {title}
      </Heading>
      <Center width="100%">
        <Box
          height="2px"
          width="200px"
          mb="20px"
          background={background}
          backgroundBlendMode={' color, overlay, normal'}
        ></Box>
      </Center>
    </>
  );
};
