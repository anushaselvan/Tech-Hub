import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Heading, Container, Box } from "@chakra-ui/react";

import { ADD_USER } from "../utils/mutations";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { data } = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    Auth.login(data.addUser.token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="bgImage">
      <Container maxW="50%" centerContent>
        <Box
          bg="gray.300"
          borderRadius="lg"
          w="100%"
          h="350px"
          marginTop={20}
          p={4}
          color="black"
        >
          <Link to="/login">← Go to Login</Link>
          <br></br>
          <br></br>

          <Heading size="md">Signup</Heading>

          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="username">Username:</label>
              <input
                placeholder="First"
                name="username"
                type="username"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
