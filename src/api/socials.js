import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillMail,
} from 'react-icons/ai';
import { Box } from '@chakra-ui/react';
import { FaDiscord } from 'react-icons/fa';
const socials = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/lnmhacks',
    logo: <AiFillTwitterSquare />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/lnm-hacks/about/',
    logo: <AiFillLinkedin />,
  },
  {
    name: 'Facebook',
    link: ' https://www.facebook.com/lnmhacks/',
    logo: <AiFillFacebook />,
  },
  {
    name: 'Mail',
    link: 'mailto:support@lnmhacks.xyz',
    logo: <AiFillMail />,
  },
  {
    name: 'Discord',
    link: 'https://discord.gg/uSNPwTGYhh',
    logo: (
      <Box fontSize="3xl">
        <FaDiscord />
      </Box>
    ),
  },
];

export default socials;
