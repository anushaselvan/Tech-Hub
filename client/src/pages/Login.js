import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Heading, Container, Box } from "@chakra-ui/react";

//function Login(props) {
const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("formState", formState);
      const { data } = await login({
        variables: { ...formState },
      });
      console.log("mutationresp:", data);
      const token = data.login.token;
      console.log("mutationresp1:", token);

      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
          h="300px"
          marginTop={20}
          p={4}
          color="black"
        >
          <Link to="/signup">
            <span className="loginLink">Go to Signup</span>
          </Link>
          <br></br>
          <br></br>

          <Heading size="md">Login</Heading>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email address:</label>
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
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <div className="flex-row flex-end">
              <button type="submit">Submit</button>
            </div>
          </form>
        </Box>
      </Container>
      <Box maxW="lg" p={40}>
        {" "}
      </Box>
    </div>
  );
};

export default Login;
