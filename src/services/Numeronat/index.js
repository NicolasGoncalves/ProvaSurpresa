export default function Numero(inicio,fim){
    let x=[];
    let c=0;
    for(let i=inicio; i <= fim ; i++ ){
        x[c]=i ;
        c++;
    }
    return x;
}