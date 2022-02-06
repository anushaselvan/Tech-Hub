import React from 'react';
import { Tooltip } from '@chakra-ui/react';
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
          <form>
                <label>Question</label>
                 <input
                  type='text'
                  placeholder='Ask'
                />
                <Tooltip label='Ask any question' fontSize='sm'><SearchIcon />
</Tooltip>
                <button type='submit' variant='success' size='lg'>
                  Submit Search
                </button>
              </form>
      </div>
    </>
  );
};


export default Questions;
