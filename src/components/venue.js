import React from 'react';
import MakePage from './Basic/MakePage';
import { useBreakpointValue ,Center, Box, HStack,Image,Heading} from '@chakra-ui/react';
import VenueB from '../assets/venueImage/venueB.jpg'
import venue from '../assets/venueImage/venue1.jpg'; 
import H1Gradient from './Basic/H1Gradient';
const VenuePage = () => {
  const isTablet = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
  });

  return (
    <>
         <H1Gradient content={'Venue'} />
         <Center >
            
            <Box  margin={10}
         bgImage={VenueB}
         //bg=' linear-gradient(128deg, rgba(131,58,180,1) 0%, rgba(253,29,143,0.6475840336134453) 50%, rgba(252,176,69,1) 100%);'
        //   minW={isTablet ? '100vw' : 'full'}
        //   minH={isTablet? '100vh':'full'}
          borderRadius='2%'
          display='flex'
           flexDirection='row' 
           justifyContent='space-between'>
             <Box display='flex'
             alignItems='center' 
             width='550px' height='550px'>
              <Heading padding={10} color='#13005A' textAlign='center'>The LNM Institute Of Information Technology Jaipur</Heading>
             </Box>
                <Box 
                width='600px' height='550px'>
                    <Image src={venue}  height='100%' width='100%'/>
                </Box>
            </Box>
            </Center> 
   </>

  )

}


export default function Venue() {
  return <MakePage id="faq" children={<VenuePage />}  mb="100px" />;
}
