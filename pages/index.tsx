import { Flex } from "@chakra-ui/core";
import { PoemCard, PoemCardProps } from "../components/Common/PoemCard";
import { LayoutWrapper } from "../components/LayoutWrapper";
import Sidebar from "../components/Sidebar";
import { usePoemCards } from "../components/Common/usePoemCards";

export default function Home() {
  const { data } = usePoemCards();
  return (
    <LayoutWrapper>
      <Flex flexWrap="wrap" flex={1} overflow={"auto"}>
        {data.map((poem, key) => (
          <PoemCard key={key} {...poem}></PoemCard>
        ))}
      </Flex>
    </LayoutWrapper>
  );
}
