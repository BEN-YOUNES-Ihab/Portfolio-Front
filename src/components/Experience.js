import {
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Badge,
    Image,
    List,
    ListItem,
    ListIcon,
    Button,
    ButtonGroup,
    Center,
    Heading
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { Fade } from "react-reveal";
  import { useState, useEffect } from "react";
  
  
  export default function Education() {
  
      const [selected, setSelected] = useState("ags");
    
      const handleSelected = (value) => {
        setSelected(value);
      };
    
  
    return (
      <>
        <Container maxW={"3xl"} id="experience">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack spacing={2} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Heading fontSize={"5xl"} color={"yellow.400"} marginBottom={50}>Mes expériences</Heading>
            </Stack>
            <Center px={4}>
              <ButtonGroup variant="outline">
                
                  <Button
                    colorScheme={selected === "ags" ? "yellow" : "gray"}
                    onClick={() => handleSelected("ags")}
                  >
                     AGS COM
                  </Button>
                  <Button
                    colorScheme={selected === "technagile" ? "yellow" : "gray"}
                    onClick={() => handleSelected("technagile")}
                  >
                     Technagile
                  </Button>
                  <Button
                    colorScheme={selected === "idprocess" ? "yellow" : "gray"}
                    onClick={() => handleSelected("idprocess")}
                  >
                     IdProcess Consulting
                  </Button>
              </ButtonGroup>
            </Center>
            <Fade bottom>
            <Stack px={4} spacing={4}>
                {selected === "ags" ? (
                  <Card size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={require('../images/logo-agscom.png')} h={50} /> 
                          <Box px={2} align="left">
                            <Text fontWeight={600}>AGS COM , Lyon , France , Contrat d'apprentissage</Text>
                            <Text>Développeur informatique</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          Juillet 2023
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                    <Flex>
                        <List align="left" spacing={3}>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Etude des demandes
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Recherche et développement
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Tests, Mise en production et maintenance des logiciels
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Assistance des technecciens SAV
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Rédaction des dossiers techniques et documentation
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Veille technologique et formation
                            </ListItem>
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                          <Badge
                            colorScheme="red"
                          >
                           Angular
                          </Badge>
                          <Badge
                            colorScheme="green"
                          >
                           VueJS
                          </Badge>
                          <Badge
                            colorScheme="orange"
                          >
                           JSP
                          </Badge>
                          <Badge
                            colorScheme="blue"
                          >
                           Java EE
                          </Badge>
                          <Badge
                            colorScheme="green"
                          >
                           Spring
                          </Badge>
                          <Badge
                            colorScheme="yellow"
                          >
                           Python
                          </Badge>
                          <Badge
                            colorScheme="orange"
                          >
                           MySQL
                          </Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                ) : (
                  <></>
                )}
    
                {selected === "technagile" ? (
                  <>
                  <Card size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={require('../images/technagile.png')} h={50} backgroundColor={"white"}/>
                          <Box px={2} align="left">
                            <Text fontWeight={600}>Technagile , Lyon , France , Contrat d'apprentissage</Text>
                            <Text>Développeur Full-stack / Product owner</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                        Juillet 2022 - Mai 2023
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Recherche et développement
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                En relation avec les clients.
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Tests, Mise en production et maintenance des logiciels
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    boxSize={6}
                                    as={ChevronRightIcon}
                                    color={"yellow.500"}
                                />
                                Rédaction des dossiers techniques et documentation
                            </ListItem>
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <HStack spacing={2}>
                          <Badge
                            colorScheme="red"
                          >
                           Angular
                          </Badge>
                          <Badge
                            colorScheme="green"
                          >
                           Node.js
                          </Badge>
                          <Badge
                            colorScheme="orange"
                          >
                          Express.js
                          </Badge>
                          <Badge
                            colorScheme="yellow"
                          >
                          MongoDB
                          </Badge>
                          <Badge
                            colorScheme="purple"
                          >
                          Bootstrap
                          </Badge>
                      </HStack>
                    </CardFooter>
                  </Card>
                </>
                ) : (
                  <>
                   
                  </>
                )}
        {selected === "idprocess" ? (
         <>
        <Card size="sm">
          <CardHeader>
            <Flex justifyContent="space-between">
              <HStack>
                <Image src={require('../images/idprocess.png')} h={50} />
                <Box px={2} align="left">
                  <Text fontWeight={600}>Idprocess Consulting , Champs-sur-Marne , France, Stage</Text>
                  <Text>Développeur d’application mobile</Text>
                </Box>
              </HStack>
              <Text px={2} fontWeight={300}>
              Août 2020 - Sept. 2020
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex>
              <List align="left" spacing={3}>
              <ListItem>
                <ListIcon
                    boxSize={6}
                    as={ChevronRightIcon}
                    color={"yellow.500"}
                />
               Programmation d’une application mobile
            </ListItem>
              </List>
            </Flex>
          </CardBody>
          <CardFooter>
            <HStack spacing={2}>
            <Badge
            colorScheme="blue"
            >
            Xamarin Forms
            </Badge>
            <Badge
            colorScheme="green"
            >
            C#
            </Badge>
            <Badge
            colorScheme="red"
            >
            XAML
            </Badge>
            </HStack>
          </CardFooter>
        </Card>
    </>
      ) : (
      <>
      </>
      )}
              </Stack>
              </Fade>
          </Stack>
        </Container>
      </>
    );
  }
  