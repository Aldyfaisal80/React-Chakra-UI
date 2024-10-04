import { Flex, FormControl, Input, Select, Text, useToast } from "@chakra-ui/react";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { useCategories } from "../../../../features/category";
import { Category } from "../../../../types/Type";
import { useCreateProduct } from "../../../../features/product";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

// Zod schema for validation
const ProductSchema = z.object({
  name: z.string()
    .min(5, "Minimal 5 characters")
    .max(50, "Maximal 50 characters"),
  price: z.number()
    .min(1000, "Minimal 1000")
    .max(10000000, "Maximal 10000000"),
  description: z.string()
    .min(5, "Minimal 5 characters")
    .max(100, "Maximal 100 characters"),
  category_id: z.string().nonempty("Category is required"),
  image: z.string().url("Invalid image URL")
});

type ProductSchemaType = z.infer<typeof ProductSchema>;

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category_id: "",
      image: "",
    }
  });

  const { data } = useCategories(50, 1);
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading } = useCreateProduct();

  const onSubmit = (values: ProductSchemaType) => {
    mutate(values)
      .then(() => {
        toast({
          title: "Success",
          description: "Product created successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("dashboard/productsAdmin");
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.message || "An error occurred while creating the product",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const renderCategories = () => {
    if (data) {
      return data.data.categories.map((category: Category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ));
    }
  };

  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"} bg={"#F8F7F3"}>
      <form onSubmit={handleSubmit(onSubmit)}> {/* Form tag wrapped around the form control */}
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
            Create Product
          </Text>

          {/* Product Name */}
          <Input
            placeholder="Name"
            {...register("name")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}

          {/* Category */}
          <Select
            placeholder='Category'
            {...register("category_id")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          >
            {renderCategories()}
          </Select>
          {errors.category_id && <Text color="red.500">{errors.category_id.message}</Text>}

          {/* Description */}
          <Input
            placeholder="Description"
            {...register("description")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.description && <Text color="red.500">{errors.description.message}</Text>}

          {/* Price */}
          <Input
            placeholder="Price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.price && <Text color="red.500">{errors.price.message}</Text>}

          {/* Image URL */}
          <Input
            placeholder="Image URL"
            type="url"
            {...register("image")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.image && <Text color="red.500">{errors.image.message}</Text>}

          {/* Button Card */}
          <ButtonCard
            text={isLoading ? "Creating..." : "Create"}
            bgColor={"#FE90E7"}
            type="submit"
          />
        </FormControl>
      </form>
    </Flex>
  );
}
