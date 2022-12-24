import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Spacer,
  Image,
  Box,
  Heading,
} from '@chakra-ui/react';
import hawaMahal from '../assests/hawaMahal.jpg';
import logoWeb from '../assests/logoNew.png';
import logoMob from '../assests/logoNewMob.png';
import logo4Web from '../assests/4web.png';
import logo4Mob from '../assests/4mob.png';

export default function Hero() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Flex
      w={'full'}
      h={'92vh'}
      maxH={'800px'}
      // marginTop={["15px","28px"]}
      backgroundImage={hawaMahal}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'flex-center'}
        pt={'3vh'}
        alignItems="flex-start"
        //   px={useBreakpointValue({ base: 4, md: 8 })}

        background="rgba(255,255,255, 0.8)"
      >
        <Flex
          width={'96vw'}
          height="80vh"
          justify="center"
          flexDirection={'column'}
        >
          <Stack direction={'row'} alignSelf="flex-start">
            <Image src={isDesktop ? logoWeb : logoMob} />
          </Stack>

          <Stack
            direction={'row'}
            alignSelf="flex-end"
            mt={isDesktop ? '30px' : '80px'}
            marginEnd={isDesktop ? '50px' : 0}
          >
            <Image src={isDesktop ? logo4Web : logo4Mob} />
          </Stack>

          <Stack
            direction={'row'}
            background="white"
            justify={'center'}
            width={isDesktop ? '50vw' : '100vw'}
            mt={isDesktop ? '30px' : '80px'}
          >
            <Heading padding={'10px'} fontSize={isDesktop ? '4xl' : '2xl'}>
              BRINGING JAIPUR TOGETHER
            </Heading>
          </Stack>
        </Flex>
      </VStack>
    </Flex>
  );
}
