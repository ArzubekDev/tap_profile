import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconPlus: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={color || ICON_DEFAULT_COLOR}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="7.5"
        width="1"
        height="16"
        rx="0.5"
        transform="rotate(90 16 7.5)"
        fill="#181818"
      />
      <rect x="7.5" width="1" height="16" rx="0.5" fill="#181818" />
    </svg>
  );
};

export default IconPlus;
