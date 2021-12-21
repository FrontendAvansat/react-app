import { BoxProps, Text } from "@chakra-ui/core";
import Link from "next/link";
import React from "react";

export interface HeaderLinkInterface extends BoxProps {
  href: string;
}

const HeaderLink: React.FC<HeaderLinkInterface> = ({
  href,
  children,
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <Text
        as="a"
        fontFamily="secondary"
        fontSize="h3"
        mr={4}
        ml={2}
        my={2}
        color="white"
        cursor="pointer"
        textDecoration={"none"}
        {...rest}
        // _hover={{ color: jrTheme.colors.orange[500] }}
      >
        {children}
      </Text>
    </Link>
  );
};

export default HeaderLink;
