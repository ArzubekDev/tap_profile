import cn from 'classnames';
import { FC } from 'react';

import {
  ICON_DEFAULT_CLASSNAME,
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_HEIGHT,
  ICON_DEFAULT_WIDTH,
} from '../consts';

import { TIcon } from '../types';

const IconFavorite: FC<TIcon> = ({ color, className, width, height, ...rest }) => {
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
        d="M13.0147 6.41994C10.8381 4.08267 7.30909 4.08267 5.13247 6.41994C2.95584 8.75721 2.95584 12.5467 5.13247 14.8839L12.3116 22.5929C13.2309 23.5801 14.7691 23.5801 15.6884 22.5929L22.8675 14.8839C25.0442 12.5467 25.0442 8.75648 22.8675 6.41921C20.6909 4.08194 17.1619 4.08267 14.9853 6.41994C14.4411 7.00426 13.5589 7.00426 13.0147 6.41994Z"
      />
    </svg>
  );
};

export default IconFavorite;
