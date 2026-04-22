import { Modal } from 'antd';
import Image from 'next/image';
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
      className={style.customModal}
      width={750}
      title="Таблица размеров"
      mask={{ enabled: true, blur: true }}
      open={open}
      onOk={close}
      onCancel={close}
      footer={null}
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
                      <div key={colIndex} className={style.size}>
                        {row[key]}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {chart.info && (
              <div className={style.infoWrapper}>
                <h3 className={style.infoMainTitle}>{chart.info.header}</h3>
                <div className={style.infoContainer}>
                  <div className={style.infoContent}>
                    {chart.info.items?.itemsTitle?.map((title: string, i: number) => (
                      <div key={i} className={style.infoItem}>
                        <strong>
                          {i + 1}. {title}
                        </strong>
                        <p>{chart.info.items.itemsText[i]}</p>
                      </div>
                    ))}
                  </div>

                  {chart.info.image && (
                    <Image
                      src={chart.info.image}
                      alt="Image"
                      width={240}
                      height={320}
                      className={style.image}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default SizeChartModal;
