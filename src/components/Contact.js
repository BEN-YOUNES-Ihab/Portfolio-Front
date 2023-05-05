import {
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
    Center,
  } from "@chakra-ui/react";
  import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
  import styled from 'styled-components';

  export default function Contact() {
    
    const ReactIcon = styled.div`
    &:hover {
      color:#ecc94b;
    }
  `;
    const linkedin = () => {
      window.open("https://www.linkedin.com/in/ihab-ben-younes-8a341123b/", "_blank", "noreferrer,noopener");
    };
    const github = () => {
      window.open("https://github.com/BEN-YOUNES-Ihab", "_blank", "noreferrer,noopener");
    };
    const email = () => {
      window.open("mailto:ihab.ben.younes@hotmail.com", "_blank", "noreferrer,noopener");
    };
    return (
      <>
        <Container maxW={"3xl"} id="contact">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 20 }}
          >
            <Stack spacing={2} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Heading fontSize={"5xl"} color={"yellow.400"} marginBottom={50}>Me contacter</Heading>
              <Text color={"gray.500"} fontWeight={600} fontSize={"lg"} px={4}>
                ihab.ben.younes@hotmail.com
              </Text>
              <Center>
                <HStack pt={4} spacing={4}>
                    <ReactIcon>
                        <FaLinkedin onClick={linkedin} size={70} cursor={"pointer"} />
                    </ReactIcon>
                    <ReactIcon>
                        <FaGithub onClick={github} size={70} cursor={"pointer"} />
                    </ReactIcon>
                    <ReactIcon>
                        <FaEnvelope onClick={email} size={70} cursor={"pointer"} />
                    </ReactIcon>
                </HStack>
              </Center>
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  
  