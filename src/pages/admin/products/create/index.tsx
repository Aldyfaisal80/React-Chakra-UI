import { Flex, FormControl, Input, Select, Text } from "@chakra-ui/react";
import ButtonCard from "../../../../components/elements/ButtonCard";
import { useCategories } from "../../../../features/category";
import { Category } from "../../../../types/Type";

export default function CreateProduct() {
  
  
  const { data } = useCategories(50, 1)

  const renderCategories = () => {
    if (data) {
      return data.data.categories.map((category: Category) => {
        return (
          <option key={category.id} value={category.id}>{category.name}</option>
        )
      })
    }
  }
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"} bg={"#F8F7F3"}>
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
        <Input
          placeholder="Name"
          type="name"
          h={"50px"}
          fontSize={"lg"}
          border={"2px solid black"}
        />
        <Select
          placeholder='Category'
          h={"50px"}
          fontSize={"lg"}
          border={"2px solid black"}

        >
          {renderCategories()}
        </Select>
        <Input
          placeholder="Description"
          type="description"
          h={"50px"}
          fontSize={"lg"}
          border={"2px solid black"}
        />
        <Input
          placeholder="Price"
          type="price"
          h={"50px"}
          fontSize={"lg"}
          border={"2px solid black"}
        />
        <Input
          placeholder="Image URL"
          type="imageURL"
          h={"50px"}
          fontSize={"lg"}
          border={"2px solid black"}
        />
        <ButtonCard
          text="Create"
          bgColor={"#FE90E7"}
        />
      </FormControl>
    </Flex>
  )
}