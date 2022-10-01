import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Container, Heading, Text } from '@chakra-ui/layout';
import React from 'react';

const Home = () => {
  return (
    <Container maxW="321px" textAlign="center" centerContent my="1rem">
      <Box>
        <Heading color="primary.first" fontSize="36px" fontWeight="700" lineHeight="36px">
          Imagine if
          <Text bgGradient="linear(to-l, #E87BF8, #8456EC)" bgClip="text">
            Snapchat
          </Text>
          had events.
        </Heading>
        <Text color="neutrals.first" fontWeight="300"  mt="1rem">
          Easily host and share events with your friends across any social
          media.
        </Text>
      </Box>
      <Box boxShadow='xl' width="165px" my="2rem">
        <Image src="/assets/Landing-page-image.svg" alt="Landing Page" />
      </Box>
      <Box>
        <Button bgGradient="linear(to-l, #E87BF8, #8456EC)" borderRadius="10px" fontWeight="700" color="#FFFFFF" width="187px" variant="solid" p='10'>
        🎉 Create my event
        </Button>
      </Box>
    </Container>
  );
};

export { Home };
