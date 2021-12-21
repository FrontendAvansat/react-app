import { Box, Button, Flex, Input } from "@chakra-ui/core";
import { CustomButton } from "../../Common/CustomButton";
import NameWrap from "../../Common/NameWrap";
import { useLogin } from "./useLogin";

export const LoginComponent = () => {
  const { data, setData, sendData } = useLogin();
  return (
    <Flex justify={"center"} flex={1} align={"center"}>
      <Flex
        bg="grey.100"
        color="white"
        h="400px"
        p="32px"
        direction={"column"}
        borderRadius={"10px"}
        boxShadow={"5px 5px 20px black"}
      >
        <Flex justify={"center"} fontFamily={"primary"} fontSize={"h2"}>
          Login
        </Flex>
        <NameWrap title="Email">
          <Input
            value={data?.email}
            w="256px"
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          ></Input>
        </NameWrap>
        <NameWrap title="Password">
          <Input
            value={data?.password}
            w="256px"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          ></Input>
        </NameWrap>
        <CustomButton onClick={sendData} alignSelf={"center"}>
          Login
        </CustomButton>
      </Flex>
    </Flex>
  );
};
