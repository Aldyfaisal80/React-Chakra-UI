import { Button, Flex, Image, Text, Spinner, Alert, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Stack, Input, Icon, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDeleteProduct, useProducts } from "../../../features/product";
import ButtonCard from "../../../components/elements/ButtonCard";
import { FaSearch } from "react-icons/fa"; 
import Swal from 'sweetalert2';
import { Product } from "../../../types/Type";
import Pagination from "../../../components/elements/Pagination";

export default function Products() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, loading, error } = useProducts(10, page);
  const { mutate } = useDeleteProduct();

  const rowIndex = (index: number) => (page - 1) * 10 + (index + 1);
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    navigate(`/dashboard/products?page=${page}`);
  }, [page, navigate]);

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
        <Alert status="error" variant="subtle" borderRadius="md" boxShadow="lg" p={4}>
          {error.message}
        </Alert>
      </Flex>
    );
  }

  const products = data?.data?.products || [];
  const totalPagesCount = data?.totalPages || 1;

  const handleDelete = (id: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        mutate(id)
          .then(() => {
            Swal.fire(
              'Deleted!',
              'The product has been deleted.',
              'success'
            ).then(() => {
              window.location.reload();
            });
          })
          .catch((error: Error) => {
            Swal.fire(
              'Error!',
              `An error occurred while deleting the product: ${error.message}`,
              'error'
            );
          });
      }
    });
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <>
      <Flex justifyContent={"space-between"} mb={4} alignItems="center">
        <Stack spacing={3} direction="row">
          <Button variant="outline" _hover={{ boxShadow: "md" }} colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>All Filters</Button>
          <Button variant="outline" _hover={{ boxShadow: "md" }} colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>All Products</Button>
          <Button variant="outline" _hover={{ boxShadow: "md" }} colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>All Categories</Button>
          <Button variant="outline" _hover={{ boxShadow: "md" }} colorScheme="gray" bg={"white"} size="md" border={"2px solid black"} borderRadius={"unset"}>A-Z</Button>
        </Stack>
        <InputGroup w={"400px"} bg={"white"} borderRadius={"unset"}>
          <InputLeftElement pointerEvents="none">
            <Icon as={FaSearch} color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder='Search'
            size='md'
            border={"2px solid"}
            borderRadius={"unset"}
            borderColor="black"
            _hover={{ boxShadow: "md" }}
            _focus={{ borderColor: "gray.600", boxShadow: "lg" }}
          />
        </InputGroup>
      </Flex>

      <TableContainer bg={"white"} mt={"10px"} boxShadow="md" borderRadius={"unset"}>
        <Table variant="simple" border={"2px solid black"}>
          <Thead bg="gray.50">
            <Tr>
              <Th>NO</Th>
              <Th>Product</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.length > 0 ? (
              products.map((product, index) => (
                <Tr key={product.id} bg={index % 2 === 0 ? "yellow.50" : "white"} border={"2px solid black"}>
                  <Td>{rowIndex(index)}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Image boxSize="40px" src={product.image || "path_to_placeholder_image.jpg"} alt={product.name} borderRadius="md" mr={2} />
                      <Text fontWeight="medium">{product.name}</Text>
                    </Flex>
                  </Td>
                  <Td fontWeight="medium">{product.category?.name}</Td>
                  <Td>{currencyFormatter.format(product.price)}</Td>
                  <Td display="flex" justifyContent="center" gap={"10px"}>
                    <ButtonCard text="Update" bgColor="#FF9900" color="white" _hover={{ bgColor: "purple.700" }} as={RouterLink} to={`/dashboard/update-product/${product.id}`} />
                    <ButtonCard text="Detail" bgColor="#FE90E7" color="white" _hover={{ bgColor: "blue.600" }} as={RouterLink} to={`/dashboard/detail-product/${product.id}`} />
                    <ButtonCard text="Delete" bgColor="red.500" color="white" _hover={{ bgColor: "red.600" }} onClick={() => handleDelete(product.id)} />
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

      <Pagination currentPage={page} totalPagesCount={totalPagesCount} onPageChange={handlePageChange} />
    </>
  );
}
