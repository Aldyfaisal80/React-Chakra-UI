import { Flex, FormControl, Input, Text, useToast } from "@chakra-ui/react";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCreateCategory } from "../../../../features/category";

// Define schema for category creation validation
const CategorySchema = z.object({
  name: z.string()
    .min(5, "Name is too short, minimum 5 characters")
    .max(50, "Name is too long, maximum 50 characters"),
  description: z.string()
    .min(10, "Description is too short, minimum 10 characters")
    .max(250, "Description is too long, maximum 250 characters"),
});

type CategorySchemaType = z.infer<typeof CategorySchema>;

export default function CreateCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, loading } = useCreateCategory();

  // Handle form submission
  const onSubmit = (values: CategorySchemaType) => {
    mutate(values)
      .then(() => {
        toast({
          title: "Success",
          description: "Category created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("/dashboard/category");
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.message || "An error occurred while creating the category",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
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
            Create Category
          </Text>
          <Input
            placeholder="Name"
            {...register("name")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
          <Input
            placeholder="Description"
            {...register("description")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.description && <Text color="red.500">{errors.description.message}</Text>}
          <ButtonCard
            text={loading ? "Creating..." : "Create"}
            bgColor={"#FE90E7"}
            type="submit"
          />
        </FormControl>
      </form>
    </Flex>
  );
}
