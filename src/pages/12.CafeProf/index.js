import './index.scss'

import Cafe from '../../services/Café/index.js'
import { useState } from 'react'

export default function Cafezinho(){
    const [alunos, setAlunos]= useState();
    const [capacidade, setCapacidade] = useState();
    const [consumo, setConsumo] = useState();
    const [resposta, setReposta] = useState('');


    function calcular(){
        try{
            if (alunos<1) {
                alert('Quantidade de alunos invalida');
            }
            else if(consumo>10000){
                alert('Consumo médio ultrapassado')
            }
            else{
                const r = Cafe(alunos,capacidade,consumo);
                setReposta(r);
            }
        }catch(err){
            alert(err.message);
        }
    }

    return(
        <main>
            <header>
                <h1>12. Café do professor </h1>
            </header>
            <section>
                <div>
                    <label>Quantidade de alunos</label>
                    <input type='number' value={ alunos} onChange={ e=> setAlunos(Number(e.target.value))} />
                </div>
                <div>
                    <label>Capacidade</label>
                    <input type='number' value={ capacidade} onChange={ e=> setCapacidade(Number(e.target.value))} />
                </div>
                <div>
                    <label>consumo</label>
                    <input type='number' value={ consumo} onChange={ e=> setConsumo(Number(e.target.value))} /> 
                </div>
                <div>
                    <button onClick={calcular}>Calcular </button>
                </div>
                <div>
                    <p> {resposta} </p>
                </div>

            </section>
        </main>
    )

} 