import React from 'react';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import MakePage from './Basic/MakePage';
import {
  Heading,
  Box,
  Center,
  FormErrorMessage,
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
  const [isSubmitting, setSubmit] = useState(false);
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    question: '',
  });
  const [formError, setFormError] = useState({
    isInvalid: false,
    message: '',
  });
  const recaptchaRef = React.useRef();

  function emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!toSend.email || regex.test(toSend.email) === false) {
      setFormError({
        isInvalid: true,
        message: 'Email Is Invalid',
      });
      setSubmit(false);
      return false;
    }
    return true;
  }
  const handleSubmit = e => {
    setSubmit(true);
    if (
      toSend.email.trim() === '' ||
      toSend.name.trim() === '' ||
      toSend.question.trim() === ''
    ) {
      setFormError({
        isInvalid: true,
        message: 'Please fill all the field',
      });
      setSubmit(false);
      return;
    }
    if (emailValidation()) {
      const recaptchaValue = recaptchaRef.current.getValue();
      if (recaptchaValue) {
        const data = {
          Name: toSend.name,
          Email: toSend.email,
          Query: toSend.question,
        };
        setFormError({
          isInvalid: false,
          message: '',
        });
        axios
          .post(
            'https://sheet.best/api/sheets/9b0e8bf0-1b1c-42d7-8681-63f606f45bc5',
            data
          )
          .then(response => {
            console.log(response);
            recaptchaRef.current.reset();
            setToSend({
              name: '',
              email: '',
              question: '',
            });
            setSubmit(false);
          });
      } else {
        setFormError({
          isInvalid: true,
          message: 'Check reCAPTCHA',
        });
        setSubmit(false);
        return;
      }
    }
  };

  const handleChange = e => {
    setFormError({
      isInvalid: false,
      message: '',
    });

    setToSend(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
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
        color='black'
          className="changingGradient1"
          bg="white"
          minW={isTablet ? '80vw' : '40%'}
          borderRadius="2%"
          p={10}
        >
          <Heading mb="30px">Ask your queries</Heading>
          <SimpleGrid py={3} columns={2} columnGap={4} rowGap={3}>
            <GridItem colSpan={2}>
              <FormControl isRequired isInvalid={formError.isInvalid}>
                <FormLabel py={1}>Name</FormLabel>
                <Input
                  size="lg"
                  variant="outline"
                  borderColor="black"
                  value={toSend.name}
                  border="2px solid black"
                  rounded={'xl'}
                  focusBorderColor="gray.600"
                  fontFamily="Inter,sans-serif"
                  mb="20px"
                  type="name"
                  name="name"
                  onChange={handleChange}
                />
                <FormLabel py={1}>Email</FormLabel>
                <Input
                  variant="outline"
                  size="lg"
                  border="2px solid black"
                  rounded={'xl'}
                  borderColor="black"
                  focusBorderColor="gray.600"
                  mb="20px"
                  type="email"
                  name="email"
                  value={toSend.email}
                  onChange={handleChange}
                />
                <FormLabel py={1}>Question/Query</FormLabel>
                <Textarea
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
                <FormErrorMessage>{formError.message}</FormErrorMessage>
                <GridItem py={5}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Le17QckAAAAAD6KjyA_HEDhmmokxOMGqL9X79Wv"
                  />
                  ,
                  <Button
                    isLoading={isSubmitting}
                    type="submit"
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
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Box
          // className="changingGradient2"
          minW={isTablet ? '80vw' : '40%'}
          mx={isTablet ? '10px' : '0px'}
          maxW={isTablet ? '' : '40%'}
          color={'white'}
          borderRadius="xl"
          margin="30px"
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
                  <AccordionItem
                    my={3}
                    key={item.id}
                    // maxW={isTablet ? '100%' : '500px'}
                  >
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
                    <AccordionPanel pb={4} maxW="100%">
                      {item.sol}
                    </AccordionPanel>
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
  return <MakePage id="faq" children={<FaqPage />} />;
}
