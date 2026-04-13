'use client';
import { Button } from "antd";
import style from "./style.module.scss"

export default function Error({ error, reset }: any) {
  return (
    <div className={style.globalError}>
      <p className={style.text}>Глобальная ошибка: {error.message}</p>
      <Button type="primary" onClick={reset}>Повторить</Button>
    </div>
  );
}