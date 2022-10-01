import Icon from '@chakra-ui/icon';
import { Image } from '@chakra-ui/image';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import { BsCalendar } from 'react-icons/bs';

const Event = () => {
  return (
    <Container>
      <Image
        width="100vw"
        height="375px"
        src="/assets/Birthday-cake.png"
        alt="Birthday cake"
      />
      <Box m="1rem">
        <Heading
          color="primary.first"
          fontWeight="700"
          fontSize="28px"
          lineHeight="32.2px"
        >
          Birthday Bash
        </Heading>
        <Text
          display="inline"
          color="neutrals.second"
          fontSize="14px"
          fontWeight="400"
        >
          Hosted by <Text fontWeight="700">Elysia</Text>
        </Text>
        <Box>
          <Flex>
            <Icon as={BsCalendar} />
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export { Event };
