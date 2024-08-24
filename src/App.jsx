import { Outlet } from 'react-router-dom';
import './App.css';
import PaginaBasica from './pages/PaginaBasica';


function App() {
  return (
    <>
      <PaginaBasica />
      <Outlet />
    </>
  );
}

export default App;
