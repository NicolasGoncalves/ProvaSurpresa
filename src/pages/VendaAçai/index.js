import { useState,useEffect } from "react"
import "./index.scss"

import acai from '../../services/Acai/index.js'

export default function VendasAcai() {
    const [qtdp,setQtdp] = useState (0);
    const [qtdm,setQtdm] = useState (0);
    const [qtdg,setQtdg] = useState (0);
    const [desconto,setDesconto] = useState (0);
    const [resposta, setResposta ] = useState ("");

    useEffect(() => {
        Calcular();
    }, [])

    function Calcular(){

        try {
            const r=acai(qtdp,qtdm,qtdg,desconto);
            setResposta(r);
        } catch (err) {
            alert(err.message)
        }
        
    }


    return(
        <main>
            <header>
                    <h1>1. VENDAS AÇAÍ </h1>
            </header>

            <section> 
               <div>
                    <span> Quantidade de açaís pequenos: </span>
                    <input type="number" value={qtdp } onChange={e => setQtdp(Number(e.target.value))}/>
               </div>

               <div>
                    <span> Quantidade de açaís medios: </span>
                    <input type="number" value={qtdm } onChange={e => setQtdm(Number(e.target.value))} />
               </div>

               <div>
                    <span> Quantidade de açaís grandes: </span>
                    <input type="number" value={qtdg } onChange={e => setQtdg(Number(e.target.value))} />
               </div>

               <div>
                    <span> Desconto: </span>
                    <input type="number" value={desconto } onChange={e => setDesconto(Number(e.target.value))} />
               </div>

               <div>
                    <button onClick={Calcular}> Calcular</button>
               </div>

               <div>
                    <p>
                        {resposta}
                    </p>
               </div>

            </section>

        </main>
    )
};