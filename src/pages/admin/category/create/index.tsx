import { Flex, FormControl, Input, Text } from "@chakra-ui/react";
import ButtonCard from "../../../../components/elements/ButtonCard";

export default function CreateCategory() {
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
          Create Category
        </Text>
        <Input
          placeholder="Name"
          type="name"
          h={"50px"}
          fontSize={"lg"}
          border={"2px solid black"}
        />
        <Input
          placeholder="Description"
          type="description"
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
