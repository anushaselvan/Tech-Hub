import React from 'react';
import {Tooltip, Input,Textarea,Container,Button,FormLabel, Badge, Box,Avatar } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { ArrowLeftIcon, CheckIcon, DeleteIcon,AddIcon, WarningIcon } from '@chakra-ui/icons'

const ViewQuestion = ({ question }) => {
  

  return (
    <div>
            <Box bg='gray.300' borderRadius='lg' w='100%' h='200px' marginTop={20}  p={4} color='black'>
            <div key={question.questionId}>

            <DeleteIcon float="right" w={4} h={4} />
                <Avatar bg='teal' marginRight='10px'/><span fontStyle='oblique'>

                {question.username}</span> <br />
                <span style={{ fontSize: '1rem' }}>
                </span>
            <div >
              <p>{question.questionText}</p>

              <FormLabel float='right'>  {question.createdAt} </FormLabel><br></br>
                   <Link to="/ask">

              <ArrowLeftIcon float="left" w={4} h={4} /></Link>

            </div>
            </div>
</Box><br></br>
<Button float="right"><AddIcon>Answer</AddIcon></Button>
    </div>
  );
};

export default ViewQuestion;


         