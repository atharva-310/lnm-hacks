import {
  Button,
  Image,
  VStack,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
  Center,
} from '@chakra-ui/react';
import { useRef } from 'react';

import logo from '../../assets/logo-black.png';
import { FiMenu } from 'react-icons/fi';
import socials from '../../api/socials';

// This nav bar component will be used for the mobile view
export default function MobMenu({ navItems }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <IconButton
        variant="solid"
        bg="black"
        color="white"
        icon={<FiMenu fontSize="2rem" />}
        aria-label="Open Menu"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton mt="13px" color="black" bg="white" />
          <DrawerHeader>
            <Image src={logo} height="2.5rem" filter={'invert(100%)'} />
          </DrawerHeader>

          <DrawerBody>
            <VStack width={'100%'} alignItems={'flex-start'}>
              {navItems.map((item, index) => (
                // <Box key={index}>
                <>
                  <Button
                    width={'100%'}
                    color={'white'}
                    bg="black"
                    fontFamily="'Josefin Sans', sans-serif"
                    key={item}
                    fontSize="1.2rem"
                    as="a"
                    href={item.id}
                    // onClick={onClose}
                  >
                    {item.name}
                  </Button>
                  <Divider />
                </>

                // </Box>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <VStack
              width={'100%'}
              fontFamily="'Josefin Sans', sans-serif"
              fontSize="20px"
            >
              <Button
                width="100%"
                rounded="lg"
                variant="solid"
                as="a"
                href="#register"
                // onClick={onClose}
              >
                Projects
              </Button>
              {/* <Button
                          width="100%"
                          rounded="lg"
                          variant="solid"
                          as="a"
                          href="mailto:sponsors@lnmhacks.xyz"
                          target="_blank"
                          // onClick={onClose}
                        >
                          Sponsor Us
                        </Button> */}

              <HStack
                justify="space-evenly"
                bg="white"
                height="50px"
                w="100%"
                p="10px"
                rounded="lg"
              >
                {socials.map((item, index) => {
                  return (
                    <Center
                      as="a"
                      href={item.link}
                      target="_blank"
                      h="100%"
                      w="100%"
                      fontSize="4xl"
                      key={index}
                    >
                      {item.logo}
                    </Center>
                  );
                })}
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
