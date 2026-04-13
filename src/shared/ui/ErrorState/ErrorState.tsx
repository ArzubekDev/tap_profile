// shared/ui/ErrorState.tsx
const ErrorState = ({ message, onRetry }: any) => {
  return (
    <div>
      <p>{message || 'Something went wrong'}</p>
      {onRetry && <button onClick={onRetry}>Retry</button>}
    </div>
  );
};

export default ErrorState;