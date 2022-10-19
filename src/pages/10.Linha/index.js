import './index.scss'

import linha from '../../services/DesenharLinha/index.js'
import { useState } from 'react'


export default function Linhazinha() {

    const [quantidade, setQuantidade] = useState();
    const [resposta, setResposta] = useState([]);

    
    function desenhar() {
        try {
            const r = linha(quantidade);
            setResposta(r);
        } catch (err) {
            alert(err.message)
        }
    }
    
    return(
        <main>
            <header>
                <h1>10. Desenhar Linhazinha</h1>
            </header>

            <section>
                <div>
                    <label>
                        Quantidade:
                    </label>
                    <input type="number" value={quantidade} onChange={e => setQuantidade(Number(e.target.value))} />
                </div>

                <div>
                    <button onClick={desenhar}>Desenhar</button>
                </div>

                <div>
                    <p> {resposta} </p>
                </div>
            </section>
        </main>
    )
}