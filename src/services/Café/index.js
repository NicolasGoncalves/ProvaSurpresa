export default function Cafe(alunos,capacidade,media){
    const consumo=alunos*media;
    let total=capacidade*1000;
    let x=capacidade*1000;
    while(consumo>total){
       total= total+x;
    }
    return total/1000;
}