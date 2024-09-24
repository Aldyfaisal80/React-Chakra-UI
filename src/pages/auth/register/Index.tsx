import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Register() {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <FormControl display="flex" flexDirection="column" gap={5} w={"500px"} border={"1px solid black"} p={"20px"}>
        <FormLabel>Register</FormLabel>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </FormControl>
    </Flex>
  )
}
