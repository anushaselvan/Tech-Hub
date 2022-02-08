import React from "react";
import { Box,SimpleGrid,Heading, Container} from '@chakra-ui/react'


const Home = () => {
  return (
      <div className="bgImage">
      <Container maxW='2000' centerContent>
      <SimpleGrid columns={2} spacingX='140px' spacingY='80px' >
      <Box maxW='sm' p={4}> </Box>
      <Box maxW='sm' p={4}> </Box>

      <Box maxW='sm' bg='teal' borderWidth='1px' borderRadius='lg' p={6} overflow='hidden'>
      <Heading as='h4' size='md' >
      A public platform building the 
              definitive collection of coding questions & answers.  </Heading>
       </Box>

        <Box maxW='sm' bg='teal' borderWidth='1px' borderRadius='lg' p={6} overflow='hidden'>
        A community-based space to find and contribute answers to technical
        challenges, and one 
        of the most popular websites in the world.</Box>


        <Box maxW='sm' bg='teal' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        A public platform building the 
              definitive collection of coding questions & answers
        A community-based space to find and contribute answers to technical
        challenges, and one 
        of the most popular websites in the world.</Box>

        <Box maxW='sm' bg='teal' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        A public platform building the 
              definitive collection of coding questions & answers
        A community-based space to find and contribute answers to technical
        challenges, and one 
        of the most popular websites in the world.</Box>
        <Box maxW='sm' > </Box>

</SimpleGrid>
</Container>
 
   </div>
   
  );
};

export default Home;
