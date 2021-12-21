import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Flex,
  Icon,
} from "@chakra-ui/core";
import HeaderLink from "../Header/HeaderLink";

interface Props {
  onClose?: () => void;
  isOpen?: boolean;
  // variant?: "drawer" | "sidebar";
}

const SidebarContent = ({ onClick }: { onClick: () => void }) => (
  <Flex direction={"column"} textAlign={"center"}>
    <Icon
      name={"feather"}
      color="white"
      size={"150px"}
      marginBottom={"70px"}
    ></Icon>
    <HeaderLink href="/" onClick={onClick} w="100%">
      Home
    </HeaderLink>
    <HeaderLink href="/" onClick={onClick} w="100%">
      About
    </HeaderLink>
    <HeaderLink href="/" onClick={onClick} w="100%">
      Contact
    </HeaderLink>
  </Flex>
);

const Sidebar = () => {
  return (
    <Box
      p={5}
      w="150px"
      h="100%"
      // bg="#dfdfdf"
      backgroundColor="grey.100"
    >
      <SidebarContent onClick={console.log} />
    </Box>
  );
};

export default Sidebar;
