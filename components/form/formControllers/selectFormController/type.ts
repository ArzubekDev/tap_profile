import { SelectProps } from "antd";
import { Control, FieldValues, Path } from "react-hook-form";

export interface SelectFormControllerProps<T extends FieldValues> extends Omit<SelectProps, 'name'> {
  name: Path<T>;
  text?: string;
  control: Control<T>;
  label?: string;
  error?: string;
}