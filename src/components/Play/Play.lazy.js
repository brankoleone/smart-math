import React, { lazy, Suspense } from 'react';

const LazyPlay = lazy(() => import('./Play'));

const Play = props => (
  <Suspense fallback={null}>
    <LazyPlay {...props} />
  </Suspense>
);

export default Play;
