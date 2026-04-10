import cn from 'classnames';
import { FC } from 'react';

import { ICON_DEFAULT_CLASSNAME, ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../consts';

import { TIcon } from '../types';

const IconMessage: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={'transparent'}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M14.5 2.00018H1.50001C0.672854 2.00018 0 2.67304 0 3.50019V12.5002C0 13.3273 0.672854 14.0002 1.50001 14.0002H14.5C15.3271 14.0002 16 13.3273 16 12.5002V3.50019C16 2.67304 15.3271 2.00018 14.5 2.00018ZM14.5 3.00018C14.5679 3.00018 14.6325 3.01427 14.6916 3.03889L8 8.83857L1.30833 3.03889C1.36742 3.01431 1.43204 3.00018 1.49998 3.00018H14.5ZM14.5 13.0002H1.50001C1.22414 13.0002 0.999996 12.7761 0.999996 12.5002V4.09539L7.67236 9.87811C7.76661 9.95964 7.8833 10.0002 8 10.0002C8.1167 10.0002 8.23339 9.95967 8.32764 9.87811L15 4.09539V12.5002C15 12.7761 14.7759 13.0002 14.5 13.0002Z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path d="M0 0H16V16H0V0Z" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconMessage;
