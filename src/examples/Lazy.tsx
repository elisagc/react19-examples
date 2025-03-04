import { Suspense, lazy } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

export const LazyExample = () => {
  return (
    <div>
      <h2>Ejemplo de React.lazy y Suspense</h2>
      <Suspense fallback={<div>Cargando componente...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
