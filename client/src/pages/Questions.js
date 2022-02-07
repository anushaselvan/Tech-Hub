import React from 'react';
import { useQuery } from '@apollo/client';

import QuestionList from '../components/QuestionList';

import { QUERY_QUESTIONS } from '../utils/queries';

const Questions = () => {

      const { loading, data } = useQuery(QUERY_QUESTIONS);
      const questions = data?.questions || [];
    
      return (
        <main>        
            <QuestionList
              questions={questions}
              title="Some Feed for Thought(s)..."
            />
            </main>
      );
    };
    

export default Questions;