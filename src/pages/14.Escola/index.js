import { useEffect, useState } from 'react';

import escola from '../../services/Escola/index.js';
import array from '../../services/Escola/array.js';

import './index.js';

export default function Escola() {
    const [QTD, setQTD] = useState(0);
    const [notas, setNotas] = useState([]);
    const [resp, setResp] = useState([]);

    function Calcular() {
        try {
            const r = escola(notas);
            setResp(r);
        }
        catch (err) {
            alert(err.message)
        }
    }

    function Mapear() {
        const x = array(QTD-1);
        setNotas(x);
    }

    function alterar(pos, novo) {
        notas[pos] = Number(novo);
        setNotas([...notas]);
    }

    useEffect(() => {
        Calcular();
    }, []);


    return (
        <main className='Escola '>
            <header>
                <h1>
                    14. Escola
                </h1>
            </header>

            <section>

                <div>

                    <label>Quantidade de alunos </label>
                    <input type="number" value={QTD} onChange={e => setQTD(Number(e.target.value))} />

                </div>

                <div>
                <button onClick={Mapear}> ok </button>
                </div>

                <div className="maps">
                    {notas.map((item, pos) =>
                        <div>
                            Aluno {pos+1}: <input type='text' value={notas[pos]} onChange={e => alterar(pos, e.target.value)} />
                        </div>
                    )}
                </div>

                <div>
                    <button onClick={Calcular}> Calcular </button>
                </div>

                <div>
                    <label>Média </label>
                    <input type="number" value={resp[0]} />
                    
                    <label>Maior </label>
                    <input type="number" value={resp[1]} />
                    
                    <label>Menor </label>
                    <input type="number" value={resp[2]} />
                </div>

            </section>

        </main>
    );
}