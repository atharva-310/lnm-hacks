import { useBreakpointValue, Center } from '@chakra-ui/react';

import steve from '../assets/hero-new.png';
import steveMob from '../assets/hero-new-mob.png';

// Home page
export default function Home() {
  const toggleHero = useBreakpointValue({ base: false, md: true, lg: true });
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Center
      id="home"
      bgImage={toggleHero ? steve : steveMob}
      backgroundColor="black"
      backgroundSize={isDesktop ? 'cover' : 'contain'}
      backgroundPosition={' center '}
      backgroundRepeat={'no-repeat'}
      height="100vh"
      maxW="100vw"
      flexDir="column"
    ></Center>
  );
}
