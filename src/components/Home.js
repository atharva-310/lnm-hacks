import React from 'react';
import {
  Box,
  useBreakpointValue,
  Center,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import steve from '../assets/hero-new.png';

// import steveMob from '../assets/homeHeroSteveMob.png';
import steveMob from '../assets/hero-new-mob.png';
export default function Home() {
  const toggleHero = useBreakpointValue({ base: false, md: true, lg: true });
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  //   console.log(isDesktop);
  return (
    <Center
      id="home"
      // backgroundImage={
      //   'https://ethindia.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.fbc70285.png&w=3840&q=75'
      // }
      bgImage={toggleHero ? steve : steveMob}
      // bgImage={steve}
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

// export default function Home() {
//   const toggleHero = useBreakpointValue({ base: false, md: false, lg: true });
//   const isDesktop = useBreakpointValue({ base: false, lg: true });
//   //   console.log(isDesktop);
//   return (
//     <Center
//       id="home"
//       // backgroundImage={
//       //   'https://ethindia.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.fbc70285.png&w=3840&q=75'
//       // }
//       // bgImage={toggleHero ? steve : steveMob}
//       bgImage={steve}
//       backgroundColor="black"
//       backgroundSize={isDesktop ? 'cover' : 'contain'}
//       backgroundPosition={' center '}
//       backgroundRepeat={'no-repeat'}
//       height="100vh"
//       maxW="100vw"
//       flexDir="column"
//     >
//       <Heading
//         fontFamily="'Source Serif Pro', serif"
//         fontSize="60px"
//         fontWeight="500"
//         fontStyle="italic"
//       >
//         Think Different
//       </Heading>
//       <Heading
//         fontFamily="'Source Serif Pro', serif"
//         fontSize="60px"
//         fontWeight="400"
//         fontStyle="italic"
//       >
//         {' '}
//         Think{' '}
//         <Text
//           as="b"
//           fontFamily="'Archivo', sans-serif"
//           display="inline"
//           fontStyle="normal"
//           bgGradient="linear(to-r,#3e65aa, #735ea6,  #c5389c)"
//           bgClip="text"
//         >
//           LNM{' '}
//           <Text display="inline" fontStyle="italic">
//             HACKS
//           </Text>
//         </Text>
//       </Heading>
//       <Text
//         fontFamily="'Open Sans', sans-serif"
//         fontStyle=" bold"
//         // fontWeight="semiBold"
//       >
//         27-29 JANUARY
//       </Text>
//     </Center>
//   );
// }
