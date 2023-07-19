import { Box, Center, useBreakpointValue } from '@chakra-ui/react';

// Wrapper for all the sections of the website

export default function MakePage({ children, id, ...props }) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Center
      as="section"
      id={id}
      py={{ base: '4', lg: '5' }}
      px={{ base: '0', lg: '5' }}
      style={{
        paddingBottom: 0,
      }}
    >
      <Box
        pt="120px"
        width={isDesktop ? '80vw' : '90vw'}
        maxW="1500px"
        {...props}
      >
        {children}
      </Box>
    </Center>
  );
}
