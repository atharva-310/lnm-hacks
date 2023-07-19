import {
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from '@chakra-ui/react';

import H1Gradient from '../Basic/H1Gradient';
import MakePage from '../Basic/MakePage';

import { question } from '../../api/faq';
import QueryForm from './QueryForm';

// Queries and FAQs page

const FaqPage = () => {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });

  return (
    <>
      <H1Gradient content={'Queries & FAQs'} mb="40px" />
      <Box
        display="flex"
        justifyContent={isTablet ? 'center' : 'space-evenly'}
        flexDirection={isTablet ? 'column' : 'row'}
        width="100%"
      >
        <QueryForm />
        <Box
          minW={isTablet ? '80vw' : '40%'}
          my="30px"
          mx={isTablet ? '10px' : '0px'}
          maxW={isTablet ? '' : '40%'}
          color={'white'}
          borderRadius="xl"
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
                  <AccordionPanel pb={4} maxW="100%">
                    {item.sol}
                  </AccordionPanel>
                </AccordionItem>
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
