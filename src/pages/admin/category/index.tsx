import { Box, Button, Flex, Text, Spinner, Alert, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Stack, Select, Input, Icon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import ButtonCard from "../../../components/elements/ButtonCard";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import { useCategories } from "../../../features/category";

export default function Category() {
  const [page, setPage] = useState(1);
  const {data,error,loading,message,status} = useCategories(10, page);


  const rowIndex = (index: number) => (page - 1) * 10 + (index + 1);

  if (loading) {
    return (
      <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Alert status="error">{error.message}</Alert>
      </Flex>
    );
  }

  if (message) {
      console.log(message);
  }

  if (status) {
      console.log(status);
  }

  const category = data?.data?.categories || [];
  const totalPagesCount = data?.totalPages || 1;


  return (
    <>
      <Flex justifyContent={"space-between"} mb={4}>
        <Stack spacing={3} w="40%">
          <Select placeholder='Filter' size='lg'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Stack>
        <InputGroup w={"400px"}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder='Search'
            size='lg'
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            _focus={{ borderColor: "gray.600", boxShadow: "none" }}
          />
        </InputGroup>
      </Flex>

      <TableContainer bg={"white"} mt={"10px"}>
        <Table border={"2px solid black"} variant="simple">
          <Thead h={"60px"}>
            <Tr border={"2px solid black"}>
              <Th>No</Th>
              <Th>
                <Box display="flex" alignItems="center">
                  Category <FaArrowDown />
                </Box>
              </Th>
              <Th>
                <Box display="flex" alignItems="center">
                  Description <FaArrowDown />
                </Box>
              </Th>
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {category.length > 0 ? (
              category.map((category, index) => (
                <Tr key={category.id} border={"2px solid black"}>
                  <Td>{rowIndex(index)}</Td>
                  <Td>{category.name}</Td>
                  <Td>{category.description}</Td>
                  <Td display="flex" justifyContent="center" gap={"20px"}>
                    <ButtonCard text="Update" bgColor="#FF9E00" as={RouterLink} to={`/category/${category.id}`} color="white" />
                    <ButtonCard text="Detail" bgColor="#FE90E7" as={RouterLink} to={`/category/${category.id}`} color="white" />
                    <ButtonCard text="Delete" bgColor="red.500" as={RouterLink} to={``} color="white" />
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={6} textAlign="center">{message}</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex justifyContent="space-between" mt={4}>
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Text>Page {page} of {totalPagesCount}</Text>
        <Button isDisabled={page === totalPagesCount} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Flex>
    </>
  );
}