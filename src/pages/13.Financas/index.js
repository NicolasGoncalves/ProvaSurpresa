import "./index.scss"

import { useState } from "react"

import financia from "../../services/Financiamento/index.js"

export default function Financiazinha() {

    const [entrada, setEntrada] = useState();
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [financiamento, setFinanciamento] = useState();
    const [parcela, setParcela] = useState();
    const [montante, setMontante] = useState();
    const [juros, setJuros] = useState();


    function Calcular() {
        try {
            const r = financia(entrada, taxa, periodo, financiamento);
            setMontante(Math.abs(r[0]));
            setJuros(Math.abs(r[1]));
            setParcela(Math.abs(r[2]));
        } catch (err) {
            alert(err.message)
        }
    }



    return (
        <main>
            <header>
                13. Financia
            </header>

            <section>
                <div>
                    <label>
                        Financiamento:
                    </label>
                    <input type="number" value={financiamento} onChange={e => setFinanciamento(Number(e.target.value))} />
                </div>
                <div>
                    <label>
                        Entrada:
                    </label>
                    <input type="number" value={entrada} onChange={e => setEntrada(Number(e.target.value))} />
                </div>
                <div>
                    <label>
                        Taxa:
                    </label>
                    <input type="number" value={taxa} onChange={e => setTaxa(Number(e.target.value))} />
                </div>
                <div>
                    <label>
                        Período:
                    </label>
                    <input type="number" value={periodo} onChange={e => setPeriodo(Number(e.target.value))} />
                </div>
                <div>
                    <button onClick={Calcular}>
                        Calcular
                    </button>
                </div>

                <div>
                    <ol>
                        <li> Entrada:  {entrada} </li>
                        <li>valor do empreendimento:  {financiamento} </li>
                        <li>Taxa(anual):  {taxa} </li>
                        <li>Período em anos:  {periodo} </li>
                        <li>Montante:  {montante} </li>
                        <li>Juros:  {juros} </li>
                        <li>Valor das parcelas:  {parcela} </li>
                    </ol>

                </div>
            </section>
        </main>
    )
}
