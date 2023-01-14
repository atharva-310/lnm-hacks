import {
  Box,
  Center,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

import sponsorData from '../api/pastSponsor';
import { gold, other, platinum } from '../api/sponsors';
import H1Gradient from './Basic/H1Gradient';
import MakePage from './Basic/MakePage';
import { SponserCard } from './SponsorCard';
import Community from './sponsorCards/Community';
import Gold from './sponsorCards/Gold';
import Other from './sponsorCards/Other';
import Platinum from './sponsorCards/Platinum';

const SponsorPage = () => {
  const isMobPlatinum = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <H1Gradient content={'Sponsors'} mb="30px" />
      <Platinum />
      <Gold />
      <Other />
      <Community />
    </>
  );
};

const Sponsor = () => {
  return <MakePage children={<SponsorPage />} id="sponsor" />;
};
export default Sponsor;
