import React from 'react';
import MakePage from './Basic/MakePage';
import { data } from '../api/tracks';


import{
  useBreakpointValue,
  Center,
  Box,
  Image,
  Heading,
  Flex,
  Text,
  Divider,
} from '@chakra-ui/react';
const TracksPage = () => {

  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  return (
      <>
      <Center>

  
       <Flex flexDir={isTablet?'column':'row'}
        flexWrap="wrap"
        justifyContent={isTablet?'center':'space-evenly'}>
        {data.map((item)=>{
               return(
                <Box 
                my={30}
                bgColor='white'
               // width='314px'
               //height='461px'
                borderRadius='5%'
                width={isTablet?'40vw':'340px'} 
                height={isTablet?'80vh':'510px'}
                minW={'350px'}
                minH={'500px'}
                key={item.id}
                >
                  <Flex p={6} justifyContent='space-between'>
                  <Image width='45px' height='45px' src={item.src} />
                 <Box boxShadow='0px 5px 3px #7B7A72' textAlign='center' bgColor='black' width='90px' height='35px' borderRadius='50px'>
                   {item.amount}
                 </Box>
                  </Flex>
                  
                  <Heading as={'h2'} paddingLeft='30px' color='black'>{item.Heading}</Heading>
                     <Text padding={5}  color='black'>{item.text}</Text>
     <Flex  marginTop={isTablet?'40':'40'} px={5} direction='column' alignItems='center'  >

     <Box  boxShadow='0px 5px 3px #7B7A72' textAlign='center' width='full' height={isTablet?'full':'28px'} borderRadius='10px' bgColor='black'>More Info</Box>
               <Divider   borderColor='black' marginTop={5}/>
                <Image paddingTop={3} width='201px' height='53px' src={item.logo} />
     </Flex>
    
                  
                </Box>
               )
        })

        }
       </Flex>
       </Center>
    </>

  )

};

export default function Tracks() {
  return <MakePage id="faq" children={<TracksPage />} mb="100px" />;
}
