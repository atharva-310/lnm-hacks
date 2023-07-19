import {
  Box,
  Image,
  HStack,
  useBreakpointValue,
  Spacer,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import logo from '../../assets/logo-black.png';
import logoM from '../../assets/logo-black-mob.png';
import DeskMenu from './DeskMenu';
import MobMenu from './MobMenu';

const navItems = [
  { name: 'Home', id: '#home' },
  { name: 'About', id: '#about' },
  { name: 'Schedule', id: '#schedule' },
  { name: 'Tracks & Bounties', id: '#tracks' },
  { name: 'Sponsors', id: '#sponsor' },
  // { name: 'FAQs', id: '#faq' },
  { name: 'Venue', id: '#venue' },
];
export default function Navbar() {
  const isDesktop = useBreakpointValue({
    base: false,
    md: false,
    lg: false,
    xl: true,
  });

  const [isDark, setColor] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setColor(true);
      } else setColor(false);
    });
  }, []);
  return (
    <Box as="nav" width={'100%'} position="fixed" zIndex="80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Box
          bg={isDark ? 'white  ' : ''}
          filter={isDark ? 'invert(100%)' : ''}
          transition={'background 0.25s, filter 0.75s'}
        >
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
              <Image height="35px" src={isDesktop ? logo : logoM} />
              <Spacer />
              {isDesktop ? (
                <DeskMenu navItems={navItems} />
              ) : (
                <MobMenu navItems={navItems} />
              )}
            </HStack>
          </Center>
        </Box>
      </motion.div>
    </Box>
  );
}
