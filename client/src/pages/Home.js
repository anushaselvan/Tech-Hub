import React from "react";
import { Box,SimpleGrid, Container} from '@chakra-ui/react'


const Home = () => {
  return (
    <body >
      <div className="bgImage">
      <Container maxW='2000' centerContent>
      <SimpleGrid columns={2} spacingX='140px' spacingY='80px' centerContent>
      <Box maxW='sm' > </Box>
      <Box maxW='sm' > </Box>
      <Box maxW='sm' > </Box>
      <Box maxW='sm' > </Box>
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
 
   </div></body>
  );
};

export default Home;
