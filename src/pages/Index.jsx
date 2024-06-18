import { Container, VStack, Heading, Text, Button, Box, Flex, IconButton, useToast } from "@chakra-ui/react";
import { FaMicrophone, FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [recording, setRecording] = useState(false);
  const toast = useToast();

  const handleRecord = () => {
    setRecording(!recording);
    toast({
      title: recording ? "Recording stopped" : "Recording started",
      status: recording ? "warning" : "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Daily Coaching App</Heading>
        <Box width="100%" textAlign="center">
          <Text fontSize="xl" mb={4}>Record your daily voice note</Text>
          <IconButton
            aria-label="Record voice note"
            icon={<FaMicrophone />}
            size="lg"
            colorScheme={recording ? "red" : "teal"}
            onClick={handleRecord}
          />
        </Box>
        <Box width="100%" textAlign="center">
          <Text fontSize="xl" mb={4}>AI-generated suggestions and summaries</Text>
          <Flex direction="column" align="center">
            <Button leftIcon={<FaLightbulb />} colorScheme="yellow" mb={2}>
              View Today's Suggestions
            </Button>
            <Button leftIcon={<FaLightbulb />} colorScheme="blue">
              View Today's Summary
            </Button>
          </Flex>
        </Box>
        <Box width="100%" textAlign="center">
          <Link to="/dashboard">
            <Button colorScheme="teal" size="lg">Go to Dashboard</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;