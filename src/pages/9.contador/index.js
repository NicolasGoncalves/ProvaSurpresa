import './index.scss'

import Numero from '../../services/Numeronat/index.js'
import { useState } from 'react';

export default function Numerinho(){
    const [inicio, setInicio] = useState(0);
    const [fim, setFim] = useState(0);
    const [resposta, setResposta] = useState([]);

    function verificar(){
        try{
            const r = Numero(inicio, fim );
            setResposta(r);
        }catch(err){
            alert(err.message);
        }
    }


    return(
        <main>
            <header>
                <h1>
                    9. Contador de Numeros naturais
                </h1>
            </header>

            <section>
                <div>
                    <label>Inicio:</label>
                    <input type="number" value={inicio } onChange={e=> setInicio(Number(e.target.value))} />
                </div>
                <div>
                    <label>Fim:</label>
                    <input type='number' value={fim} onChange={e=> setFim(Number(e.target.value))} />
                </div>

                <div>
                    <button onClick={verificar}>Verificar</button>
                </div>

                <div> 
                    { resposta.map(item=>
                        <li>{item}</li>
                    )}

                </div>
            </section>
        </main>


    )
}