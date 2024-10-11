import { Box, Flex, Text, Button, Heading, HStack, IconButton, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Badge, useColorModeValue, Icon, } from '@chakra-ui/react';
import { FaArrowDown, FaArrowUp, FaBell, FaFileAlt } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ButtonPrimary from '../../../components/elements/ButtonPrimary';

const data = [
  { name: 'Jan', Customers: 2400, Sales: 3400 },
  { name: 'Feb', Customers: 3000, Sales: 2900 },
  { name: 'Mar', Customers: 2200, Sales: 4200 },
  { name: 'Apr', Customers: 3700, Sales: 4100 },
];

const users = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
  { name: 'Paul Walker', email: 'paul@example.com', role: 'Subscriber', status: 'Active' },
  { name: 'Anna Johnson', email: 'anna@example.com', role: 'Admin', status: 'Active' },
];

export default function Dashboard() {
  const bgColor = useColorModeValue('#F8F7F3', '#18181B'); // Light or dark mode

  return (
    <Flex h="100vh" bg={bgColor}>

      <Flex flex="1" direction="column" p={8}>
        <HStack justifyContent="space-between" mb={8}>
          <Heading>Dashboard</Heading>
          <HStack>
            <IconButton icon={<FaBell />} bg={"#FE90E7"} w={12} h={12} aria-label="Notifications" border={"2px solid black"} borderRadius={"unset"} _hover={{
              boxShadow: "4px 4px 0px rgba(0, 0, 0, 1)",
            }} />
            <ButtonPrimary text="Add Product" to="/dashboard/create-product" />
          </HStack>
        </HStack>

        <Flex mb={8}>
          <Box w="80%" bg="white" border="2px solid black" boxShadow="8px 8px 0px 0px black" p={4} mr={4}>
            <Heading size="md" mb={4}>
              Sales Overview
              <Box borderBottom={"2px dashed black"} mt={4}></Box>
            </Heading>
            <LineChart width={950} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#000" />
              <XAxis dataKey="name" stroke="#000" />
              <YAxis stroke="#000" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Customers" stroke="#00BFFF" strokeWidth={4} />
              <Line type="monotone" dataKey="Sales" stroke="#FF0054" strokeWidth={4} />
            </LineChart>
          </Box>

          <Box bg="white" border="2px solid black" boxShadow="8px 8px 0px 0px black" p={4} w="300px" h="auto">
            <Heading size="md" mb={4}>
              Financial Overview
              <Box borderBottom={"2px dashed black"} mt={4}></Box>
            </Heading>

            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  Money in
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  $60,930.50
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Total amount you gained
                </Text>
              </Box>
              <Flex alignItems="center">
                <Badge colorScheme="red" fontSize="md" p={2} borderRadius="md">
                  -14%
                </Badge>
                <Icon as={FaArrowDown} color="red.500" ml={1} />
              </Flex>
            </Flex>

            <Box borderBottom="2px dashed black" mb={4} />

            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Box>
                <Text fontSize="lg" fontWeight="bold">
                  Money out
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                  $42,890.30
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Total amount you spent
                </Text>
              </Box>
              <Flex alignItems="center">
                <Badge colorScheme="green" fontSize="md" p={2} borderRadius="md">
                  +16%
                </Badge>
                <Icon as={FaArrowUp} color="green.500" ml={1} />
              </Flex>
            </Flex>

            <Button width="100%" mt={4} bg="gray.100" border="2px solid black" leftIcon={<FaFileAlt />}>
              Financial Report
            </Button>
          </Box>
        </Flex>

        <TableContainer bg="white" mt="10px" borderRadius="unset" boxShadow="8px 8px 0px 0px black">
          <Table variant="simple" border="2px solid black">
            <Thead bg="gray.50">
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <Tr key={index} bg={index % 2 === 0 ? "yellow.50" : "white"} border="2px solid black">
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td fontWeight="semibold">{user.role}</Td>
                    <Td>
                      <Badge colorScheme={user.status === 'Active' ? 'green' : 'red'}>
                        {user.status}
                      </Badge>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td colSpan={4} textAlign="center" fontWeight="bold">No users available.</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
}