import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Route ,Routes} from 'react-router-dom';
import './index.css';

import Home from './pages/0.home';
import VendasAcai from './pages/1.VendaAçai';
import Signo from './pages/2.Signo';
import Sorvete from './pages/3.Sorvete';
import SalarioLiquid from './pages/4.SalarioLiquid';
import Viajar from './pages/5.viagem';
import Febre from './pages/6.febre' ;
import Orçamento from './pages/7.OrcamentoFamiliar';
import Cinema from './pages/8.cinema'
import Numerinho from './pages/9.contador';
import Linhazinha from './pages/10.Linha';
import Retangulozinho from './pages/11.Retangulo';
import Cafezinho from './pages/12.CafeProf';
import Financiazinha from './pages/13.Financas';
import Escola from './pages/14.Escola';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>        
        <Route path='/' element={<Home/>}                             />
        <Route path='/acai' element={<VendasAcai/>}                   />
        <Route  path='/signo' element={<Signo/>}                      />
        <Route  path='/sorveteria' element={<Sorvete/>}               />
        <Route  path='/salarioliquido' element={<SalarioLiquid/>}     />
        <Route  path='/paradas' element={<Viajar/>}                   />
        <Route  path='/febre' element={<Febre/>}                      />
        <Route path='/orcamentoFamiliar' element={<Orçamento/>}       />
        <Route  path='/cinema' element={<Cinema/>}                    />
        <Route  path='/contador' element={<Numerinho/>}               />
        <Route  path='/linha' element={<Linhazinha/>}                 />
        <Route  path='/retangulo' element={<Retangulozinho/>}         />
        <Route  path='/cafezinho' element={<Cafezinho/>}              />
        <Route  path='/financa' element={<Financiazinha/>}          />
        <Route  path='/escola' element={<Escola/>}          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

