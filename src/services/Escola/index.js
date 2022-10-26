export default function escola(nota){
    let soma=0;
    let c=0;
    let maior=0;
    let menor=100;
    for(let item of nota){
        soma=soma+item;
        c++;
        
        if (maior<item) {
            maior=item;
        }

        if (item < menor) {
            menor=item;
        } 
    }

    const media =soma / c;
    
    const ret=[media,maior,menor]
    
    return ret;
};
