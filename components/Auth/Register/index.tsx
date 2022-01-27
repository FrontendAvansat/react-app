import { Input, Flex } from "@chakra-ui/core";
import { CustomButton } from "../../Common/CustomButton";
import NameWrap from "../../Common/NameWrap";
import { useRegister } from "./useRegister";

export const RegisterComponent = () => {
  const { data, setData, sendData } = useRegister();
  return (
    <Flex justify={"center"} flex={1} align={"center"}>
      <Flex
        bg="grey.100"
        color="white"
        h="600px"
        p="32px"
        direction={"column"}
        borderRadius={"10px"}
        boxShadow={"5px 5px 20px black"}
      >
        <Flex justify={"center"} fontFamily={"primary"} fontSize={"h2"}>
          Register
        </Flex>
        <NameWrap title="First Name">
          <Input
            value={data?.firstName}
            w="256px"
            onChange={(e) => {
              setData({ ...data, firstName: e.target.value });
            }}
          ></Input>
        </NameWrap>
        <NameWrap title="Last Name">
          <Input
            value={data?.lastName}
            w="256px"
            onChange={(e) => {
              setData({ ...data, lastName: e.target.value });
            }}
          ></Input>
        </NameWrap>
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
            type="password"
            value={data?.password}
            w="256px"
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          ></Input>
        </NameWrap>
        <CustomButton onClick={sendData} alignSelf={"center"}>
          Register
        </CustomButton>
      </Flex>
    </Flex>
  );
};
