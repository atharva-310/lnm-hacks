import { Image, Center, Flex, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { HSponsor } from '../Basic/HSponsor';

export default function SponsorSection({ title, headBackgroud, data, style }) {
  const isMob = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  return (
    <>
      <HSponsor title={title} background={headBackgroud} />
      <Flex flexDir="row" flexWrap="wrap" justifyContent={'space-evenly'}>
        {data.map((item, index) => {
          return (
            <motion.a
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={item.link}
              target="_blank"
            >
              <Center
                my="10px"
                mx={style.mx}
                p="20px"
                width={isMob ? style.width.mob : style.width.desk}
                height={isMob ? style.height.mob : style.height.desk}
                bg="white"
                rounded="xl"
              >
                <Image
                  maxW="100%"
                  maxH="100%"
                  src={item.logo}
                  size="contain"
                  objectFit="contain"
                />
              </Center>
            </motion.a>
          );
        })}
      </Flex>
    </>
  );
}
