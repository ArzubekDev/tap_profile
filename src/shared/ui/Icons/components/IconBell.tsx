import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconBell: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
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
        d="M18 13.5C18 16.5 20 17.5 20 18H4C4 17.5 6 16.5 6 13.5V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V13.5Z"
        stroke="#121A26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20.5C10 21.6046 10.8954 22.5 12 22.5C13.1046 22.5 14 21.6046 14 20.5"
        stroke="#121A26"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconBell;
