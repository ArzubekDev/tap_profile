import cn from 'classnames';
import { FC } from 'react';

import { ICON_DEFAULT_CLASSNAME, ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../consts';

import { TIcon } from '../types';

const IconStorePlus: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={'transparent'}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10V20h16V10" stroke="#000" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M3.5 9l3-4.5h11L20.5 9" stroke="#000" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M9.5 10v10M14.5 10v10" stroke="#000" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="17.5" cy="17" r="4.25" stroke="#000" strokeWidth="1.55" />
      <path
        d="M17.5 15.1v3.8M15.6 17h3.8"
        stroke="#000"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconStorePlus;
