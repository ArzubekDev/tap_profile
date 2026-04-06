import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconCatalog: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={"#fff"}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 21C4.34315 21 3 19.6569 3 18V12V6C3 4.34315 4.34315 3 6 3H12H18C19.6569 3 21 4.34315 21 6V12V18C21 19.6569 19.6569 21 18 21H12H6Z"
        fill="white"
      />
      <path
        d="M12 3H6C4.34315 3 3 4.34315 3 6V12M12 3H18C19.6569 3 21 4.34315 21 6V12M12 3V21M12 21H18C19.6569 21 21 19.6569 21 18V12M12 21H6C4.34315 21 3 19.6569 3 18V12M3 12H21"
        stroke="#FE3650"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconCatalog;
