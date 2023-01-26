import { Center, Heading, Image } from '@chakra-ui/react';

export function BountyCard(props) {
  return (
    <Center
      width="100%"
      height="100%"
      p="20px"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Image
        maxW="80%"
        height="80px"
        src={props.data.logo}
        size="contain"
        objectFit="contain"
      />
      <Heading
        width="100%"
        bg="black"
        color="white"
        rounded="xl"
        fontSize="3xl"
        p="10px"
        textAlign="center"
      >
        {props.data.bounty}
      </Heading>
    </Center>
  );
}
