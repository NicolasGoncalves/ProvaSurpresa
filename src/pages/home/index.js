import './index.scss'

export default function Home() {
    return (
        <main className='main-home'>
            <header className='header-home'>
                <h1 className='h1-home'> Prova surpresa do Bruninho</h1>
            </header>

            <section className='section-home'>

                <a className='a-home' href="/acai">
                    <button className='button-home'> Vendas de Açaí </button>
                </a>

                <a className='a-home' href="/signo">
                    <button className='button-home'> Signo </button>
                </a>

                <a className='a-home' href="/sorveteria">
                    <button className='button-home'> Sorveteria </button>
                </a>

                <a className='a-home' href="/salarioliquido">
                    <button className='button-home'> Salário Liquido </button>
                </a>

                <a className='a-home' href="/paradas">
                    <button className='button-home'> Quantidade de paradas </button>
                </a>

                <a className='a-home' href="/febre">
                    <button className='button-home'> Verificar febre </button>
                </a>

                <a className='a-home' href="/orcamentoFamiliar">
                    <button className='button-home'> Verificar Orçamento </button>
                </a>

                <a className='a-home' href="/cinema">
                    <button className='button-home'> Verificar Ingressos </button>
                </a>

            </section>
        </main>
    )
}