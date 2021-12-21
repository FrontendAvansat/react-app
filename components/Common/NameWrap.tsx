import { Flex, PseudoBoxProps, Text } from "@chakra-ui/core";
import React from "react";
// import jrTheme from "theme";

interface NameWrapInterface extends PseudoBoxProps {
  title?: string;
  subtitle?: string;
  errorMessage?: string;
}

const NameWrap: React.FC<NameWrapInterface> = ({
  children,
  title,
  subtitle,
  errorMessage,
  id,
  ...extra
}) => {
  return (
    <Flex
      direction="column"
      mb="32px"
      id={`${id}-container`}
      minH="fit-content"
      {...extra}
    >
      <Flex justify="space-between" flexWrap="wrap">
        <Flex direction="column">
          {title ? (
            <Text mb="8px" color="brown.500" id={`${id}-label`} fontSize={"h4"}>
              {title}
            </Text>
          ) : null}
          {subtitle ? (
            <Text color="gray.500" mb="8px" id={`${id}-sublabel`}>
              {subtitle}
            </Text>
          ) : null}
        </Flex>
        {errorMessage ? (
          <Text color="red.500" mb="8px" fontSize={"h4"} id={`${id}-error`}>
            {errorMessage}
          </Text>
        ) : null}
      </Flex>

      {children}
    </Flex>
  );
};

export default NameWrap;
