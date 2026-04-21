'use client';

import { Drawer, Grid } from 'antd';

import style from './style.module.scss';

const { useBreakpoint } = Grid;

type SizeChartModalProps = {
  open: boolean;
  close: () => void;
};
const SizeChartModal = ({ open, close }: SizeChartModalProps) => {
  const screens = useBreakpoint();
  // Эгер экран кичинекей (xs) болсо 'bottom', чоң болсо 'right' болот
  const placement = screens.xs ? 'bottom' : 'right';
  // Мобилдикте бийиктигин, десктопто кенендигин башкарабыз
  const drawerSize = screens.xs ? { height: '70%' } : { width: 500 };

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
