import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Link
  } from "@chakra-ui/react";

  import { DownloadIcon } from '@chakra-ui/icons'

  export default function Header() {

    return (
      <>
        <Container maxW={"3xl"} id="hero">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
            pt={{ base: 36, md: 52 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
              lineHeight={"110%"}
            >
              BEN YOUNES Ihab <br />
              <Text as={"span"} color={"yellow.400"}>
              Développeur web
              </Text>
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
            >
              Bonjour , je suis un développeur web FullStack passionné par le monde du développement .
            </Text>
            <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
            >
                <Link href={require("../file/CV-Ihab.pdf")} target="blank">
                  <Button
                  colorScheme="yellow"
                  bg={"yellow.400"}
                  px={6}
                  _hover={{
                      bg: `yellow.500`,
                  }}
                  rightIcon={<DownloadIcon />}
                  >
                  Télécharger mon CV
                  </Button>
                </Link>
            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  
