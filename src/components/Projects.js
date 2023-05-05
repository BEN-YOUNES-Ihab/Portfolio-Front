import {
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Button,
    Card,
    CardBody,
    Image,
    Heading,
    Badge,
    IconButton,
    useBreakpointValue,
    useMediaQuery 
  } from "@chakra-ui/react";
  import { Fade } from "react-reveal";
  import { useState } from "react";
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  
  export default function Projects() {
    const [isSmallerThanMd] = useMediaQuery("(max-width: 1164px)");

    const [selected, setSelected] = useState(1);

        const handleIncrement = () => {
        setSelected(selected + 1);
        };

        const handleDecrement = () => {
        setSelected(selected - 1);
        };
   
    const top = useBreakpointValue({ base: '86%', md:'2630px' });
    const side = useBreakpointValue({ base: '30%',  md: isSmallerThanMd ? '1px' : '200px' });
 
    const projet2front = () => {
        window.open("https://github.com/BEN-YOUNES-Ihab/Operation-Management-App-Frontend", "_blank", "noreferrer,noopener");
    };
    const projet2back = () => {
        window.open("https://github.com/BEN-YOUNES-Ihab/Operation-Management-App-Backend", "_blank", "noreferrer,noopener");
    };
    const projet3 = () => {
        window.open("https://github.com/ThomasFlandin/PIM", "_blank", "noreferrer,noopener");
    };
    const projet5front = () => {
        window.open("https://github.com/BEN-YOUNES-Ihab/GestionEcoles-FrontEnd", "_blank", "noreferrer,noopener");
    };
    const projet5back = () => {
        window.open("https://github.com/BEN-YOUNES-Ihab/GestionEcoles-BackEnd", "_blank", "noreferrer,noopener");
    };
    const projet6 = () => {
        window.open("https://github.com/BEN-YOUNES-Ihab/Boulangerie-Connectee-Arduino", "_blank", "noreferrer,noopener");
    };
    return (
      <>
        {selected != 1 ? (
        <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() =>  handleDecrement(selected)}>
            <BiLeftArrowAlt size="40px" />
        </IconButton>
        ) : (
            <></>
        )}
        {selected != 6 ? (
            <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => handleIncrement(selected)}>
            <BiRightArrowAlt size="40px" />
            </IconButton>
        ) : (
            <></>
        )}
      <Fade bottom>

        <Container maxW={"3xl"} id="projects">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
           <Stack spacing={2} as={Container} maxW={"3xl"} textAlign={"center"}>
              <Heading fontSize={"5xl"} color={"yellow.400"} marginBottom={50}>Mes projets</Heading>
            </Stack>
            <Stack px={4} spacing={4}>
                {selected === 1 ? (
                    <Card
                        direction={{
                        base: "column",
                        }}
                        overflow="hidden"
                        height={"550px"}
                    >
                        <Image objectFit="cover" height={'300px'} src={require('../images/projet1.png')} />
    
                        <Stack>
                        <CardBody align="left">
                            <Heading size="md">Pareto</Heading>
                            <Text py={2} height={"141px"}>Application de gestion de restaurants</Text>
                            <HStack pt={4} spacing={2}>
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
                        </CardBody>
                        </Stack>
                    </Card>
                    ) : (
                    <></>
                    )}
                    {selected === 2 ? (
                    <Card
                        direction={{
                        base: "column",
                        }}
                        overflow="hidden"
                        height={"550px"}
                    >
                        <Image objectFit="cover" height={'300px'} src={require('../images/projet2.png')} />
    
                        <Stack>
                        <CardBody align="left">
                            <Heading size="md">DAF</Heading>
                            <Text py={2} height={"85px"}>Application de gestion des opérations financières</Text>
                            <HStack py={2}>
                                <Button color={"yellow.400"} onClick={projet2front}>
                                Lien Github (Front-end)
                                </Button>
                                <Button color={"yellow.400"} onClick={projet2back}>
                                Lien Github (Back-end)
                                </Button>
                            </HStack>
                            <HStack pt={4} spacing={2}>
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
                        </CardBody>
                        </Stack>
                    </Card>
                    ) : (
                    <></>
                    )}
                    {selected === 3 ? (
                    <Card
                        direction={{
                        base: "column",
                        }}
                        overflow="hidden"
                        height={"550px"}
                    >
                        <Image objectFit="cover" height={'300px'} src={require('../images/projet3.jpg')} />
    
                        <Stack>
                        <CardBody align="left">
                            <Heading size="md">Activ’IT</Heading>
                            <Text py={2} height={"85px"}>Une application web qui permet de faciliter le choix et l’organisation des activités entre amis.
                            </Text>
                            <HStack py={2}>
                                <Button color={"yellow.400"} onClick={projet3}>
                                Lien Github
                                </Button>
                            </HStack>
                            <HStack pt={4} spacing={2}>
                                <Badge
                                colorScheme={"green"}
                                >
                                VueJS
                                </Badge>
                                <Badge
                                colorScheme={"black"}
                                >
                                Symfony
                                </Badge>
                                <Badge
                                colorScheme={"orange"}
                                >
                                SQL
                                </Badge>
                            </HStack>
                        </CardBody>
                        </Stack>
                    </Card>
                    ) : (
                    <></>
                    )}
                    {selected === 4 ? (
                    <Card
                        direction={{
                        base: "column",
                        }}
                        overflow="hidden"
                        height={"550px"}
                    >
                        <Image objectFit="cover" height={'300px'} src={require('../images/projet4.png')} />
    
                        <Stack>
                        <CardBody align="left">
                            <Heading size="md">Gestion des collaborateurs</Heading>
    
                            <Text py={2}>Une application mobile qui permet le suivi de l’activité des collaborateurs de la société IDPROCESS Consulting</Text>
    
                            
                            <HStack pt={4} spacing={2} height={"200px"}>
                                <Badge
                                colorScheme={"blue"}
                                >
                                Xamarin Forms
                                </Badge>
                                <Badge
                                colorScheme={"green"}
                                >
                                C#
                                </Badge>
                                <Badge
                                colorScheme={"red"}
                                >
                                XAML
                                </Badge>
                            </HStack>
                        </CardBody>
                        </Stack>
                    </Card>
                    ) : (
                    <></>
                    )}
                    {selected === 5 ? (
                    <Card
                        direction={{
                        base: "column",
                        }}
                        overflow="hidden"
                        height={"550px"}
                    >
                        <Image objectFit="cover" src={require('../images/MicrosoftTeams-image.png')} />
    
                        <Stack>
                        <CardBody align="left">
                            <Heading size="md">Gestion Ecoles</Heading>
    
                            <Text py={2} height={"80px"}>Application de gestion de classes scolaires</Text>
    
                            <HStack py={2} >
                                <Button color={"yellow.400"} onClick={projet5front}>
                                Lien Github (Front-end)
                                </Button>
                                <Button color={"yellow.400"} onClick={projet5back}>
                                Lien Github (Back-end)
                                </Button>
                            </HStack>
                            <HStack pt={4} spacing={2}>
                                <Badge
                                colorScheme={"red"}
                                >
                                Angular
                                </Badge>
                                <Badge
                                colorScheme={"blue"}
                                >
                                Java EE
                                </Badge>
                                <Badge
                                colorScheme={"green"}
                                >
                                Spring
                                </Badge>
                                <Badge
                                colorScheme={"orange"}
                                >
                                SQL
                                </Badge>
                            </HStack>
                        </CardBody>
                        </Stack>
                    </Card>
                    ) : (
                    <></>
                    )}
                     {selected === 6 ? (
                    <Card
                        direction={{
                        base: "column",
                        }}
                        overflow="hidden"
                        height={"550px"}
                    >
                        <Image objectFit="cover" src={require('../images/projet6.png')} />
    
                        <Stack>
                        <CardBody align="left">
                            <Heading size="md">Boulangerie Connectée</Heading>
    
                            <Text py={2}>Création d'un point d'accès Wi-Fi à l'aide d'un ESP 12 et création d'une IHM afin de configurer des capteurs de chaleurs et de mouvements sur le réseau Wi-Fi d'une boulangerie</Text>
    
                            <HStack py={2}>
                                <Button color={"yellow.400"} onClick={projet6}>
                                Lien Github
                                </Button>
                            </HStack>
                            <HStack pt={4} spacing={2}>
                            <Badge
                                colorScheme={"blue"}
                                >
                                Arduino
                                </Badge>
                                <Badge
                                colorScheme={"red"}
                                >
                                html
                                </Badge>
                                <Badge
                                colorScheme={"orange"}
                                >
                                css
                                </Badge>
                                <Badge
                                colorScheme={"yellow"}
                                >
                                JS
                                </Badge>
                            </HStack>
                        </CardBody>
                        </Stack>
                    </Card>
                    ) : (
                    <></>
                    )}
            </Stack>
          </Stack>
        </Container>
        </Fade>
      </>
    );
  }
  