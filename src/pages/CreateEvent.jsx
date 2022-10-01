import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Flex, Container, Spacer, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const CreateEvent = () => {
  return (
    <Container width="321px" textAlign="center" centerContent my="1rem">
      <Heading fontWeight="700" fontSize="36px">
        Enter Event Details
      </Heading>
      <Flex gap="1rem" flexWrap="wrap" my="1rem">
        <Input
          width="100%"
          p="10px"
          borderRadius="10px"
          placeholder="Enter Event Name"
        />
        <Spacer />
        <Input
          width="100%"
          p="10px"
          borderRadius="10px"
          placeholder="Enter Host Name"
        />
        <Spacer />
        <Input
          width="100%"
          p="10px"
          borderRadius="10px"
          type="datetime-local"
          placeholder="Enter Start Date"
        />
        <Spacer />
        <Input
          width="100%"
          p="10px"
          borderRadius="10px"
          type="datetime-local"
          placeholder="Enter End Date"
        />
        <Spacer />
        <Input
          width="100%"
          p="10px"
          borderRadius="10px"
          placeholder="Enter Location"
        />
        <Spacer />
        <Input width="100%" p="5px" borderRadius="10px" type="file" />
        <Spacer />
      </Flex>
      <Link to="/event">
        <Button
          bgGradient="linear(to-l, #E87BF8, #8456EC)"
          borderRadius="10px"
          fontWeight="700"
          color="#FFFFFF"
          width="187px"
          variant="solid"
          p="10"
        >
          Next
        </Button>
      </Link>
    </Container>
  );
};

export { CreateEvent };
