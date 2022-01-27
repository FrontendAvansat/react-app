import { Box, Button, Flex, Input, Textarea } from "@chakra-ui/core";
import { CustomButton } from "../Common/CustomButton";
import NameWrap from "../Common/NameWrap";
import { useAddPoem } from "./useAddPoem";

export const AddPoemComponent = () => {
  const { data, setData, sendData } = useAddPoem();
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
          Add Poem
        </Flex>
        <NameWrap title="Title">
          <Input
            value={data?.title}
            w="256px"
            onChange={(e) => {
              setData({ ...data, title: e.target.value });
            }}
          ></Input>
        </NameWrap>
        <NameWrap title="Text">
          <Textarea
            value={data?.text}
            w="256px"
            onChange={(e) => {
              setData({ ...data, text: e.target.value });
            }}
          ></Textarea>
        </NameWrap>
        <CustomButton onClick={sendData} alignSelf={"center"}>
          Add Poem
        </CustomButton>
      </Flex>
    </Flex>
  );
};
