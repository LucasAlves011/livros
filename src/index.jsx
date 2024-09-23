import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/MyContext.jsx';
import './index.css';
import Cadastro from './pages/cadastro/Cadastro.jsx';
import CadastroPreferencias from './pages/cadastro/CadastroPreferencias.jsx';
import EsqueciSenha from './pages/esqueciSenha/EsqueciSenha.jsx';
import Login from './pages/login/Login.jsx';
import Recomendacao from './pages/recomendacao/Recomendacao.jsx';
// import Teste from './pages/Teste.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: '/home',
    element: <Recomendacao/>,
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
  // {
  //   path: '/teste',
  //   element: <Teste /> /* FIXME: remover teste */
  // }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

