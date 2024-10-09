import { Flex, FormControl, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { useCategoryID, useUpdateCategory } from "../../../../features/category";
import { Category} from "../../../../types/Type";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";
import Swal from "sweetalert2";

// Define schema for category update validation
const CategorySchema = z.object({
  name: z.string()
    .min(5, "Minimal 5 characters")
    .max(50, "Maximal 50 characters"),
  description: z.string()
    .min(5, "Minimal 5 characters")
    .max(100, "Maximal 100 characters"),
});

type CategorySchemaType = z.infer<typeof CategorySchema>;

export default function UpdateCategory() {
  const { id } = useParams()
  const { data: categoryData, loading, error } = useCategoryID(id)
  const { mutate, loading: updating } = useUpdateCategory();
  const toast = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  useEffect(() => {
    if (categoryData) {
      reset({
        name: categoryData?.name || "",
        description: categoryData?.description || "",
      });
    }
  }, [categoryData, reset]);

  if (loading) return <Text>Loading category data...</Text>;
  if (error) return <Text>Error loading category data: {error.message}</Text>;

  // Form submission logic
  const onSubmit = (values: CategorySchemaType) => {
    Swal.fire({
      title: 'Are you sure you want to update the category?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCategory: Category = {
          id: id,
          name: values.name,
          description: values.description,
          data: [], // add this property
          products: [], // add this property
          categories: [], // add this property
        };

        mutate(updatedCategory)
          .then(() => {
            Swal.fire('Updated!', 'The category has been updated.', 'success')
              .then(() => {
                navigate('/dashboard/category');
                toast({
                  title: "Success",
                  description: "Category updated successfully",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  position: "top",
                });
              });
          })
          .catch((err) => {
            toast({
              title: "Error",
              description: err.message || "An error occurred while updating the category",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
          });
      }
    });
  };

  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"} bg={"#F8F7F3"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          display="flex"
          flexDirection="column"
          gap={6}
          w={"600px"}
          borderTop={"2px solid black"}
          borderLeft={"2px solid black"}
          p={"50px"}
          borderRadius={"10px"}
          boxShadow={"8px 8px 0px 0px rgba(0, 0, 0, 1)"}
        >
          <Text fontSize={"1.5rem"} fontWeight={"bold"}>
            Update Category
          </Text>
          <FormControl>
            <FormLabel htmlFor="name" fontSize={"1.2rem"} fontStyle={"bold"}>Category Name</FormLabel>
            <Input
              placeholder="Category Name"
              {...register("name")}
              h={"50px"}
              fontSize={"lg"}
              border={"2px solid black"}
            />
            {errors.name && <Text color="red.500">{errors.name.message}</Text>}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name" fontSize={"1.2rem"} fontStyle={"bold"}>Category Description</FormLabel>
            <Input
              placeholder="Category Description"
              {...register("description")}
              h={"50px"}
              fontSize={"lg"}
              border={"2px solid black"}
            />
            {errors.description && <Text color="red.500">{errors.description.message}</Text>}
          </FormControl>
          <ButtonCard
            text={updating ? "Updating..." : "Update"}
            bgColor={"#FE90E7"}
            type="submit"
          />
        </FormControl>
      </form>
    </Flex>
  );
}
