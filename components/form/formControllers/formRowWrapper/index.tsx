'use client';

import { FC, useState } from 'react';

import { TFormRowWrapperProps } from './type';

const FormRowWrapper: FC<TFormRowWrapperProps> = (
  {
    //   children,
    //   fieldType,
    //   showError = true,
    //   fieldError,
    //   wrapperClassName,
    //   disabled,
    //   isMultiField,
    //   isRequiredField = false,
  },
) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default FormRowWrapper;
