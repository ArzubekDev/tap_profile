'use client';

import { Drawer } from 'antd';

import { useWindowSize } from '@/src/shared/hooks/useWindowSize';
import style from './style.module.scss';

type SizeChartModalProps = {
  open: boolean;
  close: () => void;
};
const SizeChartModal = ({ open, close }: SizeChartModalProps) => {
  const isCompact = useWindowSize(1000);
  const placement = isCompact ? 'bottom' : 'right';
  const drawerSize = isCompact ? { height: '80%' } : { width: 550 };

  return (
    <section className={style.page}>
      <Drawer
        title="Таблица размеров"
        placement={placement}
        {...drawerSize}
        closable={{ placement: 'end' }}
        onClose={close}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Take a look at the top-right corner...</p>
      </Drawer>
    </section>
  );
};

export default SizeChartModal;
