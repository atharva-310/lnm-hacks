import { Box, Heading, Center, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import MakePage from './Basic/MakePage';
function RegisterPage() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Center
      className="changingGradient"
      minH="30vh"
      rounded="xl"
      width={isDesktop ? '80%' : '100%'}
      flexDir="column"
      px="20px"
      color="white"
    >
      <Heading as={'h2'} fontSize="lg">
        LNMHacks 5.0 | LNMIIT Jaipur
      </Heading>
      <Heading
        as={'h1'}
        fontSize="4xl"
        mt="15px"
        // textTransform="uppercase"
        // color="black"
        textAlign="center"
        width={isDesktop ? '600px' : 'auto'}
      >
        Unite in the League of Geeks, Join the Confederation of Hackers
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
      minH="70vh"
    />
  );
}
