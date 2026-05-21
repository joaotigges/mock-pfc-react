import { Home } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { SecurityPage } from './pages/SecurityPage';
import { Layout } from './components/Layout';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Seu Header/Sidebar aqui
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/security", element: <SecurityPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);

