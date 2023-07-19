import {
  Box,
  chakra,
  Container,
  Stack,
  Link,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
  Center,
} from '@chakra-ui/react';

import socials from '../api/socials';
import logo from '../assets/logo-white-dates.png';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      fontSize="3xl"
      display={'inline-flex'}
      target="_blank"
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        transform: 'scale(1.4)',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg="black" color="white">
      <Container
        as={Stack}
        maxW={'6xl'}
        pb="20px"
        pt="40px"
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box textAlign="center" mb="10px">
          <Image height="50px" src={logo} />
        </Box>

        <Text textAlign="center" fontSize="md">
          LNMHacks 5.0 Flagship Annual Hackathon of{' '}
          <Link href="https://www.lnmiit.ac.in/" target="_blank">
            <Text as="u" fontWeight="600">
              The LNM Institute of Information Technology
            </Text>{' '}
          </Link>
          .
        </Text>
        <Stack direction={'row'} spacing={6}>
          {socials.map((item, index) => {
            return (
              <SocialButton key={index} label={item.name} href={item.link}>
                {item.logo}
              </SocialButton>
            );
          })}
        </Stack>
      </Container>
      <Center my="10px">
        <Text color="whiteAlpha.500">
          Designed & Developed by{' '}
          <Link
            textDecoration="underline"
            target="_blank"
            href="https://atharva-310.github.io/portfolio/"
          >
            Atharva Pakade
          </Link>{' '}
          {', '}
          <Link
            target="_blank"
            href="https://github.com/Ramsha42001"
            textDecoration="underline"
          >
            Ramsha Iqbal
          </Link>{' '}
        </Text>
      </Center>
    </Box>
  );
}
