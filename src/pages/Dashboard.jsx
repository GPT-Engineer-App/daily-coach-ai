import { Box, Heading, Text, VStack, IconButton, useToast, Progress, Flex, Table, Thead, Tbody, Tr, Th, Td, HStack, Spacer } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";
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
      <VStack spacing={8} align="stretch">
        <Box>
          <HStack>
            <Box>
              <Text fontSize="lg" mb={2}>Clips You've Recorded</Text>
              <Progress value={32} colorScheme="pink" size="lg" />
              <Text mt={2}>05 / 20</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="lg" mb={2}>Clips You've Validated</Text>
              <Progress value={54} colorScheme="green" size="lg" />
              <Text mt={2}>12 / 20</Text>
            </Box>
          </HStack>
        </Box>
        <Box>
          <Text fontSize="lg" mb={2}>Contribution Activity</Text>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text>Mocked Contribution Activity Chart</Text>
          </Box>
        </Box>
        <Box>
          <Text fontSize="lg" mb={2}>Top Contributors</Text>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Rank</Th>
                <Th>Name</Th>
                <Th isNumeric>Clips</Th>
                <Th isNumeric>Percentage</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Bansilal Brata</Td>
                <Td isNumeric>453</Td>
                <Td isNumeric>1.78%</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Thitiwat Shimma</Td>
                <Td isNumeric>345</Td>
                <Td isNumeric>1.71%</Td>
              </Tr>
              <Tr>
                <Td>3</Td>
                <Td>George Railean</Td>
                <Td isNumeric>236</Td>
                <Td isNumeric>1.43%</Td>
              </Tr>
              <Tr>
                <Td>4</Td>
                <Td>Hector Mariano</Td>
                <Td isNumeric>212</Td>
                <Td isNumeric>1.02%</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
        <Box textAlign="center">
          <Text fontSize="lg" mb={4}>Record your daily voice note</Text>
          <IconButton
            aria-label="Record voice note"
            icon={<FaMicrophone />}
            size="lg"
            colorScheme={recording ? "red" : "teal"}
            onClick={handleRecord}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Dashboard;