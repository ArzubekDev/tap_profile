import { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormRowWrapper from '../formRowWrapper';
// import { TFieldInputMaskController } from './type';

// import FormError from "@components/form/components/FormError";

// import {
//   FORM_FIELD_CLASSNAME_ERROR,
//   FORM_FIELD_CLASSNAME_PREFIX,
// } from "@components/form/consts";
// import { EFormFieldType } from "@components/form/types";

const FieldInputMaskController = (props: any) => {
  const {
    name,
    // label,
    // wrapperClassName,
    onChangeValue,
    disabled,
    saveOnlyNumber = true,
    // isRequiredField,
    placeholder,
    mask,
    // changeOnBlur,
    ...rest
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  //   const fieldError = getValueByString(errors, name);
  const [hovering, setHovering] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormRowWrapper
          // fieldType={EFormFieldType.inputMask}
          // label={label}
          // wrapperClassName={cn(wrapperClassName)}
          // showError={false}
          // isRequiredField={isRequiredField}
          // fieldError={fieldError}
          >
            <div></div>
            {/* <div
              className={cn(
                `${FORM_FIELD_CLASSNAME_PREFIX}_wrapper`,
                !checkIsEmptyValue(fieldError) && FORM_FIELD_CLASSNAME_ERROR,
              )}
            >
              <div className={`${FORM_FIELD_CLASSNAME_PREFIX}_inner-wrapper`}>
                <MaskedInput
                  {...field}
                  {...rest}
                  ref={(ref) => {
                    if (ref?.inputElement) {
                      field.ref(ref.inputElement);
                    }
                  }}
                  className={cn(`${FORM_FIELD_CLASSNAME_PREFIX}_field`)}
                  onMouseEnter={() => {
                    setHovering(true);
                  }}
                  onMouseLeave={() => {
                    setHovering(false);
                  }}
                  placeholder={hovering ? maskArrayToString(mask) : placeholder}
                  mask={mask}
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const val = saveOnlyNumber
                      ? e.target.value.replace(/[^0-9]/g, "")
                      : e.target.value;
                    const clearValue = val ? `+${val}` : val;
                    if (!clearValue) {
                      field.onChange(null);
                      if (onChangeValue) {
                        onChangeValue(null);
                      }
                    } else if (field.value !== clearValue) {
                      field.onChange(clearValue);
                      if (onChangeValue) {
                        onChangeValue(clearValue);
                      }
                    }
                  }}
                  disabled={disabled}
                />
              </div>
              <FormError fieldError={fieldError} />
            </div> */}
          </FormRowWrapper>
        );
      }}
    />
  );
};

export default FieldInputMaskController;

// function maskArrayToString(
//   maskArray: Mask | ((value: string) => Mask),
// ): string | undefined {
//   if (isArray(maskArray)) {
//     return maskArray
//       .map((item) => {
//         if (item instanceof RegExp && item.source === "\\d") {
//           return "_";
//         } else {
//           return item.toString();
//         }
//       })
//       .join("");
//   }
// }
