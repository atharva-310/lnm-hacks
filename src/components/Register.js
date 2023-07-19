import { Box, Heading, Center, useBreakpointValue } from '@chakra-ui/react';
import { useEffect } from 'react';

import MakePage from './Basic/MakePage';

// Register section will redirect the user to devfolio
function RegisterPage() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  useEffect(() => {
    // devfolio script addition
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      // devfolio script removal (cleanup)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Center
      className="changingGradient"
      minH="400px"
      rounded="xl"
      width={isDesktop ? '80%' : '100%'}
      flexDir="column"
      px="20px"
      color="white"
    >
      <Heading as={'h2'} fontSize="lg" mb="0" pb="0">
        LNMHacks 5.0 | LNMIIT Jaipur
      </Heading>
      <Heading as={'h2'} fontSize="lg" mt="0" fontStyle="italic">
        27 - 29 January
      </Heading>
      <Heading
        as={'h1'}
        fontSize={['3xl', '3xl', '4xl']}
        mt="10px"
        textAlign="center"
        width={isDesktop ? '600px' : 'auto'}
      >
        Unite In The League of Geeks, Join The Confederation of Hackers
      </Heading>

      <Box mt="40px">
        <div
          className="apply-button"
          data-hackathon-slug="lnmhacks"
          data-button-theme="dark-inverted"
        ></div>
      </Box>
    </Center>
  );
}

export default function Register() {
  return (
    <MakePage
      id="register"
      children={<RegisterPage />}
      display="flex"
      flexDirection="row"
      justifyContent={'center'}
    />
  );
}
