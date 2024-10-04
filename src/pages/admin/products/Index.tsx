import { Box, Button, Flex, Image, Text, Spinner, Alert, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Checkbox, Stack, Select, Input, Icon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../../features/product";
import ButtonCard from "../../../components/elements/ButtonCard";
import { FaArrowDown, FaSearch } from "react-icons/fa";

export default function Products() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, totalPages } = useProducts(10, page);

  const rowIndex = (index: number) => (page - 1) * 10 + (index + 1);

  if (isLoading) {
    return (
      <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex w={"100%"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Alert status="error">{error}</Alert>
      </Flex>
    );
  }

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Stack spacing={3}>
          <Select placeholder='Filter' size='lg'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Stack>
        <InputGroup w={"400px"} ml={3}>
          <InputLeftElement pointerEvents="none" height="100%">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input placeholder='Search' size='lg' pl="40px" outline="none" focusBorderColor="transparent" border="1px solid gray" _hover={{ border: "1px solid gray" }} _focus={{   outline: "none",   boxShadow: "none",   border: "1px solid gray", }}
          />
        </InputGroup>
      </Flex>

      {/* Products Table */}
      <TableContainer bg={"white"} mt={"10px"}>
        <Table border={"2px solid black"} variant="simple">
          <Thead h={"60px"}>
            <Tr border={"2px solid black"}>
              <Th>No</Th>
              <Th>
                <Box display="flex" alignItems="center">
                  Products <FaArrowDown style={{ marginLeft: '4px' }} />
                </Box>
              </Th>
              <Th>
                <Box display="flex" alignItems="center">
                  Name <FaArrowDown style={{ marginLeft: '4px' }} />
                </Box>
              </Th>
              <Th>
                <Box display="flex" alignItems="center">
                  Category <FaArrowDown style={{ marginLeft: '4px' }} />
                </Box>
              </Th>
              <Th>
                <Box display="flex" alignItems="center">
                  Price <FaArrowDown style={{ marginLeft: '4px' }} />
                </Box>
              </Th>
              <Th textAlign="center">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((product, index) => (
              <Tr key={product.id} border={"2px solid black"}>
                <Td>{rowIndex(index)}</Td>
                <Td>
                  <Image boxSize="50px" src={product.image || "path_to_placeholder_image.jpg"} alt={product.name} />
                </Td>
                <Td>{product.name}</Td>
                <Td>{product.category.name}</Td>
                <Td>${product.price}</Td>
                <Td display="flex" justifyContent="center" gap={"20px"}>
                  <ButtonCard text="Update" bgColor="#FF9E00" as={RouterLink} to={`/products/${product.id}`} color="white" />
                  <ButtonCard text="Detail" bgColor="#FE90E7" as={RouterLink} to={`/products/${product.id}`} color="white" />
                  <ButtonCard text="Delete" bgColor="red.500" color="white"/> 
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Flex justifyContent="space-between" mt={4}>
        <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Text>Page {page} of {totalPages}</Text>
        <Button isDisabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Flex>
    </>
  );
}
