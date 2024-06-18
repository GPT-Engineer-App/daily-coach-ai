import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text, VStack, Button, IconButton, useToast } from "@chakra-ui/react";
import { FaMicrophone, FaLightbulb } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
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
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">Dashboard</Heading>
      <Tabs variant="soft-rounded" colorScheme="teal">
        <TabList>
          <Tab>Voice Notes</Tab>
          <Tab>Summaries</Tab>
          <Tab>Other</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4}>
              <Text fontSize="lg">Record your daily voice note</Text>
              <IconButton
                aria-label="Record voice note"
                icon={<FaMicrophone />}
                size="lg"
                colorScheme={recording ? "red" : "teal"}
                onClick={handleRecord}
              />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4}>
              <Text fontSize="lg">AI-generated suggestions and summaries</Text>
              <Button leftIcon={<FaLightbulb />} colorScheme="yellow">
                View Today's Suggestions
              </Button>
              <Button leftIcon={<FaLightbulb />} colorScheme="blue">
                View Today's Summary
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <Text fontSize="lg">Other parts of the app will go here.</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;