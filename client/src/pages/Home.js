import React from "react";
import { Box, SimpleGrid, Heading, Container } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="bgImage">
      <Container maxW="2000" centerContent>
        <SimpleGrid columns={2} spacingX="140px" spacingY="80px">
          <Box maxW="sm" p={4}>
            {" "}
          </Box>
          <Box maxW="sm" p={4}>
            {" "}
          </Box>

          <Box
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <Heading as="h4" size="md">
              A public platform building the definitive collection of coding
              questions & answers.{" "}
            </Heading>
          </Box>

          <Box
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <Heading as="h4" size="md">
              Find trusted answers faster, engage with product experts, and
              share knowledge around the technologies you use most.
            </Heading>
          </Box>
          <Box
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <Heading as="h4" size="md">
              A space to showcase your best/fun projects and receive feedback.
            </Heading>
          </Box>

          <Box
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <Heading as="h4" size="md">
              Increase productivity & Collaborate better in a remote-first
              world.
            </Heading>
          </Box>
          <Box maxW="sm"> </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Home;
