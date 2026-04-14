import { QRCode } from 'antd';
import style from '../style.module.scss';

const QRCodeComponent = () => {
  const downloadUrl = '';

  return (
    <div className={style.block}>
      <QRCode value={downloadUrl} className={style.qrcode}/>
      <h6>Наведите камеру и скачайте бесплатное приложение</h6>
    </div>
  );
};

export default QRCodeComponent;