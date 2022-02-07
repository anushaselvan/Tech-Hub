import React from 'react';
import { useQuery } from '@apollo/client';
import {Container , FormLabel} from '@chakra-ui/react';

import ViewQuestion  from '../components/Question';

import { QUERY_QUESTION } from '../utils/queries';

const Question = () => {

      const { loading, data } = useQuery(QUERY_QUESTION);
      const question = data?.question || [];
    
      return (
        <main>     
           <div className="bgImage">
            <Container maxW='50%'  bg='white' centerContent>
            <ViewQuestion
              question={question}
              title="View Question"
            /></Container></div>
            </main>
      );
    };
    

export default Question;