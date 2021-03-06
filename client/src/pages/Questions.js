import React from "react";
import { useQuery } from "@apollo/client";
import { Container, FormLabel } from "@chakra-ui/react";
import { Button, Box, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, DeleteIcon } from "@chakra-ui/icons";

import { QUERY_QUESTION } from "../utils/queries";
import { useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_QUESTION, {
    variables: { questionId: id },
  });

  console.log(data);

  const question = data?.question || {};

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className="bgImage">
        <Container maxW="50%" centerContent>
          <Box
            bg="gray.300"
            borderRadius="lg"
            w="100%"
            h="200px"
            marginTop={20}
            p={4}
            color="black"
          >
            <div key={question.questionId}>
              <DeleteIcon float="right" w={4} h={4} />
              <Avatar bg="teal" marginRight="10px" />
              <span fontStyle="oblique">{question.username}</span> <br />
              <span style={{ fontSize: "1rem" }}></span>
              <div>
                <p>{question.questionText}</p>

                <FormLabel float="right"> {question.createdAt} </FormLabel>
                <br></br>
                <Link to="/ask">
                  <ArrowLeftIcon float="left" w={4} h={4} />
                </Link>
              </div>
            </div>
          </Box>
          <br></br>
          <Button colorScheme="teal" width="8.5rem">
            + Answer
          </Button>
        </Container>
        <Box maxW="lg" p={60}>
          {" "}
        </Box>
      </div>
    </main>
  );
};

export default Question;
