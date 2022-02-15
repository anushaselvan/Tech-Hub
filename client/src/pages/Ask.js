import React, { useState } from "react";
import { Button, Box, Container, Badge } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";

import { useMutation, useQuery } from "@apollo/client";
import { ADD_QUESTION } from "../utils/mutations";
import QuestionList from "../components/QuestionList";
import { QUERY_QUESTIONS } from "../utils/queries";

const Ask = () => {
  const [formState, setFormState] = useState({
    questionText: "",
    username: "",
  });
  const { data } = useQuery(QUERY_QUESTIONS);
  const questions = data?.questions || [];

  // Set up our mutation with an option to handle errors
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formState);
    try {
      const { data } = await addQuestion({
        variables: { ...formState },
      });
      console.log({ data });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "questionText") {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "questionText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div className="bgImage">
      <Container maxW="50%" centerContent>
        <form onSubmit={handleFormSubmit}>
          <Box
            bg="gray.300"
            borderRadius="lg"
            w="100%"
            marginTop={20}
            p={4}
            color="black"
          >
            <h2 color="black">Ask your Q here !</h2>
            <br></br>

            <textarea
              name="questionText"
              placeholder="Question"
              resize="none"
              value={formState.questionText}
              cols="80"
              onChange={handleChange}
            ></textarea>
            <br></br>
            <input
              name="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
            />
            <br></br>
            <br />
            <button bg="teal" type="submit">
              Submit
            </button>
          </Box>

          {error && (
            <Badge colorScheme="red">
              <WarningIcon w={5} h={5} marginRight={2} />
              Something went wrong!
            </Badge>
          )}
        </form>
        <br></br>
        <QuestionList questions={questions} title="View Questions" />
      </Container>
    </div>
  );
};

export default Ask;
