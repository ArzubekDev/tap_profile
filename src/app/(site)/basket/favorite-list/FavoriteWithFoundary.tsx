'use client';

import Favorite from '@/src/components/pages/profile/favorite';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div>
      <p>Ошибка: {error.message}</p>
      <button onClick={resetErrorBoundary}>Повторить</button>
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