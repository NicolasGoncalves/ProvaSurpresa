import './index.scss'

import DesenharRetangulo from '../../services/Retangulo/index.js'
import { useState } from 'react'

export default function Retangulozinho(){
    const [base,setBase]=useState(0);
    const [altura,setAltura]=useState(0);
    const [resposta,setResposta]=useState([]);

    function desenhar(){
        try {
            const r=DesenharRetangulo(base,altura);
            setResposta(r);
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <main>
            <header>
                <h1>11. Desenhar retangulo </h1>
            </header>

            <section>

                <div>
                    <label> Base:</label>
                    <input type="number" value={base} onChange={e=>setBase(Number(e.target.value))} />
                </div>

                <div>
                    <label> Altura:</label>
                    <input type="number" value={altura} onChange={e=>setAltura(Number(e.target.value))}/>
                </div>

                <div>
                    <button onClick={desenhar} > Desenhar </button>
                </div>
                
                <div>
                    {resposta.map(item=>
                        <p> {item} </p>    
                    )}
                </div>

            </section>
        </main>
    )
}