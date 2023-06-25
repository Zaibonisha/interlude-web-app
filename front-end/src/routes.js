import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Breaks = lazy(() => import('./pages/BreaksPage'));

const PageRoutes = () => (
  <>
    <Suspense fallback={<h1 className="text-center text-[30px]">Loading...</h1>}>
      <Routes>
        <Route path="/breaks" element={<Breaks />} />
      </Routes>
    </Suspense>
  </>
);
export default PageRoutes;
