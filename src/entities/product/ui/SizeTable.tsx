import { useState } from 'react';
import style from './style.module.scss';

const SizeTable = ({ chart }: { chart: any }) => {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  return (
    <div className={style.tableContainer}>
      <div className={style.headerContainer}>
        {chart.headers.map((header: any, colIndex: any) => (
          <div key={colIndex} className={style.tableHeader}>
            <span className={style.label}>{header.label}</span>
            <span className={style.subLabel}>{header.subLabel}</span>
          </div>
        ))}
      </div>
      <div className={style.tableBodyContainer}>
        {chart.data.map((row: any, rowIndex: any) => (
          <div
            key={rowIndex}
            onClick={() => setActiveRow(rowIndex)}
            // Эгер hover керек болсо: onMouseEnter={() => setActiveRow(rowIndex)}
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
    </div>
  );
};

export default SizeTable