import cn from 'classnames';
import { FC } from 'react';

import { ICON_DEFAULT_CLASSNAME, ICON_DEFAULT_HEIGHT, ICON_DEFAULT_WIDTH } from '../consts';

import { TIcon } from '../types';

const IconReviewMessage: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width || ICON_DEFAULT_WIDTH}
      height={height || ICON_DEFAULT_HEIGHT}
      fill={'transparent'}
      className={cn(ICON_DEFAULT_CLASSNAME, className)}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7157 6C14.8549 6.00006 17.4003 8.54531 17.4003 11.6846C17.4001 14.8237 14.8548 17.3681 11.7157 17.3682C11.078 17.3682 10.4648 17.263 9.89244 17.0693C9.3769 16.8948 8.81781 16.8363 8.3026 17.0117L7.32408 17.3447C6.53837 17.6123 5.78795 16.8609 6.05553 16.0752L6.38854 15.0977C6.56397 14.5825 6.50438 14.0233 6.32994 13.5078C6.13627 12.9356 6.03115 12.3222 6.03111 11.6846C6.03111 8.54527 8.57638 6 11.7157 6Z"
        fill="#C4C6CC"
      />
    </svg>
  );
};

export default IconReviewMessage;
