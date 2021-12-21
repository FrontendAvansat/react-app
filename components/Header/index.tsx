import { Box, IconButton, Text, Flex, Button, Icon } from "@chakra-ui/core";
import { useContext } from "react";
import { AuthContext } from "../../pages/_app";
import HeaderLink from "./HeaderLink";

const Header = () => {
  const { data, setData } = useContext(AuthContext);
  return (
    <Flex align={"center"} bg="grey.100" color="white" p={5}>
      <Flex flex={1}></Flex>
      <Text fontSize="h1" flex={1} textAlign={"center"} my="0px">
        Read Poetry
      </Text>
      <Flex align={"center"} flex={1} justify={"flex-end"}>
        {!data ? (
          <>
            <HeaderLink href={"/auth/login"}>Log in</HeaderLink>
            <HeaderLink href={"/auth/register"}>Sign up</HeaderLink>
          </>
        ) : (
          <>
            <HeaderLink
              href="/"
              onClick={() => {
                setData(null);
              }}
            >
              Log Out
            </HeaderLink>
          </>
        )}
      </Flex>
      {/* <HeaderLink>Account</HeaderLink> */}
    </Flex>
  );
};

export default Header;
