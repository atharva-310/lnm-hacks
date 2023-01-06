import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
} from 'react-icons/ai';
import { Box } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
const socials = [
  {
    name: 'Twitter',
    link: 'twitter.com/lnmhacks',
    logo: <AiFillTwitterSquare />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/lnm-hacks/about/',
    logo: <AiFillLinkedin />,
  },
  {
    name: 'Facebook',
    link: 'https://www.twitter.com/lnmhacks',
    logo: <AiFillFacebook />,
  },
  {
    name: 'Discord',
    link: 'https://www.twitter.com/lnmhacks',
    logo: (
      <Box fontSize="3xl">
        <FaDiscord />
      </Box>
    ),
  },
];

export default socials;
