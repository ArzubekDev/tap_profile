'use client'

import { useRouter } from 'next/navigation';
import { PATH_HOME } from '../../consts/paths';

import IconTapLogo from '@/src/components/Icons/components/IconTapLogo';
import style from './style.module.scss';

const TapLogo = () => {
  const route = useRouter();

  return <IconTapLogo onClick={() => route.push(PATH_HOME)} className={style.tapLogo} />;
};

export default TapLogo;
