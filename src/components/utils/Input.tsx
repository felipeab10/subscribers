import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import React from "react";
import {
    DeepRequired,
    FieldError,
    FieldErrorsImpl,
    Merge,
} from "react-hook-form";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    isRequired?: boolean;
    error?:
    | Merge<FieldError, FieldErrorsImpl<DeepRequired<any>>>
    | FieldError
    | undefined;
}
type RefProp = HTMLInputElement;

export const Input = React.forwardRef<RefProp, InputProps>((props, ref) => {
    return (
        <FormControl isRequired={props.isRequired} isInvalid={!!props.error}>
            {props.label && (
                <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            )}
            <ChakraInput
                // name={props.name}
                // id={props.name}
                {...props}
                ref={ref}
                focusBorderColor="blue.900"
                bgColor="gray.900"
                variant="filled"
                _focus={{ bgColor: "gray.900" }}
                _hover={{
                    bgColor: "gray.900",
                }}
                size="lg"
            // defaultValue={props.defaultValue}
            // value={props.value}
            // placeholder={props.placeholder}
            // onChange={props.onChange}
            />
            {!!props.error && (
                <FormErrorMessage>{props.error.message}</FormErrorMessage>
            )}
        </FormControl>
    );
});
