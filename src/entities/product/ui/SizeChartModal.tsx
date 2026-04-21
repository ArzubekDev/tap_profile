import { Modal } from 'antd';
import style from './style.module.scss';

type SizeChartModalProps = {
  close: () => void;
  open: boolean;
  charts: any;
};
const SizeChartModal = ({ close, open, charts }: SizeChartModalProps) => {
  return (
    <Modal
      // footer={footer}
      className={style.customModal}
      title="Custom Function Modal"
      mask={{ enabled: true, blur: true }}
      open={open}
      onOk={close}
      onCancel={close}
    >
     <div className={style.sizeTable}>
  {charts?.map((chart: any, index: any) => (
    <div key={index} className={style.section}>
      <h3 className={style.title}>{chart.title}</h3>
      
      {/* 1. БАШКЫ САПТЫ (HEADERS) КОШУУ */}
      <div className={`${style.row} ${style.headerRow}`}>
        {chart.headers.map((header: any, colIndex: any) => (
          <div key={colIndex} className={`${style.cell} ${style.headerCell} ${colIndex === 2 ? style.active : ''}`}>
            {typeof header === 'string' ? header : header.label}
          </div>
        ))}
      </div>

      {/* 2. МААЛЫМАТТАР (DATA) */}
      {chart.data.map((row: any, rowIndex: any) => (
        <div key={rowIndex} className={style.row}>
          {chart.headers.map((header: any, colIndex: any) => {
            const key = typeof header === 'string' ? header : header.key;
            const isActive = colIndex === 2;
            return (
              <div
                key={colIndex}
                className={`${style.cell} ${isActive ? style.active : ''} ${colIndex === 0 ? style.firstCol : ''}`}
              >
                {row[key]}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  ))}
</div>
    </Modal>
  );
};

export default SizeChartModal;
