import React from "react";

import { Box, Container } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <div className="bgImage">
      <Container maxW="60%" centerContent>
        <Box
          bg="gray.300"
          borderRadius="lg"
          w="800px"
          h="500px"
          marginTop={20}
          marginBottom={200}
          p={10}
          color="black"
        >
          <span id="faqTitle">FAQ</span>

          <Box h="300px" p={10}>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Where do I ask questions?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Just click on the tab 'Ask' and type your question with
                  specific details to get the most accurate answer.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Can I asnwer any question?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, you can submit your answer to any question but you have
                  to be signed into your account.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Why do I need to signup for an account?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Tech Hub does not allow unauthenticated users to ask or answer
                  any question to preserve the legitimacy.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton _expanded={{ bg: "teal", color: "white" }}>
                    <Box flex="1" textAlign="left">
                      Are my personal details safe?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Yes, User details are not shared or used for any purpose other
                  than intended.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <span id="faqSpan">Happy Coding!</span>
        </Box>
      </Container>
    </div>
  );
};

export default FAQ;
