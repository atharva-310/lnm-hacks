import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  VStack,
  HStack,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Center,
  Link,
  textDecoration,
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import { useEffect, useRef, useState } from 'react';

import { FiMenu } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';
import socials from '../api/socials';

import logo from '../assets/logo-black.png';
import logoM from '../assets/logo-black-mob.png';
import { AiFillHeart } from 'react-icons/ai';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const [isDark, setColor] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setColor(true);
      } else setColor(false);
    });
  }, []);
  return (
    <Box
      as="section"
      bg={isDark ? 'white  ' : ''}
      filter={isDark ? 'invert(100%)' : ''}
      transition={'background 0.25s, filter 0.75s'}
    >
      <Box as="nav" bg="bg-surface">
        <Center py={{ base: '4', lg: '5' }} px={{ base: '0', lg: '5' }}>
          <HStack
            spacing="0"
            justify="space-between"
            width={isDesktop ? '80vw' : '90vw'}
            maxW="1500px"
            bgColor="white"
            px="20px"
            py={isDark ? '' : '15px'}
            rounded={isDark ? '' : 'xl'}
            transition={'padding 0.75s'}
          >
            {/* <Image src={logo} height="3rem" /> */}
            <HStack>
              <Image height="35px" src={isDesktop ? logo : logoM} />
              {/* <Text
                fontFamily="'Josefin Sans', sans-serif"
                fontSize="28px"
                fontWeight="600"
                color="white"
              >
                Cafephile
              </Text> */}
            </HStack>

            <Spacer />
            {isDesktop ? (
              <Flex justify="flex-end" flex="1">
                <ButtonGroup variant="link" spacing="8" marginEnd="20px">
                  {[
                    { name: 'Home', id: '#home' },
                    { name: 'About', id: '#about' },
                    { name: 'Past Sponsor', id: '#sponsor' },
                  ].map((item, index) => (
                    <a
                      href={item.id}
                      style={{ paddingTop: '13px', textDecoration: 'none' }}
                    >
                      <Button
                        textDecoration="none"
                        color={'black'}
                        fontFamily="'Josefin Sans', sans-serif"
                        fontSize="20px"
                        key={index}
                        _hover={{ transform: 'scale(1.2)' }}
                      >
                        {item.name}
                      </Button>
                    </a>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    className="cursor-hover-item"
                    bg="black"
                    color="white"
                    size="lg"
                    fontFamily="'Josefin Sans', sans-serif"
                    fontSize="20px"
                    // datacursortext="Mail us"
                    datacursortext="Tweet"
                    datacursortextrepeat="5"
                    _hover={{ transform: 'scale(1.1)' }}
                  >
                    Sponsor Us
                  </Button>

                  {/* <InputGroup minW="200px">
                    <Input
                      borderRadius="30px"
                      pb="4px"
                      placeholder="Enter Keyword"
                      _placeholder={{
                        color: 'white',
                      }}
                    />
                    <InputRightElement
                      children={<SearchIcon color="black" />}
                    />
                  </InputGroup> */}
                </HStack>
              </Flex>
            ) : (
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
                      <Image
                        src={logo}
                        height="2.5rem"
                        filter={'invert(100%)'}
                      />
                    </DrawerHeader>

                    <DrawerBody>
                      <VStack width={'100%'} alignItems={'flex-start'}>
                        {['Home', 'Team', 'About', 'Past Sponsers'].map(
                          (item, index) => (
                            // <Box key={index}>
                            <>
                              <Button
                                width={'100%'}
                                color={'white'}
                                bg="black"
                                fontFamily="'Josefin Sans', sans-serif"
                                key={item}
                                fontSize="1.2rem"
                              >
                                {item}
                              </Button>
                              <Divider />
                            </>

                            // </Box>
                          )
                        )}
                      </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                      <VStack width={'100%'}>
                        <Button
                          leftIcon={<FaPhoneAlt />}
                          width="100%"
                          colorScheme="green"
                          variant="solid"
                        >
                          Contact Us
                        </Button>
                        <HStack
                          justify="space-evenly"
                          bg="white"
                          height="50px"
                          w="100%"
                          p="10px"
                          rounded="xl"
                        >
                          {socials.map((item, index) => {
                            return (
                              // <Box>
                              <Center
                                h="100%"
                                w="100%"
                                fontSize="4xl"
                                key={index}
                              >
                                <Link href={item.link} target="_blank">
                                  {item.logo}
                                </Link>
                              </Center>
                              // </Box>
                            );
                          })}
                        </HStack>
                      </VStack>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </HStack>
        </Center>
      </Box>
    </Box>
  );
};
