export default function cinema(int,meia,dia,nac){  
    const d=dia.toLowerCase();
    let x=0;
    if(nac=== true ){
        x=(int+meia)*5;
    }
    else if(d=== 'quarta-feira'){
        x=(int+meia)*14.25;
    }
    else{
        x=(int*28.5)+(meia*14.25);
    }
    return x;

}