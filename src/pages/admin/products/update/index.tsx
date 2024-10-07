import { Flex, FormControl, Input, Select, Text, useToast } from "@chakra-ui/react";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { useCategories } from "../../../../features/category";
import { Category, Product } from "../../../../types/Type";
import { useUpdateProduct } from "../../../../features/product";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import axiosInstance from "../../../../libs/axios";

const ProductSchema = z.object({
  name: z.string()
    .min(5, "Minimal 5 characters")
    .max(50, "Maximal 50 characters"),
  price: z.number()
    .min(1, "Minimal 1 character")
    .max(10000000, "Maximal 10000000 characters"),
  description: z.string()
    .min(5, "Minimal 5 characters")
    .max(100, "Maximal 100 characters"),
  category_id: z.string().nonempty("Category is required"),
  image: z.string().url("Invalid image URL")
});

type ProductSchemaType = z.infer<typeof ProductSchema>;

export default function UpdateProduct() {
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductSchemaType>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      category_id: "",
      image: "",
    },
  });

  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); 
  const { data } = useCategories(50, 1);
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, loading } = useUpdateProduct();

  useEffect(() => {
    axiosInstance.get(`/products/${id}`)
      .then((response) => {
        const product = response.data.data;
        setValue("name", product.name);
        setValue("price", product.price);
        setValue("description", product.description);
        setValue("category_id", product.category_id);
        setValue("image", product.image);
        setSelectedCategory(product.category_id); 
        setLoadingData(false);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to fetch product data",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setLoadingData(false);
      });
  }, [id, setValue, toast]);

  const onSubmit = (values: ProductSchemaType) => {
    const category = data?.data.categories.find((category) => category.id === values.category_id);
    if (!category) {
      toast({
        title: "Error",
        description: "Category not found",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    const product: Product = {
      ...values,
      id: id, 
      category,
    }

    mutate(product)
      .then(() => {
        toast({
          title: "Success",
          description: "Product updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("/dashboard/products");
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: err.message || "An error occurred while updating the product",
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

  if (loadingData) {
    return <Text>Loading...</Text>;
  }

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
            Update Product
          </Text>
          <Input
            placeholder="Name"
            {...register("name")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.name && <Text color="red.500">{errors.name.message}</Text>}
          <Select
            placeholder={selectedCategory ? selectedCategory : "Category"}
            {...register("category_id")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          >
            {renderCategories()}
          </Select>
          {errors.category_id && <Text color="red.500">{errors.category_id.message}</Text>}
          <Input
            placeholder="Description"
            {...register("description")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.description && <Text color="red.500">{errors.description.message}</Text>}
          <Input
            placeholder="Price"
            type="number"
            {...register("price", { valueAsNumber: true })}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.price && <Text color="red.500">{errors.price.message}</Text>}
          <Input
            placeholder="Image URL"
            type="url"
            {...register("image")}
            h={"50px"}
            fontSize={"lg"}
            border={"2px solid black"}
          />
          {errors.image && <Text color="red.500">{errors.image.message}</Text>}
          <ButtonCard
            text={loading ? "Updating..." : "Update"}
            bgColor={"#FE90E7"}
            type="submit"
          />
        </FormControl>
      </form>
    </Flex>
  );
}
