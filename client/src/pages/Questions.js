import React from 'react';
import {Tooltip , Input,Button, Box,Container,Textarea } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'




const Questions = () => {
  /*const [addQuestion, { error, data }] = useMutation(ADD_QUESTION);

  // create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');


  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);
     
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      const { items } = await response.json();

      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title || '',
        description: book.volumeInfo.description || '',
        image: book.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };
*/
//const handleFormSubmit = async (event) => {
  //const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <div>
      <Container maxW='75%' centerContent>
            <Box> 
                <Tooltip label='Ask any question' fontSize='sm'>
                  <Input  placeholder='' size='lg' />
                </Tooltip>
                  <Button colorScheme='teal'> Submit
                  </Button> 
            </Box><br></br>
<Box bg='gray.100' w='100%' borderRadius='lg' p={4} color='Black'>
  This is the Box
</Box>       <br></br>
<Textarea placeholder='Here is a sample placeholder' />
</Container>      </div>
    </>
  );
};


export default Questions;
