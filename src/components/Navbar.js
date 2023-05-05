import {
    Flex,
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    useMediaQuery,
    useDisclosure,
    HStack,
    Link,
  } from "@chakra-ui/react";
  import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  export default function Nav() {
    
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    
    const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
      heroSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToEducation = () => {
      const aboutSection = document.querySelector("#education");
      aboutSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToExperience = () => {
      const experienceSection = document.querySelector("#experience");
      experienceSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
      const projectsSection = document.querySelector("#projects");
      projectsSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
      const contactSection = document.querySelector("#contact");
      contactSection.scrollIntoView({ behavior: "smooth" });
    };
    const changeScroll = () =>
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? setScroll(true)
        : setScroll(false);
  
    window.addEventListener("scroll", changeScroll);
  
    return (
      <>
        <Flex
          bg={useColorModeValue("gray.100", "gray.900")}
          px={4}
          h={16}
          boxShadow={scroll ? "base" : "none"}
          zIndex="sticky"
          position="fixed"
          as="header"
          alignItems={"center"}
          justifyContent={isLargerThanMD ? "center" : "end"}
          w="100%"
        >
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              {isLargerThanMD ? (
                <>
                  <Button variant="ghost" onClick={scrollToEducation} _hover={{ color: "yellow.300" }}>
                    Mes formations
                  </Button>
                  <Button variant="ghost" onClick={scrollToExperience} _hover={{ color: "yellow.300" }}>
                    Mes expériences
                  </Button>
                  <Button variant="ghost" onClick={scrollToProjects} _hover={{ color: "yellow.300" }}>
                    Mes projets
                  </Button>
                  <Button variant="ghost" onClick={scrollToContact} _hover={{ color: "yellow.300" }}>
                    Me Contacter
                  </Button>
                </>
              ) : (
                <></>
              )}
              <Button onClick={toggleColorMode} _hover={{ color: "yellow.300" }}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
  
              {isLargerThanMD ? (
                <></>
              ) : (
                <>
                  <Button
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                  ></Button>
                  <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerBody>
                        <Button variant="ghost" onClick={scrollToEducation} _hover={{ color: "yellow.300" }}>
                            Mes formations
                        </Button>
                        <Button variant="ghost" onClick={scrollToExperience} _hover={{ color: "yellow.300" }}>
                            Mes expériences
                        </Button>
                        <Button variant="ghost" onClick={scrollToProjects} _hover={{ color: "yellow.300" }}>
                            Mes projets
                        </Button>
                        <Button variant="ghost" onClick={scrollToContact} _hover={{ color: "yellow.300" }}>
                            Me Contacter
                        </Button>
                      </DrawerBody>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </Stack>
          </Flex>
        </Flex>
      </>
    );
  }
  