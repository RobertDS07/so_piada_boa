import { forwardRef } from "react";

import {
  FormLabel,
  FormControl,
  FormLabelProps,
  FormControlProps,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  FormHelperText,
} from "@chakra-ui/react";

import RenderIf from "components/RenderIf";

interface TextareaProps extends ChakraTextareaProps {
  label?: Omit<FormLabelProps, "size">;
  wrapperProps?: FormControlProps;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, wrapperProps, helperText, ...chakraTextareaProps }, ref) => {
    return (
      <FormControl {...wrapperProps}>
        <RenderIf condition={!!label}>
          <FormLabel
            minInlineSize="fit-content"
            size={chakraTextareaProps.size}
            {...label}
          />
        </RenderIf>

        <ChakraTextarea
          ref={ref}
          {...chakraTextareaProps}
          id={label?.htmlFor ?? chakraTextareaProps.id}
        />

        <FormHelperText
          color="red.main"
          visibility={helperText ? "visible" : "hidden"}
        >
          {helperText}
        </FormHelperText>
      </FormControl>
    );
  }
);

export default Textarea;
