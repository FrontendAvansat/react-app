import { Flex, Text, Link as ChakraLink } from "@chakra-ui/core";
import Link from "next/link";

export interface PoemCardProps {
  title: string;
  content: string;
  authorName: string;
  id: string;
}

const poemBody = `Content Lorem Ipsum 
jdsbjhdjchjgdkjucghujd 
gcksjlckdghjfgcsjdhcf
fkhvdkjbhv dfhvjd hdfjvh`;

export const PoemCard: React.FC<PoemCardProps> = ({
  title,
  content,
  authorName,
  id,
}) => {
  return (
    <Flex
      w="256px"
      m={"32px"}
      direction={"column"}
      color="white"
      bg="grey.100"
      p={8}
      height={"fit-content"}
      borderRadius={"10px"}
    >
      <Text>{title}</Text>
      <Text>
        {content
          .split("\n")
          .slice(0, 3)
          .map((message, key) => (
            <Text children={message} key={key} />
          ))}
        <Link href={`/poem/${id}`} passHref>
          <ChakraLink>Read More</ChakraLink>
        </Link>
      </Text>
      <Text>By {authorName}</Text>
    </Flex>
  );
};
