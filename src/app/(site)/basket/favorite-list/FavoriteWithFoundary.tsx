'use client';

import { ErrorBoundary } from 'react-error-boundary';
import Favorite from '@/src/components/pages/profile/favorite';
import { Button } from 'antd';
import style from "./style.module.scss"

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className={style.error}>
      <p className={style.text}>Ошибка: {error.message}</p>
      <Button type='primary' onClick={resetErrorBoundary}>Повторить</Button>
    </div>
  );
}

export default function FavoriteWithBoundary() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Favorite />
    </ErrorBoundary>
  );
}