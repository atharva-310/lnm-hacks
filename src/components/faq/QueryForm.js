import { useRef } from 'react';
import {
  Heading,
  Box,
  FormErrorMessage,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';

// Component will be embedded with the form to avoid form filling by robots
import ReCAPTCHA from 'react-google-recaptcha';
import useFrom from '../../hooks/useForm';

// Query form
export default function QueryForm() {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });
  const recaptchaRef = useRef();

  /**
   * useFrom is a custom hook which store all the functionality associated with form
   * @returns function & states to render and sumbit the form
   */

  const { isSubmitting, formError, toSend, handleChange, handleSubmit } =
    useFrom(recaptchaRef);

  return (
    <Box
      color="black"
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
  );
}
