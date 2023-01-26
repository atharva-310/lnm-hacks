import { Center, Image } from '@chakra-ui/react';

export function SponserCard(props) {
  return (
    <Center width="100%" height="100%" p="20px">
      <Image
        maxW="100%"
        maxH="100%"
        src={props.data.logo}
        size="contain"
        objectFit="contain"
      />
    </Center>
  );
}
