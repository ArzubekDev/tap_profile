import { ReactNode } from "react";

export type TFormRowWrapperProps = {
  children: ReactNode;
//   fieldType: EFormFieldType;
  disabled?: boolean;
  isMultiField?: boolean;
}


export type TFormErrorProps = {
  showError?: boolean;
  fieldError:
    | string
    // | FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // | Merge<FieldError, FieldErrorsImpl<any>>
    // | undefined;
} 