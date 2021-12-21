import { Flex, Text, Link as ChakraLink } from "@chakra-ui/core";
import Link from "next/link";
import { usePoem } from "./usePoem";

export const Poem = () => {
  const { data } = usePoem();
  const { title, content, authorName } = data;
  return title && content && authorName ? (
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
        <Text textAlign={"center"} fontSize="h3">
          {title}
        </Text>
        <Text>
          {content
            .split("\n")

            .map((message, key) => (
              <Text children={message} key={key} />
            ))}
        </Text>
        <Text>By {authorName}</Text>
      </Flex>
    </Flex>
  ) : null;
};
