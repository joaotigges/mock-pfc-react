import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importação do Layout Base
import { Layout } from './components/Layout';

// Importação das Páginas
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { SecurityPage } from './pages/SecurityPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* O Layout envolve todas as rotas filhas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="security" element={<SecurityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;