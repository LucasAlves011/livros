import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Cadastro from './pages/cadastro/Cadastro.jsx';
import EsqueciSenha from './pages/esqueciSenha/EsqueciSenha.jsx';
import Recomendacao from './pages/recomendacao/Recomendacao.jsx';
import CadastroPreferencias from './pages/cadastro/CadastroPreferencias.jsx';
import Teste from './pages/Teste.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: '/home',
    element: <Recomendacao />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/cadastro/:email',
    element: <CadastroPreferencias />
  },
  {
    path: '/esqueci-senha',
    element: <EsqueciSenha />
  },
  {
    path: '/teste',
    element: <Teste /> /* FIXME: remover teste */
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />
);

