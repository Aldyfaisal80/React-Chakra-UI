import { Box, Button, Flex, Image, Text, Spinner, Alert, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Stack, Select, Input, Icon, InputGroup, InputLeftElement, useToast } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useDeleteProduct, useProducts } from "../../../../features/product";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import { Product } from "../../../../types/Type";

export default function Products() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useProducts(10, page);
  const { mutate } = useDeleteProduct();
  const toast = useToast(); // Initialize useToast for notifications
  const [products, setProducts] = useState<Product[]>(data?.data?.products || []);

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

  const handleDelete = async (product: Product) => {
    if (window.confirm(`Are you sure you want to delete the product: ${product.name}?`)) {
      try {
        await mutate(product); // Send the full product object to mutate
        setProducts(prev => prev.filter(p => p.id !== product.id)); // Remove the deleted product from the state

        // Show success toast
        toast({
          title: "Product deleted",
          description: `${product.name} has been successfully deleted.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (err) {
        // Show error toast
        toast({
          title: "Delete failed",
          description: err.message || "An error occurred while deleting the product.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };

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
            pl="40px"
            outline="none"
            focusBorderColor="transparent"
            border="1px solid gray"
            _hover={{ border: "1px solid gray" }}
            _focus={{
              outline: "none",
              boxShadow: "none",
              border: "1px solid gray",
            }}
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
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
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
                    {/* Pass full product object here */}
                    <ButtonCard text="Delete" bgColor="red.500" onClick={() => handleDelete(product)} color="white" />
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={6} textAlign="center">No products available.</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Pagination */}
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
