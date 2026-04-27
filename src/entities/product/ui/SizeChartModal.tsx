import { Modal } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import SizeTable from './SizeTable';
import style from './style.module.scss';

type SizeChartModalProps = {
  close: () => void;
  open: boolean;
  charts: any;
};

// РАЗМЕРЫ У ВСЕХ ОДИНОКОВЫЙ.
// ПОТОМ НАДО МЕНЯТ РАЗМЕРЫ В MALE, MALE_KID, FEMALE_KID.
// У FEMALE СВОИ
const SizeChartModal = ({ close, open, charts }: SizeChartModalProps) => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <Modal
      className={style.customModal}
      width={600}
      title={<span className={style.mainTitle}>Таблица размеров</span>}
      mask={{ enabled: true, blur: true }}
      open={open}
      onOk={close}
      onCancel={close}
      footer={
        <button className={style.closeBtn} onClick={close}>
          Закрыть
        </button>
      }
    >
      {/* Таблица */}
      <div className={style.sizeTable}>
        {charts?.map((chart: any, index: any) => (
          <div key={index} className={style.section}>
            {/* Название одежды */}
            <h3 className={style.title}>{chart.title}</h3>
            {/* Контейнер таблицы */}
            <SizeTable chart={chart} />
            {/* Info: Текст и манекен (Изображение) */}
            {chart.info && (
              <div className={style.infoWrapper}>
                {/*h3: Как снять мерки */}
                <h3 className={style.title}>{chart.info.header}</h3>
                <div className={style.infoContainer}>
                  <div className={style.infoContent}>
                    {chart.info.items?.itemsTitle?.map((title: string, i: number) => (
                      <div key={i} className={style.infoItem}>
                        {/* Title */}
                        <strong>
                          {i + 1}. {title}
                        </strong>
                        {/* Текст */}
                        <p className={style.infoText}>{chart.info.items.itemsText[i]}</p>
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
