import { Box, Center, useBreakpointValue } from '@chakra-ui/react';

export default function MakePage({ children, id, ...props }) {
  // console.log(props);
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" id={id}>
      <Center
        py={{ base: '4', lg: '5' }}
        px={{ base: '0', lg: '5' }}
        style={{
          paddingBottom: 0,
        }}
      >
        <Box
          pt="120px"
          minH="80vh"
          width={isDesktop ? '80vw' : '90vw'}
          {...props}
        >
          {children}
        </Box>
      </Center>
    </Box>
  );
}
