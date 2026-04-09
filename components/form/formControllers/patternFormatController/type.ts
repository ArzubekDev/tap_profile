import { Control, FieldValues, Path } from 'react-hook-form';


export interface PatterFormatControllerProps<T extends FieldValues> {
  id?: string;
  name: Path<T>;
  text?: string;
  control: Control<T>;
  label?: string;
  placeholder?: string;
}