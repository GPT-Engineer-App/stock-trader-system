import React, { useState } from "react";
import { Box, Button, ChakraProvider, Divider, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Table, Thead, Tbody, Tr, Th, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { FaRegMoneyBillAlt, FaHistory, FaRegClock, FaShoppingCart, FaUserPlus, FaRegChartBar } from "react-icons/fa";

const stocks = [
  { ticker: "AAPL", company: "Apple Inc.", volume: 100000, price: 150.0 },
  { ticker: "GOOGL", company: "Alphabet Inc.", volume: 80000, price: 2800.0 },
  { ticker: "AMZN", company: "Amazon.com, Inc.", volume: 50000, price: 3300.0 },
];

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userType, setUserType] = useState("customer"); // 'customer' or 'administrator'

  // Mock user interface for customer
  const renderCustomerUI = () => (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Customer Dashboard
      </Heading>
      <Stack spacing={4} direction="row" align="center">
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
          Buy Stocks
        </Button>
        <Button leftIcon={<FaRegMoneyBillAlt />} colorScheme="teal" variant="outline">
          Deposit Cash
        </Button>
        <Button leftIcon={<FaHistory />} colorScheme="teal" variant="outline">
          Transaction History
        </Button>
        <Button leftIcon={<FaRegClock />} colorScheme="teal" variant="outline">
          Portfolio
        </Button>
      </Stack>
      <Divider my={6} />
      <Heading as="h3" size="md" mb={4}>
        Available Stocks
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Ticker</Th>
            <Th>Company</Th>
            <Th isNumeric>Volume</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stocks.map((stock) => (
            <Tr key={stock.ticker}>
              <Td>{stock.ticker}</Td>
              <Td>{stock.company}</Td>
              <Td isNumeric>{stock.volume.toLocaleString()}</Td>
              <Td isNumeric>${stock.price.toFixed(2)}</Td>
              <Td isNumeric>${(stock.volume * stock.price).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );

  // Mock user interface for administrator
  const renderAdministratorUI = () => (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Administrator Dashboard
      </Heading>
      <Stack spacing={4} direction="row" align="center">
        <Button leftIcon={<FaUserPlus />} colorScheme="teal" variant="solid" onClick={onOpen}>
          Create Stock
        </Button>
        <Button leftIcon={<FaRegChartBar />} colorScheme="teal" variant="outline">
          Set Market Hours
        </Button>
      </Stack>
      <Divider my={6} />
      {/* Mockup Modal for Creating a New Stock */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Stock</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="company" isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input placeholder="Company Name" />
            </FormControl>
            <FormControl id="ticker" mt={4} isRequired>
              <FormLabel>Stock Ticker</FormLabel>
              <Input placeholder="Ticker" />
            </FormControl>
            <FormControl id="volume" mt={4} isRequired>
              <FormLabel>Volume</FormLabel>
              <Input placeholder="Volume" type="number" />
            </FormControl>
            <FormControl id="price" mt={4} isRequired>
              <FormLabel>Initial Price</FormLabel>
              <Input placeholder="Price" type="number" step="0.01" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );

  return (
    <ChakraProvider>
      <Flex width="full" align="center" justifyContent="center">
        <Box p={2}>
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Stock Trading System
          </Heading>
          <Divider mb={6} />
          {userType === "customer" ? renderCustomerUI() : renderAdministratorUI()}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default Index;
