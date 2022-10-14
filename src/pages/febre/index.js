import { useEffect, useState } from 'react'
import './index.scss'

import febre from '../../services/Febre/index.js'

export default function Febre() {
    
    const [temperatura, setTemperatura] = useState(0);
    const [resposta, setResposta] = useState(0);

    useEffect (() => {
        verificar();
    }, [])

    function verificar(){
        try {
            const r= febre(temperatura);
            setResposta(r);  
        } catch (err) {
            alert(err.message);
        }
        
    } 

    
    
    return (
        <main>
            <header>
                <h1>
                    6. Febre
                </h1>
            </header>

            <section>
                <div>
                    <label> Temperatura</label>
                    <input type="number" value={temperatura} onChange={e => setTemperatura(e.target.value)} />
                </div>

                <div> 
                    <button onClick={verificar} > Verificar</button>
                </div>

                <div>
                    <p>
                        A situação para sua temperatura é {resposta}
                    </p>
                </div>
            </section>
        </main>
    )
}