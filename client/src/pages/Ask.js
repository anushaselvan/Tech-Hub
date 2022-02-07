import React, { useState } from 'react';
import {Tooltip, Input,Textarea,Button,FormControl, Box,Container , FormLabel} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_ANSWER, ADD_QUESTION } from '../utils/mutations';
import QuestionList from '../components/QuestionList';
import { QUERY_QUESTIONS } from '../utils/queries';



const Ask = () => {
 
 const [formState, setFormState] = useState({
    questionText: '',
    //active: true,
    username: '',
  });
  const { loading, data } = useQuery(QUERY_QUESTIONS);
      const questions = data?.questions || [];

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

    if (name === 'questionText') {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'questionText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div className="bgImage">

            <Container maxW='50%' centerContent>
      <h2>Ask your Q here !</h2><br></br>
      <FormControl onSubmit={handleFormSubmit}>
      <Box bg='gray.300' borderRadius='lg' w='100%' p={4} color='white'>
      <h2 color='black'>Ask your Q here !</h2><br></br>

            <Textarea name="questionText" placeholder='Question'
        value={formState.questionText}
        bg='white' color='black'  marginBottom='10px' borderRadius='lg'
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
      </FormControl><br></br>
      <QuestionList
              questions={questions}
              title="View Questions"
            />
      <Box bg='gray.300' borderRadius='lg' w='100%' p={4} color='white'>
     
</Box>
      </Container></div>
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
