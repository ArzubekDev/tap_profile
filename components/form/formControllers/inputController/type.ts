import { InputProps } from "antd";
import { Control, FieldValues, Path } from "react-hook-form";

export interface InputControllerProps<T extends FieldValues> extends Omit<InputProps, 'name'> {
  id?: string;
  name: Path<T>;
  control: Control<T>;
  label?: string;
  text?: string;
  error?: string;
}