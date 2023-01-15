

import React from 'react'
import { useState } from 'react';
import {send} from 'emailjs-com';
import MakePage from './Basic/MakePage'
import { Heading,Box,Center,Flex,Input,Button,  Accordion,Textarea,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, VStack,Stack,FormControl,FormLabel, HStack, SimpleGrid, GridItem,useBreakpointValue} from '@chakra-ui/react'
import H1Gradient from './Basic/H1Gradient';


const SignupPage=()=>{
  
  return(
    <Box display={{md: 'flex'}} flexDirection={{md: 'column'}}>
<H1Gradient content={'Register Here'} />
<VStack py={20}>
   <Stack direction={['column','row']} spacing='100px'>
  <Box className='changingGradient1'
  width="450px " 
  height="670px"
  borderRadius='2%'
  p={10}>
      
      <Heading >Ask your queries</Heading>
     <SimpleGrid p={3} columns={2} columnGap={4} rowGap={3}>
      <GridItem colSpan={2}>
        <form >
          <FormLabel py={3}>Name</FormLabel>
          <Input color='white'
     size='lg' variant='flushed' borderColor='black' focusBorderColor='gray.600' fontFamily='Inter,sans-serif'/>
          <FormLabel py={3}>Email</FormLabel>
          <Input color='white'
      variant='flushed'  size='lg' borderColor='black' focusBorderColor='gray.600'/>
          <FormLabel py={3}>Question/Query</FormLabel>
          <Textarea  color='white'
     variant='flushed'  size='lg' borderColor='black' focusBorderColor='gray.600'/>
          <GridItem p={5}>
          <Button 
      type='submit'
      _hover={{ bg: 'gray.600' }}
      w='full' variant='solid' color='white' size="lg" bg='black'>Click to Submit</Button>
          </GridItem>
     
        </form>
        
        </GridItem>
     
     </SimpleGrid>  
     
    </Box>
    <Box  className='changingGradient2'
  width="450px " 
  height="670px"
  borderRadius='2%'
  p={10}
  overflow='auto'

  sx={{
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  }}
  
  >
    <Heading  fontSize='2rem'>Frequently Asked Questions</Heading>
<Accordion   py={5} allowToggle>
  <AccordionItem my={3} >
    <h2>
      <AccordionButton p={3}  _expanded={{ bg: 'black', color: 'white'}}>
        <Box as="span" flex='1' textAlign='left'>
        <Heading fontWeight='medium'  fontSize='1rem'>Team size</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
    1-4
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem my={3}>
    <h2>
      <AccordionButton  p={3} _expanded={{ bg:'black',color:'white'}}>
        <Box as="span" flex='1' textAlign='left'  >
        <Heading  fontWeight='medium' fontSize='1rem'>Registration costs?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Nada.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem my={3}>
    <h2>
      <AccordionButton  p={3} _expanded={{ bg:'black',color:'white'}}>
        <Box as="span" flex='1' textAlign='left'  >
        <Heading  fontWeight='medium' fontSize='1rem'>What is the mode of the event?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
    LNMHacks will take place in a completely offline mode at the LNM Institute of Information Technology, Jaipur.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  my={3}>
    <h2>
      <AccordionButton p={3}  _expanded={{ bg: 'black', color: 'white' ,}}>
        <Box as="span" flex='1' textAlign='left'  >
        <Heading fontWeight='medium' fontSize='1rem'>What is the venue of the hackathon?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  >
    The LNM Institute of Information Technology, Jaipur
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  my={3}>
    <h2>
      <AccordionButton p={3}  _expanded={{ bg: 'black', color: 'white' ,}}>
        <Box as="span" flex='1' textAlign='left'  >
        <Heading fontWeight='medium' fontSize='1rem'>What if I've never been to a hackathon before? </Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
    Then we're so glad LNMHacks will be your first ever! It is always helpful to have some programming or technical experience, but it’s not a requirement. We’ll have talks, mentors, and workshops to help you with your project.
    </AccordionPanel>
  </AccordionItem>
  
  <AccordionItem  my={3}>
    <h2>
      <AccordionButton p={3}  _expanded={{ bg: 'black', color: 'white' ,}}>
        <Box as="span" flex='1' textAlign='left'  >
        <Heading fontWeight='medium' fontSize='1rem'>Do I need to have any specific qualifications to be a participant for this hackathon?</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
    If you love to code, you are more than welcome to participate in this Hackathon. However, we may screen applications to maintain high standards.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  my={3}>
    <h2>
      <AccordionButton p={3}  _expanded={{ bg: 'black', color: 'white' ,}}>
        <Box as="span" flex='1' textAlign='left'  >
        <Heading fontWeight='medium' fontSize='1rem'>Don't find my question listed here. What can I</Heading>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >
    You can always contact us at info@lnmhacks.xyz or ping us in our discord server at https://discord.gg/uSNPwTGYhh. We would be more than happy to help you!
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>
    </Stack>
</VStack>
    </Box>
    



  )
}

export default function Signup(){
  return <MakePage children={<SignupPage />} minH="125vh" />;
}