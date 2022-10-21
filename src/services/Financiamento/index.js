export default function financia(capital, taxa, tempo, entrada){
    let cap= capital - entrada;
    let montante= cap * Math.pow( (1+(taxa/100)) ,tempo);
    let juros = montante-capital;
    let parcela = montante / (tempo*12);
    
    const m=Number(montante.toFixed(2));
    const j=Number(juros.toFixed(2));
    const p=Number(parcela.toFixed(2));

    let retorno=[m ,j,p];

    return retorno;
}
