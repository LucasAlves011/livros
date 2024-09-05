import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Cadastro from './pages/cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/esqueciSenha/EsqueciSenha.jsx';
import Recomendacao from './pages/recomendacao/Recomendacao.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: '/home',
        element: <Recomendacao />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/esqueci-senha',
    element: <EsqueciSenha />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

