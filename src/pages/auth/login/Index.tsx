import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"} bg={"gray.100"}>
      <FormControl display="flex" flexDirection="column" gap={5} w={"500px"} border={"1px solid black"} p={"20px"} boxShadow={"dark-lg"}>
        <FormLabel>Login</FormLabel>
        <Input placeholder="Email" borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"5px solid black"} borderRight={"3px solid black"} />
        <Input placeholder="Password" borderTop={"1px solid black"} borderLeft={"1px solid black"} borderBottom={"5px solid black"} borderRight={"3px solid black"} />
        <Button type="submit" bg={"yellow.400"}>Login</Button>
      </FormControl>
    </Flex>
  )
}
