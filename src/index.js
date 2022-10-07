import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom';
import './index.css';

import VendasAcai from './pages/VendaAçai'
import Signo from './pages/Signo'
import Sorvete from './pages/Sorvete'
import Home from './pages/home'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/acai' element={<VendasAcai/>}/>
        <Route  path='/signo' element={<Signo/>}/>
        <Route  path='/sorveteria' element={<Sorvete/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

