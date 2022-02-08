import React, { useState } from "react";
import { Box, Badge, Link, Container, Heading } from "@chakra-ui/react";
import viewNews from "../utils/queries";
import { Divider } from "@chakra-ui/react";

const News = () => {
  // create state for holding returned google api data
  //const [searchedBooks, setSearchedBooks] = useState([]);
  /*const Signup = () => {
    const [formState, setFormState] = useState({ title: '',description: '', link: '' });
  
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
  
    };*/
  const news = {
    title: "",
    description: "",
    link: "",
  };

  try {
    const response = viewNews();
    if (!response.ok) {
      throw new Error("something went wrong!");
    }
    const { items } = response.json();
    const newsData = items.map((news) => ({
      title: news.volumeInfo.title,
      description: news.volumeInfo.description,
    }));
    console.log(newsData);
  } catch (err) {
    console.error(err);
  }

  return (
    <div className="bgImage">
      <Container maxW="60%" centerContent>
        <br></br>
        <br></br>
        <Box maxW="2000" centerContent>
          <Box padding="4" bg="gray.100" borderRadius="lg" maxW="5xl">
            <Heading float="center" size="lg">
              Today on the web!!
            </Heading>
            <br />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {news.title}Brain-like computers could become reality sooner than
              you think
            </Box>
            <br></br>
            <Box>
              {" "}
              <article>
                {" "}
                <p>
                  A new generation of computer chips modeled after the brain’s
                  neural network could be launched before the end of this decade
                  thanks to a new material that has been developed.{" "}
                </p>
                <p>
                  In a nutshell, it is the first electrochemical 3-terminal
                  transistor manufactured with 2D materials.
                </p>
                <p>
                  Scientists from KTH Royal Institute of Technology in Stockholm
                  and from Stanford University revealed that memory components
                  made with a titanium carbide compound called MXene exhibited
                  “outstanding potential for complementing classical transistor
                  technology”.times more efficient”...
                </p>
              </article>
            </Box>
            <br></br>
            <Box fontWeight="semibold">
              <Link
                href="https://www.techradar.com/news/brain-like-computers-could-become-reality-before-end-of-decade/"
                isExternal
              >
                Read More
              </Link>
            </Box>

            <Divider orientation="horizontal" />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {news.title}Google made a more accessible icon for Chrome
            </Box>
            <br></br>
            <Box>
              {" "}
              <article>
                {" "}
                <p>
                  Google made a more accessible icon for Chrome  EngadgetChrome
                  is changing its logo for the first time in eight years  The
                  VergeGoogle is making changes to the Chrome icon for the first
                  time since 2014  PhoneArenaCan You Spot the Changes in
                  Chrome's Icon?  Droid LifeChrome gets its first new logo in 8
                  years — come spot the differences  The Next Web ..."
                </p>
              </article>
              <br></br>
            </Box>
            <Box fontWeight="semibold">
              <Link
                href="https://www.techradar.com/news/brain-like-computers-could-become-reality-before-end-of-decade/"
                isExternal
              >
                Read More
              </Link>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {news.title}Brain-like computers could become reality sooner than
              you think
            </Box>
            <br></br>
            <Box>
              {" "}
              <article>
                {" "}
                <p>
                  A new generation of computer chips modeled after the brain’s
                  neural network could be launched before the end of this decade
                  thanks to a new material that has been developed.{" "}
                </p>
                <p>
                  In a nutshell, it is the first electrochemical 3-terminal
                  transistor manufactured with 2D materials.
                </p>
                <p>
                  Scientists from KTH Royal Institute of Technology in Stockholm
                  and from Stanford University revealed that memory components
                  made with a titanium carbide compound called MXene exhibited
                  “outstanding potential for complementing classical transistor
                  technology”.times more efficient”...
                </p>
              </article>
              <br></br>
              <Box fontWeight="semibold">
                <Link
                  href="https://www.techradar.com/news/brain-like-computers-could-become-reality-before-end-of-decade/"
                  isExternal
                >
                  Read More
                </Link>
              </Box>
            </Box>
          </Box>
          <br></br>
        </Box>
      </Container>
    </div>
  );
};

export default News;
