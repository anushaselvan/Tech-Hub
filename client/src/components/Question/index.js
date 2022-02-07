import React from 'react';
import {Tooltip, Input,Textarea,Button,FormLabel, Badge, Box,Avatar,Container } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { ArrowLeftIcon, CheckIcon, DeleteIcon, WarningIcon } from '@chakra-ui/icons'

const ViewQuestion = ({ question }) => {
  

  return (
    <div>
          <div key={question.questionId}>
            <Box bg='gray.300' borderRadius='lg' w='100%' h='200px'  p={4} color='black'>
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

            </div></Box><br></br>
          </div>
    </div>
  );
};

export default ViewQuestion;


         