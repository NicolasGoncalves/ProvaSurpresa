import { useEffect, useState } from 'react';
import escola from '../../services/Escola';
import './index.js';



export default function Escola() {


    const [QTD, setQTD] = useState(0);
    const [notas, setNotas] = useState([]);
    const [resp, setResp] = useState([]);


    // const [tamanho, setTamanho] = useState(0)
    // const [inputs, setInputs] = useState([])



    function alterarInputs() {
        const r = QTD;
        setNotas(r);
    }



    function Calcular() {

        try {
            const r = escola(notas);
            setResp(r);

        }
        catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        // alterarInputs();
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

                <div className="maps">
                    {notas.map(item=>{
                        
                        <input type="number" />
                    })}
                </div>

            </section>

        </main>
    );
}