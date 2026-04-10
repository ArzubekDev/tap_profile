import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconSearchTap: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={"transparent"}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.592 14.592C17.3582 11.8258 17.3582 7.34087 14.592 4.57466C11.8258 1.80845 7.34087 1.80845 4.57466 4.57466C1.80845 7.34087 1.80845 11.8258 4.57466 14.592C7.34087 17.3582 11.8258 17.3582 14.592 14.592ZM14.592 14.592L17.5 17.5"
        stroke={ICON_DEFAULT_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSearchTap;
