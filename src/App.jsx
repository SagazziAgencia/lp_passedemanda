import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { GatewayPage } from './pages/GatewayPage';

// Lazy load other pages
const ClientePage = lazy(() => import('./pages/ClientePage').then(module => ({ default: module.ClientePage })));
const ProfissionalPage = lazy(() => import('./pages/ProfissionalPage').then(module => ({ default: module.ProfissionalPage })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-slate-900" />}>
        <Routes>
          <Route path="/" element={<GatewayPage />} />
          <Route path="/cliente" element={<ClientePage />} />
          <Route path="/profissional" element={<ProfissionalPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
