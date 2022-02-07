import React, { useState } from 'react';
import {Tooltip, Input,Textarea,Button,FormControl, Box,Container } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
import { ADD_ANSWER, ADD_QUESTION } from '../utils/mutations';

const Ask = () => {
 
  const [formState, setFormState] = useState({
    questionText: '',
    //active: true,
    username: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  // Set up our mutation with an option to handle errors
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addQuestion({
        variables: { ...formState },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'questionText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'questionText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
            <Container maxW='50%' centerContent>
      <h2>Ask your Q here !</h2><br></br>


      <FormControl onSubmit={handleFormSubmit}>

      <Box bg='gray.300' borderRadius='lg' w='100%' p={4} color='white'>

          
            <Textarea placeholder='Question'
        value={formState.questionText}
        bg='white' marginBottom='10px' borderRadius='lg'
        onChange={handleChange}
        size='sm'
      /><br></br>
         
          <Button bg='teal' type="submit">
            Submit
          </Button>
                  </Box>
          
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </FormControl>
      </Container>
  );
};


/*const Questions = () => {
  /*const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [addQuestion, { error, data }] = useMutation(ADD_QUESTION);

  // create state for holding returned google api data
  const [] = useState([]);
  // create state for holding our search field data
  const [] = useState('');


 
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

*/
export default Ask;
