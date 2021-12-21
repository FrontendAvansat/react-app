import { Box, Flex, Image } from "@chakra-ui/core";
import Header from "../Header";
import Sidebar from "../Sidebar";

export const LayoutWrapper: React.FC = ({ children }) => {
  return (
    <Flex
      flexDirection={"row"}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <Sidebar></Sidebar>
      <Flex flex={1} flexDirection={"column"}>
        <Header></Header>
        <Flex flex={1} overflow={"hidden"} position="relative">
          <Flex
            zIndex={-1}
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
          >
            <Image
              w="100%"
              h="100%"
              opacity={0.9}
              objectFit={"cover"}
              src="/forest.jpg"
            ></Image>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
