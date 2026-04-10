import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconCheck: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={color || ICON_DEFAULT_COLOR}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.9"
        d="M5.00001 1L2.5 3.5L1 2"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCheck;
