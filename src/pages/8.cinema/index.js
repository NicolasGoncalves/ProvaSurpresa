import './index.scss'

import cinema from '../../services/ingressos/index.js'
import { useState, useEffect } from 'react'


export default function Cinema(){

    const [resposta, setResposta] = useState(0);
    const [inteira, setInteira] = useState(0);
    const [meias, setMeias] = useState(0);
    const [dia, setDia] = useState('');
    const [nacionalidade, setNacionalidade] = useState(false);


    useEffect(() => {
        calcular();
    }, [])

    function calcular () {
        try {
            const a = cinema(inteira, meias, dia, nacionalidade);
            setResposta(a);
        } catch (err) {
            alert(err.message);
        }
    }

    return(
        <main>
            <header>
                <h1>
                    8. Ingressos de cinema
                </h1>
            </header>

            <section>

                <div>
                    <label>Quantidade de inteiras </label>
                    <input type="number" value={inteira} onChange={e => setInteira(Number(e.target.value))} />
                </div>

                <div>
                    <label>Quantidade de meias </label>
                    <input type="number" value={meias} onChange={e => setMeias(Number(e.target.value))} />
                </div>

                <div>
                    <label>Dia da semana </label>
                    <input type="text" value={dia} onChange={e => setDia(e.target.value)} />
                </div>

                <div>
                    <label>O filme é nacional ? </label>
                    <input type="checkbox" value={nacionalidade} onChange={e => setNacionalidade(e.target.checked)} />
                </div>

                <div>
                    <button onClick={calcular}> Calcular </button>
                </div>

                <div>
                    <p> O total a se pagar pelos ingressos é R$ {resposta} </p>
                </div>

            </section>
        </main>
    )
}