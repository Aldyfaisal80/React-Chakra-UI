import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Flex, FormControl, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
// import Logo1 from "../../../../public/assets/images/l1.png";

export default function Register() {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} h={"100vh"} bg={"#F8F7F3"}>
      <Button
        as={RouterLink}
        to={"/"}
        bg={"#ffb747"}
        position={"absolute"}
        top={"20px"}
        left={"20px"}
        leftIcon={<ArrowBackIcon />}
      />
      <FormControl
        display="flex"
        flexDirection="column"
        gap={5}
        w={"500px"}
        borderTop={"2px solid black"}
        borderLeft={"2px solid black"}
        p={"20px"}
        borderRadius={"10px"}
        boxShadow={"8px 8px 0px 0px rgba(0, 0, 0, 1)"}
        bg={""}
      >
        <Text fontSize={"1.5rem"} fontWeight={"bold"}>
          Register
        </Text>

        <Input
          placeholder="Username"
          border={"2px solid black"}
          _hover={{
            bg: "gray.200",
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
          }}
        />
        <Input
          placeholder="Email"
          border={"2px solid black"}
          _hover={{
            bg: "gray.200",
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          border={"2px solid black"}
          _hover={{
            bg: "gray.200",
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
          }}
        />
        <Button type="submit"
          bg={"#ffb747"}
          _hover={{
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
          }}>
          Register
        </Button>
        <Link as={RouterLink} to='/auth/login'>
          Already have an account? <ExternalLinkIcon mx='2px' />
        </Link>
      </FormControl>
    </Flex>
  );
}
