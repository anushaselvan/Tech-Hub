import React from 'react';
import { useQuery } from '@apollo/client';
import {Container , FormLabel} from '@chakra-ui/react';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS } from '../utils/queries';

const Questions = () => {

      const { loading, data } = useQuery(QUERY_QUESTIONS);
      const questions = data?.questions || [];
    
      return (
        <main>      <div className="bgImage">
                  <Container maxW='50%'  bg='white' centerContent>

            <QuestionList
              questions={questions}
              title="View Questions"
            /></Container></div>
            </main>
      );
    };
    

export default Questions;