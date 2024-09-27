import { Box, Button, Flex, Grid, GridItem, Image, Text, Spinner, Alert } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useProducts } from "../../../features/product";


export default function Products() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, totalPages } = useProducts(10, page);

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
<Flex w="100%" h="max-content" justifyContent="center" alignItems="center">
    <Grid templateColumns="repeat(5, 1fr)" w="80%" h="fit-content" mt="40px" gap={6} justifyContent="center" mx="auto">
      {data.map((product) => (
        <GridItem key={product.id} w="100%" h="auto" border="2px solid black" _hover={{ boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 1)" }} transition="box-shadow 0.3s ease-in-out" borderRadius="10px">
          <Box>
            <Image src={product.image} alt={product.name} w="100%" h="250px" objectFit="cover" borderRadius={"10px"}/>
            <Box p={4}>
              <Text mt={2} fontWeight="bold" fontSize="xl">{product.name}</Text>
              <Text fontSize="lg">Price: ${product.price}</Text>
              <Box display="flex" justifyContent="space-between" mt={4} gap={2} borderTop="2px solid black">
                <Button as={RouterLink} to={`/products/${product.id}`} mt={2} bg="#FFB344" _hover={{boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",}}>
                  Details
                </Button>
                <Button as={RouterLink} to={`/`} mt={2} bg="#FFB344" _hover={{boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",}}>
                  Add to cart
                </Button>
              </Box>
            </Box>
          </Box>
        </GridItem>
      ))}
    </Grid>
  </Flex>

      {/* Pagination controls */}
      <Flex display={"flex"} justifyContent={"center"} alignItems={"center"} mt={4}>
        <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </Button>
        <Text mx={4}>Page {page} of {totalPages}</Text>
        <Button onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))} disabled={page === totalPages}>
          Next
        </Button>
      </Flex>
    </>
  );
}
