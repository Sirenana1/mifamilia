// App.js
import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes y Route



import Menu from './components/menu'; // Asegúrate de que menu.js esté dentro de la carpeta 'components'
import RegistroUsuario from './components/RegistroUsuario'; // Asegúrate de que RegistroUsuario.js esté dentro de la carpeta 'components'
import InicioSesionUsuario from './components/InicioSesionUsuario'; // Asegúrate de que InicioSesionUsuario.js esté dentro de la carpeta 'components'

function App() {
  return (
    <div className='App'>
      <Routes>

        <Route path="/" element={<InicioSesionUsuario />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/inicio-sesion" element={<InicioSesionUsuario />} />
      </Routes>
    </div>
    
  );
}

export default App;

