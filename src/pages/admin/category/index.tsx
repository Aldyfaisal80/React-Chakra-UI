import { Button, Flex, Text, Spinner, Alert, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Stack, Input, Icon, InputGroup, InputLeftElement, Tag } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import ButtonCard from "../../../components/elements/ButtonCard";
import { FaSearch } from "react-icons/fa";
import { useCategories, useDeleteCategory } from "../../../features/category";

export default function Category() {
  const [page, setPage] = useState(1);
  const {data,error,loading,message,status} = useCategories(10, page);
  // const {} = useDeleteCategory();

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
      <Flex justifyContent={"space-between"} mb={4} alignItems="center">
        <Stack spacing={3} direction="row">
          <Button variant="outline" colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>All Filters</Button>
          <Button variant="outline" colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>All Products</Button>
          <Button variant="outline" colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>All Categories</Button>
          <Button variant="outline" colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>A-Z</Button>
        </Stack>
        <InputGroup w={"400px"} bg={"white"}>
          <InputLeftElement pointerEvents="none"  color="gray.400" borderRadius={"md"}>
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder='Search'
            size='md'
            borderRadius="md"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
            _focus={{ borderColor: "gray.600", boxShadow: "lg" }}
          />
        </InputGroup>
      </Flex>

      <TableContainer bg={"white"} mt={"10px"} borderRadius="unset" boxShadow="md">
        <Table variant="simple" border="2px solid black">
          <Thead bg="gray.50">
            <Tr>
              <Th>NO</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Total Products</Th>
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {category.length > 0 ? (
              category.map((category, index) => (
                <Tr key={category.id} bg={index % 2 === 0 ? "yellow.50" : "white"} border={"2px solid black"}>
                  <Td>{rowIndex(index)}</Td>
                  <Td fontWeight={"semibold"}>{category.name}</Td>
                  <Td>{category.description}</Td>
                  <Td>{category.products.length}</Td>
                  <Td display="flex" justifyContent="center" gap={"10px"}>
                    <ButtonCard text="Update" bgColor="#FF9900" color="white" _hover={{ bgColor: "purple.700" }} as={RouterLink} to={`/category/${category.id}`}
                    />
                    <ButtonCard text="Detail" bgColor="#FE90E7" color="white" _hover={{ bgColor: "blue.600" }} as={RouterLink} to={`/category/${category.id}`}
                    />
                    <ButtonCard text="Delete" bgColor="red.500" color="white" _hover={{ bgColor: "red.600" }} onClick={() => mutate(category.id)}
                    />
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={8} textAlign="center" fontWeight="bold">No products available.</Td>
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