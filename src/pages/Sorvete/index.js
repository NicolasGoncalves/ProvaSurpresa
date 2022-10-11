import { useState ,useEffect} from 'react'
import './index.scss'

import sorvetinho from '../../services/Sorvete/index.js'

export default function Sorvete(){
    const [gramas,setGramas]=useState();
    const [total,setToatal]=useState("");

    useEffect(() => {
        calcular();
    }, [])


    function calcular(){
        try {
            if (gramas<=0) {
                alert('Peso invalido')
            }
            const r=sorvetinho(gramas)
            setToatal(r);
        } catch (err) {
            alert(err.message)
        }
    }

    return(
        <main>
            <header>
                <h1> Sorveteria</h1>
            </header>

            <section>

                <div>
                    <label> Gramas </label>
                    <input type="number" placeholder='0g' value={gramas} onChange={e=> setGramas(Number(e.target.value))} />
                </div>

                <div>
                    <button onClick={calcular} > Calcular</button>
                </div>

                <div>
                    <p>
                        O total a se pagar é {total}
                    </p>
                </div>
            </section>
        </main>
    )
}