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
            className="homeStyle"
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <h4>
              A public platform building the definitive collection of coding
              questions & answers.{" "}
            </h4>
          </Box>

          <Box
            className="homeStyle"
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <h4>
              Find trusted answers faster, engage with product experts, and
              share knowledge around the technologies you use most.
            </h4>
          </Box>
          <Box
            className="homeStyle"
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <h4>
              A space to showcase your best/fun projects and receive feedback.
            </h4>
          </Box>

          <Box
            className="homeStyle"
            maxW="sm"
            bg="teal"
            borderWidth="1px"
            h="150px"
            borderRadius="lg"
            p={8}
            overflow="hidden"
          >
            <h4>
              Increase productivity & Collaborate better in a remote-first
              world.
            </h4>
          </Box>
          <Box maxW="lg" p={40}>
            {" "}
          </Box>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Home;
