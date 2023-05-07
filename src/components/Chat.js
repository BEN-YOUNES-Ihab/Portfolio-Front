import { 
    Button, 
    Box, 
    Input, 
    Flex, 
    extendTheme ,
    useColorModeValue, 
    InputGroup, 
    InputRightElement,
    } from "@chakra-ui/react";
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { FiSend } from "react-icons/fi";
import { useEffect, useRef, useState } from 'react';

export default function Chat() {
  
  

  const bgColor = useColorModeValue("gray.100", "gray.700");
  
  const theme = extendTheme({
    components: {
      Chat: {
        baseStyle: {
          boxShadow:"lg",
          borderRadius: "md",
          bg: bgColor,
          p: 4,
          width: "300px",
          height: "400px",
          position: "relative"
        }
      }
    }
  });

  const [showChat, setShowChat] = useState(false);
  const [botMessageSent, setbotMessageSent] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([{ text: "Bonjour! je suis le bot de Ihab, posez-moi des questions!", sender: "bot" }]);
  
  const toggleChat = () => setShowChat(!showChat);
  const changebotMessageSent= (state) => {
    setbotMessageSent(state);
  };
  const handleBotResponse = (sentMessage) => {
    // simulate bot response 
    const botResponse = { text: sentMessage, sender: "bot" };
    setMessages(messages => [...messages, botResponse]);  
    changebotMessageSent(true); 
  };

  const handleSubmit = async () => {
    // if (message !== "" && botMessageSent) {
      if (message !== ""  && botMessageSent) {
      changebotMessageSent(false);
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
  
      try {
        const response = await fetch("http://localhost:5000/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: message }),
        });
  
        const data = await response.json();
        handleBotResponse(data.data.toString());
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  //Scroll
    const chatWindowRef = useRef(null);
    useEffect(() => {
        if (chatWindowRef.current) {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);
  return (
    <Box position="fixed" bottom="5vh" right="5vw">
      {showChat ? (
        <Box as="section" sx={theme.components.Chat.baseStyle}>
          <Flex justifyContent="end" alignItems="center" mb={4}>
            <CloseIcon
              boxSize={3}
              onClick={toggleChat}
              cursor={"pointer"}
              _hover={{ color: "yellow.300" }}
            />
          </Flex>
          <Box flexGrow={1} position="relative" >
            <Box overflowY="scroll" height={'270px'} mb={10} ref={chatWindowRef}  __css={{
                '&::-webkit-scrollbar': {
                w: '1',
                },
                '&::-webkit-scrollbar-track': {
                w: '6',
                },
                '&::-webkit-scrollbar-thumb': {
                borderRadius: '10',
                bg: `gray.200`,
                },
            }}>
              {messages.map((msg, index) => (
                <Box
                maxWidth="85%"
                key={index}
                mb={2}
                bgColor={msg.sender === "user" ? "yellow.300" : "gray.500"}
                p={2}
                borderRadius={msg.sender === "user" ? "md" : "lg"}
                color={msg.sender === "user" ? "black" : "white"}
                __css={{
                  position: "relative",
                  textAlign: msg.sender === "user" ? "right" : "left",
                  minWidth: "45%",
                  padding: "12px 15px",
                  float: msg.sender === "user" ? "right" : "left",
                  left: msg.sender === "user" ? "auto" : "10px",
                  right: msg.sender === "user" ? "10px" : "auto",
                }}
              >
                {msg.text}
                <Box
                  __css={{
                    content: "''",
                    position: "absolute",
                    visibility: "visible",
                    top: "-1px",
                    left: msg.sender === "user" ? "-10px" : "auto",
                    right: msg.sender === "user" ? "auto" : "-10px",
                  }}
                />
                <Box
                  __css={{
                    content: "''",
                    position: "absolute",
                    visibility: "visible",
                    top: "0px",
                    left: msg.sender !== "user" ? "-8px" : "auto",
                    right: msg.sender !== "user" ? "auto" : "-8px",
                    border: "10px solid transparent",
                    borderTop: `10px solid ${msg.sender === "user" ? "#f6e05e" : "#718096"}`,
                    clear: "both",
                  }}
                />
              </Box>
              ))}
            </Box>
            <Box position="absolute" top={280} left={0} right={0}>
              <Flex p={2}>
                <InputGroup>
                  <Input
                    placeholder="Entrer une question"
                    focusBorderColor="#ecc94b"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit() }
                  />
                  <InputRightElement
                    children={<FiSend color="#ecc94b" />}
                    cursor="pointer"
                    onClick={() => {
                      handleSubmit()
                    }}
                  />
                </InputGroup>
              </Flex>
            </Box>
          </Box>
        </Box>
      ) : (
        <Button
          rightIcon={<ChatIcon />}
          colorScheme="yellow"
          variant="outline"
          onClick={toggleChat}
        >
          Chat
        </Button>
      )}
    </Box>
  );
}
