import React from 'react';
import { useState } from 'react';
// import { send } from 'emailjs-com';
import axios from 'axios';
import MakePage from './Basic/MakePage';
import {
  Heading,
  Box,
  Center,
  Flex,
  Input,
  Button,
  Accordion,
  Textarea,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Stack,
  FormControl,
  FormLabel,
  HStack,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import H1Gradient from './Basic/H1Gradient';
import { question } from '../api/faq';

const FaqPage = () => {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleSubmit = e => {
    console.log('clicked');
    e.preventDefault();

    const data = {
      Name: toSend.name,
      Email: toSend.email,
      Query: toSend.question,
    };
    axios
      .post(
        'https://sheet.best/api/sheets/9b0e8bf0-1b1c-42d7-8681-63f606f45bc5',
        data
      )
      .then(response => {
        console.log(response);
      });
  };

  const handleChange = e => {
    console.log(e);
    setToSend(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    console.log(toSend);
  };
  return (
    // <Box display={{ md: 'flex' }} flexDirection={{ md: 'column' }}>

    // </Box>
    <>
      <H1Gradient content={'Queries & FAQs'} mb="40px" />
      <Box
        display="flex"
        justifyContent={isTablet ? 'center' : 'space-evenly'}
        flexDirection={isTablet ? 'column' : 'row'}
        // color="white"
        width="100%"
      >
        <Box
          className="changingGradient1"
          minW={isTablet ? '80vw' : '450px'}
          borderRadius="2%"
          p={10}
        >
          <Heading mb="30px">Ask your queries</Heading>
          <SimpleGrid py={3} columns={2} columnGap={4} rowGap={3}>
            <GridItem colSpan={2}>
              <form>
                <FormLabel py={1}>Name</FormLabel>
                <Input
                  color="white"
                  size="lg"
                  variant="outline"
                  borderColor="black"
                  value={toSend.name}
                  border="2px solid black"
                  rounded={'xl'}
                  focusBorderColor="gray.600"
                  fontFamily="Inter,sans-serif"
                  mb="20px"
                  name="name"
                  onChange={handleChange}
                />
                <FormLabel py={1}>Email</FormLabel>
                <Input
                  color="white"
                  variant="outline"
                  size="lg"
                  border="2px solid black"
                  rounded={'xl'}
                  borderColor="black"
                  focusBorderColor="gray.600"
                  mb="20px"
                  name="email"
                  value={toSend.email}
                  onChange={handleChange}
                />
                <FormLabel py={1}>Question/Query</FormLabel>
                <Textarea
                  color="white"
                  variant="outline"
                  size="lg"
                  border="2px solid black"
                  rounded={'xl'}
                  borderColor="black"
                  focusBorderColor="gray.600"
                  mb="20px"
                  name="question"
                  value={toSend.question}
                  onChange={handleChange}
                />
                <GridItem p={5}>
                  <Button
                    _hover={{ bg: 'gray.600' }}
                    w="full"
                    variant="solid"
                    color="white"
                    size="lg"
                    bg="black"
                    onClick={handleSubmit}
                  >
                    Click to Submit
                  </Button>
                </GridItem>
              </form>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Box
          // className="changingGradient2"
          minW={isTablet ? '80vw' : '450px'}
          mx={isTablet ? '10px' : '0px'}
          color={'white'}
          borderRadius="2%"
          py={10}
          my="20px"
          overflow="auto"
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <Heading fontSize="2rem">Frequently Asked Questions</Heading>
          <Accordion py={5} allowToggle>
            {question.map(item => {
              return (
                <>
                  <AccordionItem my={3} key={item.id}>
                    <h2>
                      <AccordionButton
                        p={3}
                        _expanded={{ bg: 'black', color: 'white' }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          <Heading fontWeight="medium" fontSize="1rem">
                            {item.question}
                          </Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{item.sol}</AccordionPanel>
                  </AccordionItem>
                </>
              );
            })}
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default function Faq() {
  return <MakePage id="faq" children={<FaqPage />} mb="60px" />;
}
