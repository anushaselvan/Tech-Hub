import React, { useState } from 'react';
import {Tooltip, Input,Button, Box,Container,Textarea } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { ADD_ANSWER, ADD_QUESTION } from '../utils/mutations';


const Questions = () => {
  /*const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [addQuestion, { error, data }] = useMutation(ADD_QUESTION);

  // create state for holding returned google api data
  const [] = useState([]);
  // create state for holding our search field data
  const [] = useState('');

*/
 
//const handleFormSubmit = async (event) => {
  //const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <div>
      <Container maxW='1000px' centerContent>
            <Box> 
                <Tooltip label='Ask any question' fontSize='sm'>
                  <Input  placeholder='' size='lg' />
                </Tooltip>
                  <Button colorScheme='teal'> Submit Question
                  </Button> 
            </Box><br></br>
<Box bg='gray.100' w='100%' borderRadius='lg' p={4} color='Black'>
  This is the Box
</Box>       <br></br>
<Textarea placeholder='Here is a sample placeholder' />
<Button colorScheme='teal'> Add Answer
                  </Button> 
            <br></br>
</Container>      </div>
    </>
  );
};


export default Questions;
