import { Box, Heading, Text } from '@chakra-ui/react';

// Custom Heading component with theme styled

export default function H1Gradient({ content, ...props }) {
  return (
    <>
      <Heading
        as={'h1'}
        bgGradient="linear(to-r,#4AC7FA, #E649F5,  #E649F5)"
        bgClip="text"
        fontSize="5xl"
        width="500px"
        maxW={'90vw'}
      >
        {content}
      </Heading>
      <Box
        width="50px"
        height="7px"
        mt="15px"
        bgGradient="linear(to-r,#4AC7FA, #E649F5)"
        {...props}
      ></Box>
    </>
  );
}
