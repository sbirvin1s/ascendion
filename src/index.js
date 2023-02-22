/* ========== EXTERNAL MODULES ========== */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ========== INTERNAL MODULES ========== */
import Home from './pages/Home';
import { PointsProvider } from './context/PointsContext';


if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

/* ========== EXPORTS ========== */
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <PointsProvider>
        <Home />
      </PointsProvider>
    </React.StrictMode>
  );
