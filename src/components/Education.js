import {
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  Heading
} from "@chakra-ui/react";
import { Fade } from "react-reveal";


export default function Education() {

  return (
    <>
      <Fade bottom>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack spacing={2} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"5xl"} color={"yellow.400"} marginBottom={50}>Mes Formations</Heading>
          </Stack>
          
          <Stack px={4} spacing={4}>
              
                <Card size="sm">
                  <CardHeader>
                    <Flex justifyContent="space-between">
                      <HStack>
                        <Image src={require('../images/new-logo.png')} h={50} /> 
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Estiam, 3e année Bachelor</Text>
                          <Text>Développement d’applications et Data</Text>
                        </Box>
                      </HStack>
                      <Text px={2} fontWeight={300}>
                      2022 - 2023
                      </Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"start"}>
                    Développement d’applications mobiles, Java, C#, JavaScript avancé, Business Intelligence, Méthodes Agile, DevOps, Scrum, Cisco CCNA Security, Administration OS Serveurs…
                    </Text>
                  </CardBody>
                  
                </Card>
             
  
              
                <Card size="sm">
                  <CardHeader>
                    <Flex justifyContent="space-between">
                      <HStack>
                        <Image src={require('../images/new-logo.png')} h={50} /> 
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Estiam, 2e année Bachelor</Text>
                          <Text>Expertise Technique</Text>
                        </Box>
                      </HStack>
                      <Text px={2} fontWeight={300}>
                      2021 - 2022
                      </Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"start"}>
                    Développement d’applications mobiles, Java, C#, JavaScript avancé, Business Intelligence, Méthodes Agile, DevOps, Scrum, Cisco CCNA Security, Administration OS Serveurs…
                    </Text>
                  </CardBody>
                  
                </Card>
              
                <Card size="sm">
                  <CardHeader>
                    <Flex justifyContent="space-between">
                      <HStack>
                        <Image src={require('../images/marcel.png')} h={50} /> 
                        <Box px={2} align="left">
                          <Text fontWeight={600}>Lycée Marcel Sembat Vénissieux</Text>
                          <Text> BTS SN (option informatique et réseaux)</Text>
                        </Box>
                      </HStack>
                      <Text px={2} fontWeight={300}>
                      2019 - 2021
                      </Text>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"start"}>
                    Programmation en algorithmique, C, C++, C#, PHP, HTML, CSS, JAVASCRIPT, Arduino, SQL..
                    </Text>
                  </CardBody>
                  
                </Card>
  
            </Stack>
        </Stack>
      </Container>
      </Fade>
    </>
  );
}
