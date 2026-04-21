import { Modal } from 'antd';
import { useState } from 'react';
import style from './style.module.scss';

type SizeChartModalProps = {
  close: () => void;
  open: boolean;
  charts: any;
};
const SizeChartModal = ({ close, open, charts }: SizeChartModalProps) => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <Modal
      // footer={footer}
      className={style.customModal}
      width={700}
      height={400}
      title="Таблица размеров"
      mask={{ enabled: true, blur: true }}
      open={open}
      onOk={close}
      onCancel={close}
    >
      <div className={style.sizeTable}>
        {charts?.map((chart: any, index: any) => (
          <div key={index} className={style.section}>
            <h3 className={style.title}>{chart.title}</h3>
            <div className={style.tableContainer}>
              <div className={style.headerContainer}>
                {chart.headers.map((header: any, colIndex: any) => (
                  <div key={colIndex} className={style.tableHeader}>
                    <span className={style.label}>{header.label}</span>
                    <span className={style.subLabel}>{header.subLabel}</span>
                  </div>
                ))}
              </div>
              {chart.data.map((row: any, rowIndex: any) => (
                <div
                  onClick={() => setActiveRow(rowIndex)}
                  key={rowIndex}
                  className={`${style.tableBody} ${activeRow === rowIndex ? style.activeRow : ''}`}
                >
                  {chart.headers.map((header: any, colIndex: any) => {
                    const key = typeof header === 'string' ? header : header.key;
                    return (
                      <div
                        key={colIndex}
                        className={`${style.size} ${activeRow === rowIndex ? style.active : ''}`}
                      >
                        {row[key]}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SizeChartModal;
