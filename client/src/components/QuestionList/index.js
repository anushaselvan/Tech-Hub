import React from 'react';
import {Text, Input,Italic,Button,FormLabel, Heading, Box,Avatar,Container } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckIcon, DeleteIcon, WarningIcon } from '@chakra-ui/icons'

const QuestionList = ({ questions, title }) => {
  if (!questions.length) {
    return <h3>No Questions to show</h3>;
  }

  return (
    <div>
      {questions &&
        questions.map((question) => (
          <div key={question._id}>
            <Box bg='gray.300' borderRadius='lg' w='100%' h='200px'  p={4} color='black'>
                <Avatar bg='teal' marginRight='10px'/><span fontStyle='oblique'>

                <Text as='i'>{question.username}</Text>
</span> 
                <Link to={`/questions/${question._id}`}>
              <ArrowRightIcon float="right" w={4} h={4} /></Link>
                <br />
                <span style={{ fontSize: '1rem' }}>
                </span><br />
            <div >
              <Text as='h6' size='xs' >{question.questionText}</Text>

              <FormLabel float='right'>  {question.createdAt} </FormLabel><br></br>
                  
            </div></Box><br></br>
          </div>
        ))}
    </div>
  );
};

export default QuestionList;