import { Modal } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import style from './style.module.scss';

type SizeChartModalProps = {
  close: () => void;
  open: boolean;
  charts: any;
};

// РАЗМЕРЫ У ВСЕХ ОДНИКОВЫЙ. 
// ПОТОМ НАДО МЕНЯТ РАЗМЕРЫ В MALE, MALE_KID, FEMALE_KID. 
// У FEMALE СВОЙ РАЗМЕР
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
            <div className={style.tableContainer}>
                {/* Header Таблицы: RU, INT ..... */}
              <div className={style.headerContainer}>
                {chart.headers.map((header: any, colIndex: any) => (
                  <div key={colIndex} className={style.tableHeader}>
                    <span className={style.label}>{header.label}</span>
                    <span className={style.subLabel}>{header.subLabel}</span>
                  </div>
                ))}
              </div>
              {/* Body таблицы: Все размеры */}
             <div className={style.tableBodyContainer}>
               {chart.data.map((row: any, rowIndex: any) => (
                <div
                  onClick={() => setActiveRow(rowIndex)}
                  key={rowIndex}
                  className={`${style.tableBody} ${activeRow === rowIndex ? style.activeRow : ''}`}
                >
                  {chart.headers.map((header: any, colIndex: any) => {
                    const key = typeof header === 'string' ? header : header.key;
                    return (
                      // Размер
                      <div key={colIndex} className={style.size}>
                        {row[key]}
                      </div>
                    );
                  })}
                </div>
              ))}
             </div>
            </div>
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

//   "male": {
//     "t-shirt": {
//       "title": "Толстовка",
//      "headers": [
//   { "key": "RU", "label": "RU", "subLabel": "Российский размер" },
//   { "key": "back_length_cm", "label": "Длина, см", "subLabel": "По спинке" },
//   { "key": "sleeve_length_cm", "label": "Длина, см", "subLabel": "Рукава" },
//   { "key": "chest_half_cm", "label": "ПОГ, см", "subLabel": "Полуобхват груди" },
//   { "key": "hips_half_cm", "label": "ПОБ, см", "subLabel": "Полуобхват бедер" }
// ],
//       "data": [
//         { "RU": 44, "back_length_cm": 66, "sleeve_length_cm": 52, "chest_half_cm": 52, "hips_half_cm": 79 },
//         { "RU": 46, "back_length_cm": 66, "sleeve_length_cm": 54, "chest_half_cm": 54, "hips_half_cm": 79 },
//         { "RU": 48, "back_length_cm": 66, "sleeve_length_cm": 56, "chest_half_cm": 56, "hips_half_cm": 79 },
//         { "RU": 50, "back_length_cm": 66, "sleeve_length_cm": 58, "chest_half_cm": 58, "hips_half_cm": 79 },
//         { "RU": 52, "back_length_cm": 60, "sleeve_length_cm": 60, "chest_half_cm": 60, "hips_half_cm": 78 },
//         { "RU": 54, "back_length_cm": 68, "sleeve_length_cm": 62, "chest_half_cm": 62, "hips_half_cm": 78 }
//       ]
//     },
//     "trousers": {
//       "title": "Брюки",
//       "headers": ["RU", "waist_cm", "hips_cm", "inseam_cm"],
//       "data": [
//         { "RU": 44, "waist_cm": 78, "hips_cm": 94, "inseam_cm": 81 },
//         { "RU": 46, "waist_cm": 82, "hips_cm": 98, "inseam_cm": 81 }
//       ]
//     }
//   }