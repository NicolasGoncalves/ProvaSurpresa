import './index.scss'

import signos from "../../services/Signos/index.js"
import { useState, useEffect } from 'react'

export default function Signo() {
    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState('');
    const [verificar, setVerificar] = useState('');

    useEffect(() => {
        Verificar();
    }, [])

    function Verificar() {
        try {
            const r = signos(dia, mes);
            setVerificar(r);
        } catch (err) {
            alert(err.message)
        }

    }

    return (
        <main>
            <header>
                <h1>2. Signos</h1>
            </header>

            <section>
                <div>
                    <span> Dia: </span>
                    <input type="number" value={dia} onChange={e => setDia(Number(e.target.value))} />
                </div>

                <div>
                    <span> Mês: </span>
                    <input type="text" value={mes} onChange={e => setMes(e.target.value)} />
                </div>

                <div>
                    <button onClick={Verificar}>Verificar</button>
                </div>

                <div>
                    <p> Seu signo é Libra? {verificar}</p>
                </div>

            </section>




        </main>
    )
}
