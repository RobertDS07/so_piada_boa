import { forwardRef } from "react";

import {
  FormLabel,
  FormControl,
  FormLabelProps,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControlProps,
  InputGroup,
  InputElementProps,
  InputRightElement,
  InputLeftElement,
  FormHelperText,
} from "@chakra-ui/react";

import RenderIf from "components/RenderIf";

export interface InputProps extends ChakraInputProps {
  label?: Omit<FormLabelProps, "size">;
  wrapperProps?: FormControlProps;
  rightElement?: InputElementProps;
  leftElement?: InputElementProps;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      wrapperProps,
      rightElement,
      leftElement,
      helperText,
      ...chakraInputProps
    },
    ref
  ) => {
    return (
      <FormControl {...wrapperProps}>
        <RenderIf condition={!!label}>
          <FormLabel size={chakraInputProps.size} {...label} />
        </RenderIf>

        <InputGroup>
          <RenderIf condition={!!leftElement}>
            <InputLeftElement pointerEvents="none" {...leftElement} />
          </RenderIf>

          <ChakraInput
            ref={ref}
            {...chakraInputProps}
            id={label?.htmlFor ?? chakraInputProps.id}
            paddingLeft={leftElement ? "45px" : "16px"}
          />

          <RenderIf condition={!!rightElement}>
            <InputRightElement pointerEvents="none" {...rightElement} />
          </RenderIf>
        </InputGroup>

        <RenderIf condition={!!helperText}>
          <FormHelperText color="red.main">{helperText}</FormHelperText>
        </RenderIf>
      </FormControl>
    );
  }
);

export default Input;
