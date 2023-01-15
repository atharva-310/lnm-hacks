

import React from 'react'
import { useState } from 'react';
import {send} from 'emailjs-com';
import MakePage from './Basic/MakePage'
import { Heading,Box,Center,Input,Button, VStack,FormControl,FormLabel, HStack, SimpleGrid, GridItem} from '@chakra-ui/react'
import H1Gradient from './Basic/H1Gradient';
const SignupPage=()=>{
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'SERVICE ID',
      'TEMPLATE ID',
      toSend,
      'User ID'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return(
    <Box>
<H1Gradient content={'Register Here'} />
<VStack py={20}>
<Box className='changingGradient1'
  width="450px " 
  height="600px"
  borderRadius='2%'
  p={10}>
  
      <Heading >Sign Up</Heading>
     <SimpleGrid p={3} columns={2} columnGap={4} rowGap={3}>
      <GridItem colSpan={2}>
        <form>
          <FormLabel >First Name</FormLabel>
          <Input name='first_name' value={send.first_name} onChange={handleChange}
     size='lg' variant='flushed' borderColor='black' focusBorderColor='gray.600' fontFamily='Inter,sans-serif'/>
          <FormLabel>Last Name</FormLabel>
          <Input name='last_name' value={send.last_name} onChange={handleChange}
      variant='flushed'  size='lg' borderColor='black' focusBorderColor='gray.600'/>
          <FormLabel>Email address</FormLabel>
          <Input  name='email' value={send.email} onChange={handleChange}
     variant='flushed'  size='lg' borderColor='black' focusBorderColor='gray.600'/>
          <FormLabel>Phone number</FormLabel>
          <Input name='phone' value={send.phone} onChange={handleChange}
      variant='flushed'  size='lg'  borderColor='black' focusBorderColor='gray.600'/>
          <Button
      type='submit'
      _hover={{ bg: 'gray.600' }}
      w='full' variant='solid' color='white' size="lg" bg='black'>Register Here</Button>
        </form>
        
        </GridItem>
     
     </SimpleGrid>
        
        
     
    </Box>
</VStack>
    </Box>



  )
}

export default function Signup(){
  return <MakePage children={<SignupPage />} minH="125vh" />;
}