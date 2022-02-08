import React from "react";
import {  useQuery } from '@apollo/client';
import { Redirect, useParams } from 'react-router-dom';


import {Button,Avatar,Form,Text, Box,Container ,Badge, FormLabel} from '@chakra-ui/react';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';



const Account = () => {
  /*const { username: userParam } = useParams();

  const { loading, data } = useQuery( QUERY_USER, {
    variables: { username: userParam },
  });

  const user =  data?.user || {};
  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/account/:id" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  

  return (
    <div className="bgImage">
     <Container maxW='50%' centerContent>
          <Box bg='gray.300' borderRadius='lg' w='60%' marginTop={20}
            p={10} color='black'>
            <Avatar bg='teal.500' w={100} h={100}/>
            <Text as='i'>${user.username}</Text>
            <Text as='i'>${user.email}</Text>
          </Box>
       </Container>
       </div>
  );
};*/};

export default Account;