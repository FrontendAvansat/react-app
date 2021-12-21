import { Input, InputProps } from "@chakra-ui/core";
import React, { forwardRef } from "react";

export const CustomInput = forwardRef(
  (props: InputProps<HTMLInputElement>, ref) => {
    return (
      <Input
        focusBorderColor="mustard.500"
        borderRadius={2}
        borderColor="grey.500"
        //@ts-ignore
        ref={ref}
        // ref={ref}
        maxLength={100}
        {...props}
      />
    );
  }
);
