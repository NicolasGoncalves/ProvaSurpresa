import './index.scss'

import orçamento from '../../services/Orcamento/index.js'
import { useEffect, useState } from 'react'

export default function Orçamento(){

    const [gastos, setGastos] = useState(0);
    const [ganhos, setGanhos] = useState(0);
    const [resposta, setResposta] = useState(0);


    useEffect(() =>{
        verificar()
    },[])

    function verificar() {
        try {
            const r = orçamento(ganhos ,gastos);
            setResposta(r);
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <main>
            <header>
                <h1>
                    7. Situação familiar
                </h1>
            </header>

            <section>
                <div>
                    <label> Ganhos </label>
                    <input type="number" value={ganhos} onChange={e => setGanhos(Number(e.target.value))} />
                </div>

                <div>
                    <label> Gastos </label>
                    <input type="number" value={gastos} onChange={e => setGastos(Number(e.target.value))} />
                </div>

                <div>
                    <button onClick={verificar}>Verificar</button>
                </div>

                <div>
                    <p>
                        {resposta}
                    </p>
                </div>
            </section>
        </main>
    )
}