import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GatewayPage } from './pages/GatewayPage';
import { ClientePage } from './pages/ClientePage';
import { ProfissionalPage } from './pages/ProfissionalPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GatewayPage />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/profissional" element={<ProfissionalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
