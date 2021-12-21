import { Button, ButtonProps } from "@chakra-ui/core";

export const CustomButton: React.FC<ButtonProps> = (Props) => (
  <Button
    bg="grey.100"
    color="white"
    fontFamily={"primary"}
    fontSize="25px"
    cursor={"pointer"}
    _focus={{ bg: "grey.100" }}
    _active={{ bg: "grey.100" }}
    _hover={{ bg: "grey.100" }}
    {...Props}
  ></Button>
);
