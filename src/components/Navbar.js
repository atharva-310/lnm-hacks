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
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

import * as React from 'react';

import { FiMenu } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import logo from '../logo.svg';

import { AiFillHeart } from 'react-icons/ai';

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box as="section">
      <Box as="nav" bg="bg-surface">
        <Center py={{ base: '4', lg: '5' }} px={{ base: '0', lg: '5' }}>
          <HStack
            spacing="0"
            justify="space-between"
            width={isDesktop ? '80vw' : '90vw'}
            maxW="1500px"
            bgColor="white"
            py="15px"
            px="20px"
            rounded="xl"
            boxShadow={'dark-lg'}
          >
            {/* <Image src={logo} height="3rem" /> */}
            <HStack>
              <Image
                src={
                  isDesktop
                    ? 'https://ethindia.co/_next/static/media/ethindia-logo-name.c9e0fba6.svg'
                    : 'https://ethindia.co/assets/logos/ethindia-logo.svg'
                }
              />
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
                  {['Home', 'Team', 'About', 'Past Sponsers'].map(item => (
                    <>
                      <Button
                        color={'black'}
                        fontFamily="'Josefin Sans', sans-serif"
                        fontSize="20px"
                        key={item}
                        // _hover={{ borderBottom: '1px black solid' }}
                      >
                        {item}
                      </Button>
                    </>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    bg="blue.800"
                    color="white"
                    size="lg"
                    fontFamily="'Josefin Sans', sans-serif"
                    fontSize="20px"
                  >
                    Register
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
                  <DrawerContent>
                    <DrawerCloseButton mt="17px" color="white" bg="black" />
                    <DrawerHeader>
                      <Image
                        src={
                          'https://ethindia.co/_next/static/media/ethindia-logo-name.c9e0fba6.svg'
                        }
                        height="3rem"
                      />
                    </DrawerHeader>

                    <DrawerBody>
                      <VStack width={'100%'} alignItems={'flex-start'}>
                        {['Home', 'Team', 'About', 'Past Sponsers'].map(
                          item => (
                            <>
                              <Button
                                width={'100%'}
                                color={'black'}
                                bg="white"
                                fontFamily="'Josefin Sans', sans-serif"
                                key={item}
                                fontSize="1.2rem"
                              >
                                {item}
                              </Button>
                              <Divider />
                            </>
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
