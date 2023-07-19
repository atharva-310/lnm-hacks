import { Button, ButtonGroup, Flex, HStack } from '@chakra-ui/react';

// This nav bar component will be used for the desktop view
export default function DeskMenu({ navItems }) {
  return (
    <Flex justify="flex-end" flex="1">
      <ButtonGroup
        variant="link"
        spacing="8"
        marginEnd="20px"
        alignItems="center"
      >
        {navItems.map((item, index) => (
          <Button
            as="a"
            href={item.id}
            textDecoration="none"
            color={'black'}
            fontFamily="'Josefin Sans', sans-serif"
            fontSize="20px"
            key={index}
            _hover={{ transform: 'scale(1.2)' }}
          >
            {item.name}
          </Button>
        ))}
      </ButtonGroup>
      <HStack
        spacing="3"
        fontFamily="'Josefin Sans', sans-serif"
        fontSize="20px"
      >
        <Button
          bg="black"
          color="white"
          size="lg"
          _hover={{ transform: 'scale(1.1)' }}
          as="a"
          href="#register"
        >
          Projects
        </Button>
      </HStack>
    </Flex>
  );
}
