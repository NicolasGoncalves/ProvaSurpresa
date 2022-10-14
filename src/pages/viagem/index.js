import { useEffect, useState } from 'react'
import './index.scss'

import viajar from '../../services/Viagem/index.js'

export default function Viajar() {

    const [capacidade, setCapacidade] = useState(0);
    const [consumo, setConsumo] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [resposta, setResposta] = useState(0);


    useEffect(() => {
        calcular();
    }, [])

    function calcular() {
        try {
            const r= viajar(capacidade, consumo, distancia);
            setResposta(r);  
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <main>
            <header>
                <h1>5. Calcular Paradas</h1>
            </header>

            <section>
                <div>
                    <label> Capacidade </label>
                    <input type="number" value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                </div>

                <div>
                    <label> Consumo </label>
                    <input type="number" value={consumo} onChange={e => setConsumo(e.target.value)} />
                </div>

                <div>
                    <label> Distância </label>
                    <input type="number" value={distancia} onChange={e => setDistancia(e.target.value)} />
                </div>

                <div>
                    <button onClick={calcular} > Calcular</button>
                </div>

                <div>
                    <p>
                        Você precisara fazer {resposta} para abastecer
                    </p>
                </div>
            </section>
        </main>
    )
}