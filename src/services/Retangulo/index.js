export default function DesenharRetangulo(base,altura){
    let x=[];
    let y=[];

    for(let i=0; i<altura ;i++){
        
        for(let i=0; i<base; i++){
            x[i]="  ● ";
        }

        y[i]=x;
    }

    return y;

}


