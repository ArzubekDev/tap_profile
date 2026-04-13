'use client';

export default function Error({ error, reset }: any) {
  return (
    <div>
      <p>Глобальная ошибка: {error.message}</p>
      <button onClick={reset}>Кайра жүктөө</button>
    </div>
  );
}