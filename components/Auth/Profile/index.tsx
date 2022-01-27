import { Flex, Text, Link as ChakraLink } from "@chakra-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../../pages/_app";

export const Profile = () => {
  const { data } = useContext(AuthContext);
  const { email, firstName, lastName } = data;
  return email && firstName && lastName ? (
    <Flex justify={"center"} flex={1} align={"center"}>
      <Flex
        maxH={"85%"}
        bg="grey.100"
        color="white"
        overflow={"auto"}
        h="400px"
        p="32px"
        minW={"256px"}
        direction={"column"}
        borderRadius={"10px"}
        height={"fit-content"}
        boxShadow={"5px 5px 20px black"}
        fontSize={"h4"}
      >
        <Flex justify={"center"} fontFamily={"primary"} fontSize={"h2"}>
          Profile
        </Flex>
        <Text fontSize="h3">Email: {email}</Text>
        <Text fontSize="h3">First Name: {firstName}</Text>
        <Text fontSize="h3">Last Name: {lastName}</Text>
      </Flex>
    </Flex>
  ) : null;
};
