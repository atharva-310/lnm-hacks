import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function H1Gradient(props) {
  return (
    <>
      <Heading
        as={'h1'}
        bgGradient="linear(to-r,#4AC7FA, #E649F5,  #E649F5)"
        bgClip="text"
        fontSize="5xl"
        width="400px"
        maxW={'100vw'}
      >
        {props.content}
      </Heading>
      <Box
        width="50px"
        height="7px"
        mt="15px"
        bgGradient="linear(to-r,#4AC7FA, #E649F5)"
      ></Box>
    </>
  );
}
