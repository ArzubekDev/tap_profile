import { IconEdit, IconUploadImg } from '@/src/shared/ui/Icons';
import { useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

import style from './style.module.scss';

const LogoUpload = ({ control }: { control: any }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={style.logo}>
      <div className={style.content}>
        <label className={style.contentName}>Логотип</label>
        <p className={style.contentText}>
          Квадратное изображение 1:1. <br /> Показывается в карточке магазина.
        </p>
      </div>

      <Controller
        name="logo"
        control={control}
        render={({ field: { onChange } }) => (
          <div className={style.uploadWrapper}>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setPreview(imageUrl);
                  onChange(file);
                }
              }}
            />

            <div className={style.uploadContainer} onClick={handleContainerClick}>
              {preview ? (
                <img src={preview} alt="Logo Preview" className={style.previewImg} />
              ) : (
                <IconUploadImg className={style.iconUpload} />
              )}

              <span className={style.editContainer}>
                <IconEdit className={style.editIcon} />
              </span>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default LogoUpload;
