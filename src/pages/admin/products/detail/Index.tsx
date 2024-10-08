import { Box, ButtonGroup, Flex, Image, Text } from "@chakra-ui/react";
import { useDeleteProduct, useProductID } from "../../../../features/product";
import { useNavigate, useParams } from "react-router-dom";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { Product } from "../../../../types/Type";
import Swal from "sweetalert2";
import { Link as RouterLink } from "react-router-dom";

export default function DetailsProducts() {
  const { id } = useParams();
  const { data: product, loading, error, message, status } = useProductID(id);
  const { mutate } = useDeleteProduct();
  const navigate = useNavigate()

  console.log(status);

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
        mutate(id);
        Swal.fire(
          'Deleted!',
          'The product has been deleted.',
          'success'
        );
        navigate('/dashboard/products')
      }
    });
  };

  console.log(product);
  console.log(message);

  if (loading) {
    return (
      <Flex justifyContent={'center'} w={'100%'} h={'100vh'} alignItems={'center'} bg="#f9f9f9">
        <Text fontSize="3xl" fontWeight="bold">Loading...</Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent={'center'} w={'100%'} h={'100vh'} alignItems={'center'} bg="#f9f9f9">
        <Text fontSize="3xl" fontWeight="bold">{error.message}</Text>
      </Flex>
    );
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <Flex justifyContent={'center'} w={'100%'} h={'100vh'} alignItems={'center'} bg="#f9f9f9">
      <Flex
        direction={'column'}
        w={"600px"}
        p={4}
        bg="white"
        border={"2px solid black"}
        boxShadow={"8px 8px 0px 0px rgba(0, 0, 0, 1)"}
      >
        <Box w={'100%'} h={'300px'} mb={4} overflow="hidden">
          <Image
            w={'100%'}
            h={'100%'}
            src={product?.image}
            objectFit={'cover'}
            alt={product?.name}
          />
        </Box>

        <Box mb={2}>
          <Text fontSize="2xl" fontWeight="bold" textTransform="uppercase" color="black">
            {product?.name || 'Product Name Not Available'}
          </Text>
        </Box>

        <Box mb={2}>
          <Text fontSize="lg" color="black">
            {product?.description || 'Description Not Available'}
          </Text>
        </Box>

        <Box mb={2}>
          <Text fontSize="lg" fontWeight="semibold" color="black">
            Price: {currencyFormatter.format(product?.price)}
          </Text>
        </Box>

        <Box>
          <Text fontSize="lg" color="black" fontWeight="semibold" textTransform="uppercase">
            Category: {product?.category?.name || 'Category Not Available'}
          </Text>
        </Box>
        <Box mb={2} display={'flex'} justifyContent={'space-between'}>
          <ButtonGroup>
            <ButtonCard color="white" bgColor="#FF9900" text={'Back'} as={RouterLink} to={'/dashboard/products'} />
          </ButtonGroup>
          <ButtonGroup>
            <ButtonCard color="white" bgColor="#FF9900" text={'Update'} as={RouterLink} to={`/dashboard/update-product/${product?.id}`} />
            <ButtonCard color="white" bgColor="red.500  " text={'Delete'} onClick={() => handleDelete(product)} />
          </ButtonGroup>
        </Box>
      </Flex>
    </Flex>
  );
}
