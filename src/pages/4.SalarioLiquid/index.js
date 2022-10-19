import './index.scss'

import salario from "../../services/salario/index.js";
import { useState ,useEffect} from 'react';

export default function SalarioLiquido(){
    const [desconto, setDesconto] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [salariob, setSalariob] = useState(0);
    const [resposta, setResposta] = useState(0);

    useEffect(() => {
        calcular();
    }, [])

    function calcular(){
        try {
            const r=salario(salariob,bonus,desconto);
            setResposta(r);  
        } catch (err) {
            alert(err.message);
        }
        
    }
    

    return(
        <main>
            <header>
                <h1> 
                    4. Salario Liquido 
                </h1>
            </header>

            <section>
                <div>
                    <label> Salário </label>
                    <input type="number" placeholder='R$' value={salariob} onChange={e=>setSalariob(Number(e.target.value))}/>
                </div>

                <div>
                    <label>Bônus </label>
                    <input type="number" placeholder='%' value={bonus} onChange={e=>setBonus(Number(e.target.value))}/>
                </div>

                <div>
                    <label> Desconto </label>
                    <input type="number" placeholder='R$' value={desconto} onChange={e=>setDesconto(Number(e.target.value))}/>
                </div>

                <div>
                    <button onClick={calcular} >Calcular </button>
                </div>

                <div>
                    <p> O seu salário liquido é de R${resposta}</p>
                </div>

            </section>
        </main>
    )
}