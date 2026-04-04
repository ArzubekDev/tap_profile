import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconUser: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
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
      <path d="M16.3333 15.2098H11.4938C8.15284 15.2098 5.44444 17.9183 5.44444 21.2592V23.679C5.44444 24.3472 5.98612 24.8889 6.65432 24.8889H21.1728C21.841 24.8889 22.3827 24.3472 22.3827 23.679V21.2592C22.3827 17.9183 19.6743 15.2098 16.3333 15.2098Z" />
      <path d="M13.9136 12.7901C16.5864 12.7901 18.7531 10.6234 18.7531 7.95059C18.7531 5.2778 16.5864 3.11108 13.9136 3.11108C11.2408 3.11108 9.07407 5.2778 9.07407 7.95059C9.07407 10.6234 11.2408 12.7901 13.9136 12.7901Z" />
    </svg>
  );
};

export default IconUser;
