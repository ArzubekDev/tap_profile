import { QRCode } from 'antd';
import style from '../style.module.scss';

const QRCodeComponent = () => {
  const downloadUrl = '';

  return (
    <div className={style.qrblock}>
      {/* <QRCode value={downloadUrl} className={style.qrcode}/> */}
      <div className={style.qrcode}>
QR CODE
      </div>
      <p className={style.qrtext}>Наведите камеру и скачайте <br /> бесплатное приложение</p>
    </div>
  );
};

export default QRCodeComponent;